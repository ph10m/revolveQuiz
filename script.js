var urlString = "url  ="+window.location.href;
fetchLink = urlString.substring(urlString.length+1, urlString.indexOf('#'));

var getQuiz = Number(fetchLink[1]);
console.log('Found quiz: '+getQuiz);
//{question: '', answers:['', '', '', '', '', '', '', '', ''], correct: 0},

function get(x){
	return document.getElementById(x);
}
var quiz;
switch(getQuiz){
	case 0:
		quiz=testOne;
		break;
	case 1:
		get('bigLogo').innerHTML='Test Quiz 1';
		quiz=testOne;
		break;
	case 2:
		get('bigLogo').innerHTML='Test Quiz 2';
		quiz=testTwo;
		break;
	case 3:
		get('bigLogo').innerHTML='Test Quiz 3';
		quiz=testThree;
		break;
	case 4:
		get('bigLogo').innerHTML='Test Quiz 4';
		quiz=testFour;
		break;
	case 5:
		get('bigLogo').innerHTML='Test Quiz 5';
		quiz=testFive;
		break;
	case 6:
		get('bigLogo').innerHTML='FSAE Quiz 1';
		quiz=FSAEone;
		break;
	case 7:
		get('bigLogo').innerHTML='FSAE Quiz 1';
		quiz=FSAEtwo;
		break;
	case 8:
		get('bigLogo').innerHTML='FSAE Quiz 1';
		quiz=FSAEthree;
		break;
		
	default:
		alert('Found no valid quizzes, setting default to Test One');
		get('bigLogo').innerHTML='Error mode: Test Quiz 1';
		quiz = testOne;
}
 
//This is the original array for questions and answers:
var ansArray = [];
var qstArray = [];
for (i=0;i<quiz.length;i++){
	qstArray.push(quiz[i].question);
	ansArray.push(quiz[i].answers[0]);
	//console.log('\nQ:'+qstArray[i]+'\nANS: '+ansArray[i]);
}


