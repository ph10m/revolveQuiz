var quiz = [
	{question: 'Question 1 text', answers: ['12.48', '34.1', '85.3'], correct: 0},
	{question: 'Question 2 text', answers: ['ab', 'dfwqe', 'wjeiw', 'xasd'], correct: 3},
	{question: 'Question 3 text', answers: ['123', '456', '789'], correct: 2}
];

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
$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
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



