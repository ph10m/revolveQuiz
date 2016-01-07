var quiz = [
	{question: 'What is the right file format for the Cost Report BOM upload?', answers: ['OpenOffice *.sxc file', 'Microsoft Excel *.xls file', 'Adobe Acrobat *.pdf file'], correct: 1},
	{question: 'The technical inspectors (scrutineers) do not have the right to...', answers: ['assign scoring points for passing technical inspection.', 'require a team to correct a problem, if any part of a vehicle does not comply with the rules or is otherwise deemed to be a concern.', 're-inspect any vehicle at any time during the competition.'], correct: 0},
	{question: 'What is the maximum allowed permanent deflection of the anti intrusion plate?', answers: ['none', '25.1 mm', '15.5 mm'], correct: 2},
	{question: 'If the submitted SEF does not pass inspection and the scrutineers request further information, teams have...', answers:['10 days from the date of the request to submit the requested information', '20 days from the date of the request to submit the requested information', 'to present the requested information during technical inspection at the event'], correct: 0},
	{question: 'Which angle will not specifically be tested on the Tilt Table?', answers:['60.0', '52.5', '45.0'], correct: 0},
	

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

function generateLists(){
	for (i=0; i<quiz.length; i++){
		var num = String(i+1)
		//var list_text = "<header class='header'><p class='number'>#"+num+'<h1 id=Q'+num+"></h1></header><section class='content'><ul class='list' id='q_"+num+"></ul></section>";
		var list_text = "<header class='header'><p class='number'>#"+num+'<h1 id=Q'+num+"></h1></header><section class='content'><ul class='list' id=q_"+num+"></ul></section>";
		$(insertList).append(list_text);
		var list_text = "<header class='header'><p class='number'>#"+num+'<h1 id=Q'+num+"></h1></header><section class='content'><ul class='list' id='q_"+num+"></ul></section>";
	}
}
generateLists();


function setQuestions(){
	//shuffle questions and answers
	var currentPos= 0; //set current question
	var shuffledQuiz = shuffle(quiz); //shuffle questions

	while (currentPos < quiz.length){
		//shuffle answers for each question (happens every loop)
		var shuffledAns = shuffle(shuffledQuiz[currentPos].answers);

		var selectedQ = 'Q'+String(currentPos+1); //gives the value Q1, Q2, ... , Q(n).
		get(selectedQ).innerHTML=shuffledQuiz[currentPos].question;
		
		var tempTag = '#q_'+String(currentPos+1); //dynamic tag for answers
		for (n=0; n<shuffledQuiz[currentPos].answers.length;n++){
			var add_text = "<li class='list_item'><label class='label--radio'><input type='radio' class='radio' name="+tempTag+'>'+shuffledQuiz[currentPos].answers[n]+"</label></li>";
			$(tempTag).append(add_text);
			console.log(tempTag);
		}
		currentPos++;
	}
}
setQuestions();


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
    return $(this).addClass("active");
  });
}

hover();
hoverOff();
active();