function shuffle(array) { //fisher-yates shuffle
    var counter = array.length, temp, index;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function setQuestions(){
	for (i=0; i<quiz.length; i++){
		var num = String(i+1)
		var list_text =
		"<header class='header'>\
			<p class='number'>\
				#"+num+'</p>\
			<p id=Q'+num+"></p>\
		</header>\
		<section class='content'>\
			<ul class='list' id=q_"+num+">\
			</ul>\
		</section>";
		$(insertList).append(list_text);
	}
}

function setAnswers(){
	//shuffle questions and answers
	var currentPos= 0; //set current question
	var currentRadioGroup = -1; //to handle unique radio-ids. Question 1 will have the id: 0_*insert answer number*, e.g: 0_1 refers to question 1 answer number 2. from 0 and up, to follow i and n values later.
	while (currentPos < quiz.length){
		//shuffle answers for each question, for total randomness.
		var shuffledAns = shuffle(shuffledQuiz[currentPos].answers);
		var selectedQ = 'Q'+String(currentPos+1);//gives the value Q1, Q2, ... , Q(n).
		get(selectedQ).innerHTML=shuffledQuiz[currentPos].question;
		var tempTag = '#q_'+String(currentPos+1);//unique names for radio groups so they behave according to their group.
		currentRadioGroup++;//jump to the nest question after answers are registered.
		for (n=0; n<shuffledQuiz[currentPos].answers.length;n++){
			//sets a unique value for each answer, such as 0_0 or 0_1 for question 1 answer 1 and 2. Add it to radio value.
			var radio_id = String(currentRadioGroup)+'_'+String(n)
			var add_text = 
			"<li class='list_item'>\
				<label class='label--radio'>\
					<input type='radio' class='radio' value="+radio_id+" name="+tempTag+">\
					<div id=list_inputText>\
						"+shuffledQuiz[currentPos].answers[n]+"\
					</div>\
				</label>\
			</li>";
			$(tempTag).append(add_text);
		}
		currentPos++;
	}
}

// GET WRONG ANSWERS
function compareShuffledOriginal(shuffledQuestion, shuffledAns){
	//we need to find shuffledQuestion in qstArray and then return the same value from the ansArray.
	var index = qstArray.indexOf(shuffledQuestion);
	if (shuffledAns==ansArray[index]) return;
	else amountWrong++;
}
function checkCorrect(answer_list, shuffledArray){
	//Remember: answer_list comes in the form: [0_0, 1_0, 2_0, 3_0] where the first index is the question, and the second is the answer.
	
	for (i=0; i < answer_list.length;i++){
		if ((answer_list[i]===undefined||answer_list[i]===null)){
			//handle errors here if desired.
			amountWrong++;
			continue;
		}
		if (answer_list[i].length == 3){
			//get the string for the current question we're answering
			currentQuestion = shuffledArray[i].question;
			currentAns = shuffledArray[i].answers[answer_list[i][2]];
			compareShuffledOriginal(currentQuestion, currentAns, quiz);
		}
		//Question number >=10 will have four letters, e.g: 11_3, separate these.
		else if (answer_list[i].length == 4){
			currentQuestion=shuffledArray[i].question;
			currentAns = shuffledArray[i].answers[answer_list[i][3]];
			compareShuffledOriginal(currentQuestion, currentAns, quiz);
		}	
	}
	if (amountWrong==0){alert('Everything is correct!');forceActive();}
	else{alert(amountWrong+' wrong answers!\nYou can submit again in 30 seconds');}
	console.log('Score: '+(answer_list.length-amountWrong)+'/'+answer_list.length);

}

function getRadioValue(name){
	var radios = document.getElementsByName(name);
	for (i;i<radios.length;i++){
		if (radios[i].checked) {
			console.log('found checked radio at :'+i);
			return(radios[i].value);
			// only one radio can be logically checked, don't check the rest
			
			/*
			EDIT HERE: CAN WE DO SOMETHING WITH THE RADIOS[I] VALUE?
			SO FAR WE HAVE THE i VALUE FOR WHICH QUESTION TO CHECK
			AND NOW THE ANSWER VALUE. WE CAN THEN SAY THAT WE HAVE
			1) THE SHUFFLED QUESTION (shuffledQuestion = shuffledArray[n].question;)
			2) THE QUESTIONS' ANSWER (radioAns = shuffledQuestion.answers[radios[i]];)
			*/
			break;
		}
	}
}

function submitAnswers(){
	amountWrong = 0;
	//go through all questions and save the answers in an array.
	ans_list = [];
	console.log('List contents:\n');
	for (i=0; i<quiz.length;i++){
		var tempAns = "#q_"+String(i+1);
		ans_list.push(getRadioValue(tempAns));
		console.log(ans_list[i]);
	}
	checkCorrect(ans_list, shuffledQuiz);
}

$(".wrapper").hide();
var shuffledQuiz = shuffle(quiz);
setQuestions();
setAnswers();
var amountWrong;
var currentQuestion;
var currentAns;

var timerValue = 30000;

//Submit-button and timers.
function hover() {
  $(".button").on("mouseenter", function() {
    return $(this).addClass("hover");
  });
}
function hoverOff() {
  $(".button").on("mouseleave", function() {
    return $(this).removeClass("hover");
  });
}
function active() {
  $(".button").on("click", function() {
	submitAnswers();
	$('.radio').prop('checked',false);
	$(this).hide('slow');
	$('html, body').animate({scrollTop:200}, 800);//scroll speed
	showButton();
  });
}
function forceActive() {//green submit button when it's called from 0 errors in checkCorrect.
  $(".button").on("click", function() {
	 return $(this).addClass("active");
  });
}
function showButton(){
	setTimeout(function() { 
		   $(".button").fadeIn('slow'); 
	}, timerValue);
}


hover();
hoverOff();
active();