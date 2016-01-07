var quiz = [
	{question: 'What is the right file format for the Cost Report BOM upload?', answers: ['OpenOffice *.sxc file', 'Microsoft Excel *.xls file', 'Adobe Acrobat *.pdf file'], correct: 1},
	{question: 'The technical inspectors (scrutineers) do not have the right to...', answers: ['Assign scoring points for passing technical inspection.', 'Require a team to correct a problem, if any part of a vehicle does not comply with the rules or is otherwise deemed to be a concern.', 'Re-inspect any vehicle at any time during the competition.'], correct: 0},
	{question: 'What is the maximum allowed permanent deflection of the anti intrusion plate?', answers: ['None', '25.1 mm', '15.5 mm'], correct: 2},
	{question: 'If the submitted SEF does not pass inspection and the scrutineers request further information, teams have...', answers:['10 days from the date of the request to submit the requested information', '20 days from the date of the request to submit the requested information', 'to present the requested information during technical inspection at the event'], correct: 0},
	{question: 'Which angle will not specifically be tested on the Tilt Table?', answers:['60.0', '52.5', '45.0'], correct: 0}
];//{question: 'asd', answers:['1', '2', '3'], correct: 0},

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
function get(x){
	return document.getElementById(x);
}


//START OF HTML SCRIPTING
function generateLists(){
	for (i=0; i<quiz.length; i++){
		var num = String(i+1)
		var list_text = "<header class='header'><p class='number'>#"+num+'<h1 id=Q'+num+"></h1></header><section class='content'><ul class='list' id=q_"+num+"></ul></section>";
		$(insertList).append(list_text);
	}
}
generateLists();

function generateButton(){
	var button_html = "<div class='button'><div class='submit'><h3>Submit</h3></div><div class='arrow'><div class='top line'></div>	<div class='bottom line'></div></div></div><p class='instructions'>Check results<p>";
	$(insertButton).append(button_html);
}
generateButton();

var radioCheckedList = [];

function setQuestions(){
	//shuffle questions and answers
	var currentPos= 0; //set current question
	var shuffledQuiz = shuffle(quiz); //shuffle questions
	var currentRadioGroup = -1; //to handle unique radio-ids. Question 1 will have the id: 0_*insert answer number*, e.g: 0_1 refers to question 1 answer number 2. from 0 and up, to follow i and n values later.
	
	while (currentPos < quiz.length){
		//shuffle answers for each question (happens every loop)
		var shuffledAns = shuffle(shuffledQuiz[currentPos].answers);
		var selectedQ = 'Q'+String(currentPos+1); //gives the value Q1, Q2, ... , Q(n).
		get(selectedQ).innerHTML=shuffledQuiz[currentPos].question;
		var tempTag = '#q_'+String(currentPos+1); //unique names for radio groups
		currentRadioGroup++; //jump to the nest question after answers are registered.
		for (n=0; n<shuffledQuiz[currentPos].answers.length;n++){
			//sets a unique value for each answer, such as 0_0 or 0_1 for question 1 answer 1 and 2. Add it to radio value.
			var radio_id = String(currentRadioGroup)+'_'+String(n)
			var add_text = "<li class='list_item'><label class='label--radio'><input type='radio' class='radio' value="+radio_id+" name="+tempTag+"><div id=list_inputText>"+shuffledQuiz[currentPos].answers[n]+"</div></label></li>";
			$(tempTag).append(add_text);
		}
		currentPos++;
	}
}
setQuestions();

function getRadioValue(name){
	var radios = document.getElementsByName(name);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			return(radios[i].value);
			// only one radio can be logically checked, don't check the rest
			break;
		}
	}
}

var correctAnswers = 0;
var totalAnswers = quiz.length;
function checkCorrectAnswers(){
	for (i=0; i<quiz.length; i++){
		for (n=0; n<quiz[i].answers.length;n++){
			console.log(String(i)+', answer:'+String(n));
		}
	}
}


//END OF HTML SCRIPTING

 
 
//BUTTON BELOW
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
	  
	//go through all questions and save the answers in a list
	ans_list = [];
	console.log('List contents:\n');
	for (i=0; i<quiz.length;i++){
		var tempAns = "#q_"+String(i+1);
		ans_list.push(getRadioValue(tempAns));
		console.log(ans_list[i]);
	}
	checkCorrectAnswers();
    return $(this).addClass("active");
  });
}

hover();
hoverOff();
active();
//END OF BUTTON