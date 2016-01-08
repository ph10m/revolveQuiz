//QUIZ 1
var testOne = [
	{question: 'Et fotballlag har vunnet 50% av de 20 siste kampene de har spilt så langt. Hvor mange kamper på rad må de vinne for å øke seierprosenten til 60%?', answers: ['5','8', '9', '6', '7', '10', '3', '4'], correct: 0},
		
	{question: 'Hvis du kjører til butikken i 20 km/t og tilbake i 30 km/t, hva er snitthastigheten din?', answers: ['24 km/t', '25 km/t', '26 km/t', '23 km/t','27 km/t', '22 km/t'], correct: 0},
	
	{question: 'Hva er vinkelsummen i en femkant?', answers: ['540 grader', '720 grader', '360 grader', '550 grader', '600 grader'], correct: 0},

	{question: 'Hvilke to faser er det i duplex-stål', answers:['Austenitt & Ferritt', 'Ferritt & Martensitt', 'Bainitt & Perlitt', 'Bainitt & Martensitt', 'Perlitt & Ferritt', 'Sementitt & Austenitt'], correct: 0},
	
	{question: 'Hva er du i ferd med å kjøpe hvis man oppgir et DN og et PN nummer?', answers:['Rør', 'Flatstål', 'Bolt', 'Skruer', 'Bjelke'], correct: 0},
	
	{question: 'Hva menes med standardene 304L og 316L?', answers:['Rustfritt stål', 'Herdet stål', 'Aluminium', 'Svartstål', 'Titan'], correct: 0},

	{question: 'Hva heter det i fysikken når en væske blir til gass som følge av at trykket i væsken synker til under damptrykket?', answers: ['Kavitasjon', 'Barotropi', 'Konveksjon', 'Adveksjon', 'Termal sirkulasjon'], correct: 0},
	
	{question: 'Hvilken spenning markerer skillet mellom elastisk og plastisk deformasjon?', answers: ['Flytespenning', 'Bøyespenning', 'Skjærspenning', 'Bruddspenning'], correct: 0},

	{question: 'Hvis en 2000-watts vannkoker står på i 15 minutter. Hvor mange kilowattimer har den da brukt? Svar i kWh', answers:['0.5', '1', '0.8', '1.5', '0.3', '1.3'], correct: 0},
	
	{question: 'Hvilke av følgende er ikke et tegnsett?', answers:['IEEE', 'UTF-16', 'ASCII', 'UTF-8'], correct: 0},
	
	{question: 'Hva er navnet på en applikasjon som gjør om programmeringsspråk til et maskinspråk', answers:['Kompilator', 'Aritmetikk', 'Omformer', 'Interpreter'], correct: 0},
	
	{question: 'Hvor mange kvadratmeter er det i et mål?', answers:['1000', '100000', '100', '10000', '10'], correct: 0},
	
	{question: 'Hva skjer med en stålbjelke som varmes opp med forskjellig temperatur på over- og undersiden? Den...', answers:['Forlenges og bøyes', 'Forelenges', 'Krymper og bøyes', 'Krymper', 'Bøyes'], correct: 0},
	
	{question: 'Hvilken trigonometrisk funksjon beskriver forholdet mellom den hosliggende kateten og hypotenusen i en rettvinklet trekant', answers:['Cosinus', 'Arccosinus', 'Tangens', 'Arctanges', 'Sinus', 'Arcsinus'], correct: 0},
	
	{question: 'Hva er uttrykket for effektiviteten til en Carnot-varmemaskin?', answers:['1-(T_h/T_c)', '1/(T_c/T_h)', '1-(T_c/T_h)', '(T_h/T_c)-1', '1/(T_h/T_c)'], correct: 0}
];

