//a list of five quizzes. Let every correct answer be 0, and sort them such that it's true.



var testOne = [
	{question: 'Et fotballlag har vunnet 50% av de 20 siste kampene de har spilt så langt. Hvor mange kamper på rad må de vinne for å øke seierprosenten til 60%?', answers: ['8', '9', '6', '7', '10', '3', '4', '5'], correct: 7},
		
	{question: 'Hvis du kjører til butikken i 20 km/t og tilbake i 30 km/t, hva er snitthastigheten din?', answers: ['25 km/t', '26 km/t', '23 km/t', '24 km/t', '27 km/t', '22 km/t'], correct: 3},
	
	{question: 'Hva er vinkelsummen i en femkant?', answers: ['540 grader', '720 grader', '360 grader', '550 grader', '600 grader'], correct: 0},

	{question: 'Hvilke to faser er det i duplex-stål', answers:['Ferritt & Martensitt', 'Bainitt & Perlitt', 'Bainitt & Martensitt', 'Perlitt & Ferritt', 'Austenitt & Ferritt', 'Sementitt & Austenitt'], correct: 4},
	
	{question: 'Hva er du i ferd med å kjøpe hvis man oppgir et DN og et PN nummer?', answers:['Flatstål', 'Bolt', 'Rør', 'Skruer', 'Bjelke'], correct: 2},
	
	{question: 'Hva menes med standardene 304L og 316L?', answers:['Herdet stål', 'Aluminium', 'Svartstål', 'Titan', 'Rustfritt stål'], correct: 4},

	{question: 'Hva heter det i fysikken når en væske blir til gass som følge av at trykket i væsken synker til under damptrykket?', answers: ['Kavitasjon', 'Barotropi', 'Konveksjon', 'Adveksjon', 'Termal sirkulasjon'], correct: 0},
	
	{question: 'Hvilken spenning markerer skillet mellom elastisk og plastisk deformasjon?', answers: ['Flytespenning', 'Bøyespenning', 'Skjærspenning', 'Bruddspenning'], correct: 0},

	{question: 'Hvis en 2000-watts vannkoker står på i 15 minutter. hvor mange kilowattimer har den da brukt? Svar i kWh', answers:['0.5', '1', '0.8', '1.5', '0.3', '1.3'], correct: 0},
	
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