//QUIZ 2
var testTwo = [
	{question: 'Hvilken gass skulle egentlig ligge rundt hydrogengassen i Hindenburg som brannsikkerhet', answers: ['Helium', 'Argon', 'Neon', 'Xenon', 'Krypton'], correct: 0},
	
	{question: 'Hvor mange hjørner er det på et regulært ikosaeder?', answers: ['12', '9', '15', '10', '14', '11', '13', '16'], correct: 0},
	
	{question: 'Hva kalles læren om deformasjon- og flytegenskapene i seige væsker og plastiske masser?', answers: ['Reologi', 'Visilogi', 'Newtonologi', 'Elastolagi', 'Viskologi'], correct: 0},
	
	{question: 'Hvor mange primtall er det mellom 0 og 30?', answers: ['10', '11', '6', '9', '8', '7'], correct: 0},
	
	{question: 'Hva er dimensjonerende ute temperaturen i Trondheim i bygningsteknikken? I Celsius', answers: ['-19', '-13', '-21', '-17', '-15', '-11'], correct: 0},
	
	{question: 'Hva kalles komprimeringsalgoritmen som sorterer symboler etter antall forekomster for så å fordele dem i et binært tre med grenseverdier 0 og 1?', answers: ['Huffman-algoritmen', 'Smith–Waterman algoritmen', 'Needleman–Wunsch algoritmen', 'Hirschberg algoritmen', 'Schensted algoritmen', 'Kadanes algoritme'], correct: 0},
	
	{question: 'Radiusen til en sirkel øker med 50%. Hvor mange prosent øker sirkelens areal?', answers: ['125%', '175%', '150%', '75%', '50%', '100%'], correct: 0},

	{question: 'Hvilken koeffisient bestemmes ut fra et Moody diagram', answers: ['Friksjon', 'Trykk', 'Varmeveksling', 'Luftmostand'], correct: 0},
	
	{question: 'Hvilken klassisk ligning kan du bruke til å finne krefter på en sylinder som står vertikalt i strømmende vann?', answers: ['Morisons ligning', 'Ricattis ligning', 'Pells ligning', 'Ishimoris ligning', 'Verhulsts ligning'], correct: 0},
	
	{question: 'cos^2(x)-sin^2(x) er det samme som?', answers: ['cos(2x)', 'cos(x/2)', 'tan(x/2)', 'tan(2x)', 'sin(2x)', 'sin(x/2)'], correct: 0},
	
	{question: 'Per, Pål og Espen har i gjennomsnitt 100 kroner. Per har like mye som Pål og Espen til sammen. Hvor mye har Per?', answers: ['150', '75', '125', '50', '200', '175', '100'], correct: 0},
	
	{question: 'Hva kalles teoremet som brukes til å regne ut annet arealmoment og treghetsmomentet for sammensatte tverrsnitt om ønsket akse?', answers: ['Parallellakseteoremet', 'Treghetsteoremet', 'Langevin teoremet', 'Friedmann teoremet', 'Vlasovs teorem'], correct: 0},
	
	{question: 'Hvis et materiale strekkes i en retning, har det en tendens til å komprimeres i en annen retning. Hva kalles dette fenomenet?', answers: ['Poissons fenomenet', 'Newton fenomenet', 'Hooke fenomenet', 'Euler fenomenet'], correct: 0},
	
	{question: 'Hvor mange satellitter må en GPS-mottaker ha kontakt med for å kunne gi en tredimensjonal posisjonsangivelse', answers: ['4', '2', '3', '5'], correct: 0},
	
	{question: 'Hva er integranden av 1/(cos(x)^2)', answers: ['tan(x)', '1/(sin(x)^2)', 'cos(x)^2/sin(x)^2', 'sin(x)', '1/tan(x)', '1/sin(x)'], correct: 0}
];
//{question: 'asd', answers:['1', '2', '3'], correct: 0},

var quiz = testOne;

//This is the original array for questions and answers:
var ansArray = [];
var qstArray = [];
for (i=0;i<quiz.length;i++){
	qstArray.push(quiz[i].question);
	ansArray.push(quiz[i].answers[0]);
	console.log('\nQ:'+qstArray[i]+'\nANS: '+ansArray[i]);
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

function get(x){
	return document.getElementById(x);
}

function generateLists(){
	for (i=0; i<quiz.length; i++){
		var num = String(i+1)
		var list_text = "<header class='header'><p class='number'>#"+num+'<h1 id=Q'+num+"></h1></header><section class='content'><ul class='list' id=q_"+num+"></ul></section>";
		$(insertList).append(list_text);
	}
}

function setQuestions(){
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
			var add_text = "<li class='list_item'><label class='label--radio'><input type='radio' class='radio' value="+radio_id+" name="+tempTag+"><div id=list_inputText>"+shuffledQuiz[currentPos].answers[n]+"</div></label></li>";
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
	else{alert(amountWrong+' wrong answers!');}
	console.log('Score: '+(answer_list.length-amountWrong)+'/'+answer_list.length);

}

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

var shuffledQuiz = shuffle(quiz);
generateLists();
setQuestions();
var amountWrong;
var currentQuestion;
var currentAns;

//Submit-button. Add timer later.
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
  });
}
function forceActive() {//green submit button when it's called from 0 errors in checkCorrect.
  $(".button").on("click", function() {
	 return $(this).addClass("active");
  });
}
hover();
hoverOff();
active();