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

//QUIZ 3
var testThree = [
	{question: 'Hvor mye lengre unna jorden beveger månen seg hvert år?', answers:['0.038 m', '38 cm', '3.8 dm', '3.8m', '38m', '3.8*10^(-5) dm'], correct: 0},
	
	{question: 'Hvor ofte vil en analog klokke som går 30 minutter senere hver dag, vise riktig tid?', answers:['Hver 24. dag', 'Hver 10. dag', 'Hver 19. dag', 'Hver 28. dag', 'Hver 30. dag'], correct: 0},
	
	{question: 'Hvor mye øker temperaturen på det fallende vannet dersom all energi fra en 100 meter høy foss går med til å varme det opp? Svar i Celsius', answers:['0.23', '0.023', '2.3', '23', '0.0023'], correct: 0},
	
	{question: 'Hvilket av disse metallene har høyest termisk ledningsevne?', answers:['Sølv', 'Gull', 'Kopper', 'Nikkel', 'Titan', 'Uran'], correct: 0},
	
	{question: 'Hvor mange bits trenger du for å kode de 29 bokstavene i alfabetet vårt?', answers:['5', '2', '3', '4', '6', '7', '8', '9'], correct: 0},
	
	{question: 'Hvilket metall har høyest termisk ledningsevne?', answers:['Sølv', 'Gull', 'Kopper', 'Nikkel', 'Titan', 'Uran'], correct: 0},
	
	{question: 'Hva kalles vann med høyt innhold av magnesium eller kalsium?', answers:['Hardt vann', 'Tungt vann', 'Brakkvann', 'Surt vann', 'Gift'], correct: 0},
	
	{question: 'Hvor mye veier en førstegenerasjons iPad uten 3G?', answers:['680g', '580g', '780g', '880g', '980g', '1080g'], correct: 0},
	
	{question: 'Hva er SI-enheten til termisk konduktivitet?', answers:['W/mk', 'kW/mK', 'WK/m', 'mk/W', 'mWk'], correct: 0},
	
	{question: 'Hvilken trigonometrisk funksjon, snudd opp ned, må veien være formet som for at en sykkel med firkantede hjul skal kunne kjøre gjevt over?', answers:['cosh(x)', 'sinh(x)', 'arcsinh(x)', 'arccosh(x)', '1/tan(x)', '1/cos^2(x)'], correct: 0},
	
	{question: 'Ni mennesker er i et selskap. Når de skal gå, tar alle hverandre i hånden en gang. Hvor mange håndtrykk blir det i alt?', answers:['36', '30', '31', '32', '33', '34', '35', '37', '38'], correct: 0},
	
	{question: 'Hvis du ønsker å bevege deg dobbelt så raskt i en kano, hvor mye mer "energisk" må du da padle?', answers:['8 ganger', '2 ganger', '3 ganger', '4 ganger', '5 ganger', '6 ganger', '7 ganger'], correct: 0},
	
	{question: 'Hvilket japansk teknologiselskap hadde sitt gjennombrudd med en ring der man kunne plassere sigaretten for å røyke en større del av den?', answers:['Casio', 'Toyota', 'Motorola', 'Sony', 'Fujitsu'], correct: 0}	
];


//QUIZ 4
var testFour = [
	{question: 'Hva er hex-tallet 3F i ti-tallsystemet?', answers:['63', '60', '61', '62', '67', '64', '65'], correct: 0},
	
	{question: 'Tog A kjører fra Oslo i 75km/t, Tog B kjører fra Trondheim i 50 km/t. Hvis det er 500 km mellom Trondheim og Oslo, hvor langt fra Oslo møtes togene?', answers:['300 km', '200 km', '250 km', '350 km', '400 km'], correct: 0},
	
	{question: 'Hvor stor er pekeren av typen int på en 64-bits plattform?', answers:['8 bytes', '2 bytes', '4 bytes', '16 bytes'], correct: 0},
	
	{question: 'Hva er enheten for magnetisk flux?', answers:['Weber', 'Tesla', 'Gauss'], correct: 0},
	
	{question: 'Hvis du har et gross og tre dusin egg, hvor mange egg har du da?', answers:['180', '160', '140', '200', '120'], correct: 0},
	
	{question: 'I programmering, hva heter en funksjon som kaller på seg selv?', answers:['Rekursiv', 'Repetativ', 'Hentende', 'Assosiativ', 'Alternerende'], correct: 0},
	
	{question: 'Dersom en murstein veier 3 kg pluss vekten av en halv murstein, hvor mye veier den da?', answers:['6', '3', '4', '5', '7', '8'], correct: 0},
	
	{question: 'Hvilket matematisk tegn ble funnet opp i 1557 av Robert Recorde?', answers:['=', '-', '+', '!', 'pi', 'e', 'Summeringstegnet'], correct: 0},
	
	{question: 'Bård og Gøran delte 400kr mellom seg. Tredjedelen av det Bård fikk, var lik halvparten av det Gøran fikk. Hvor mye fikk Bård?', answers:['240', '200', '210', '220', '230', '250'], correct: 0},
	
	{question: 'I hvilke retninger foregår slip i en BCC-krystall?', answers:['<111>', '<110>', '<100>'], correct: 0},
	
	{question: 'En halvfull bensintank fylles med ytterligere 15 liter bensin er den 2/3 full. Hvor mange liter rommer tanken totalt? Svar i liter', answers:['90', '100', '95', '85', '80', '75', '70'], correct: 0},
	
	{question: "Wilson's teorem sier at (n-1)!≡ -(mod n), hva er da spesielt med n hvis dette er oppfylt?", answers:['n er et primtall', 'n er et partall', 'n er et oddetall', 'n er et komplekst tall', 'n er et imaginært tall'], correct: 0},
	
	{question: 'Hvorfor heller partikkelakseleratoren på CERN ned mot Genevsjøen?', answers:['Kompensere for massen i nærliggende felt', 'Kompensere for jordens krumning', 'Kompensere for jordens rotasjon', 'Kompensere for flo og fjære'], correct: 0},
	
	{question: 'Hva har gjennom historien blitt målt i skrupler, skritt og pass?', answers:['Lengde', 'Masse', 'Tid', 'Hastighet'], correct: 0},
	
	{question: 'Hvilken annengrads polynomisk funksjon kan beskrives som et kjeglesnitt?', answers:['Parabel', 'Hyperbol', 'Sirkel', 'Eksponential'], correct: 0},
	
	{question: 'Et kvaderatisk papirstykke brettes langs midten til et rektangel med omkrets 18 cm. Hva er arealet av det opprinnelige papirstykket?', answers:['36 cm^2', '24 cm^2', '30 cm^2', '32 cm^2', '34 cm^2', '38 cm^2'], correct: 0}
	
];



//QUIZ 5
var testFive = [
	{question: 'I maskinmekanikk, hva kalles spenningene mellom en tapp og en boring i en krympeforbindelse?', answers:['Pressmonn', 'Borremonn', 'Tappmonn', 'Trykkmonn', 'Pokemonn'], correct: 0},
	
	{question: 'Hvilket år startet nettsiden YouTube?', answers:['2005', '2001', '2002', '2003', '2004', '2008'], correct: 0},
	
	{question: 'Hva blir det binære tallet 1101010 i det vanlige titallsystemet?', answers:['106', '34', '76', '104', '78', '102'], correct: 0},
	
	{question: 'I hvilke to land finner man de eneste pattedyrene som legger egg?', answers:['Australia og Indonesia', 'Brasil og Argentina', 'Fiji og Indonesia', 'Australia og New Zeleand', 'Thailand og Vietnam', 'Brasil og Columbia', 'Fiji og New Zealand'], correct: 0},
	
	{question: 'Hva kalles det å utføre en investering for å minimere eller fjerne risiko ved en annen investering?', answers:['Hedging', 'Shorting', 'Day-trading', 'LRB (Low Risk Buy)', 'Zeroing', 'Fonding'], correct: 0},
	
	{question: 'I astrofysikken, hva brukes parallaksemetoden til?', answers:['Å måle avstanden fra jorda til himmellegemer', 'Å måle hastigheten til himmellegemer', 'Å telle himmellegemer', 'Å regne ut flo og fjære', 'Å spå nordlys', 'Å forutsi planetenes baner rundt stjerner'], correct: 0},
	
	{question: 'I 2008 ble det sendt ca 210 milliarder epost hver dag. Hvor mange prosent av dette var spam?', answers:['70%', '30%', '40%', '50%', '60%', '80%', '90%'], correct: 0},
	
	{question: 'Hvor var 17 442 598 brukere logget inn samtidig 11. mai 2009?', answers:['Skype', 'Facebook', 'MySpace', 'Tinder', 'Weibu', 'Twitter', 'YouTube'], correct: 0},
	
	{question: 'Hva er spesielt med Akashi-Kaikyo-broen?', answers:['Den er verdens lengste hengebro', 'Den er verdens høyeste hengebro', 'Den er verdens bredeste hengebro', 'Den er verdens dyreste hengebro', 'Den raste bare noen dager etter åpningen', 'Den ble bygget for 500 år siden'], correct: 0},
	
	{question: 'Hef og Lisa giftet seg for 19 år siden. Da var Hef tre ganger så gammel som Lisa, men i dag kun dobbelt så gammel. Hva er aldersforskjellen mellom dem?', answers:['57', '19', '28', '38', '40'], correct: 0},
	
	{question: '37!', answers:['13763753091226345046315979581580902400000001', '?', '38!!', '13763753091226345046315979581580902400000000', '43763753091226345046315979581580902400000300'], correct: 0},
	
	{question: 'Hva kalles summen av grunnflatearealet for alle etasjer i en bygning?', answers:['Bruttoareal', 'Grunnareal', 'Nettoareal', 'Bruksareal'], correct: 0},
	
	{question: 'Fra og med 2009 er minstekravet til isolasjonstykkelse i yttervegger i boliger endret. Hva er det nye kravet?', answers:['25 cm', '10 cm', '15 cm', '20 cm', '30 cm', '35 cm'], correct: 0},
	
	{question: 'Hva er grenseverdien av sin(x)/x når x går mot null?', answers:['1', 'Den divergerer, fordi vi deler på null', '0', 'Uendelig', 'sin(x)'], correct: 0},
	
	{question: 'Hvilken isotop av uran utgjør en høyere prosentvis andel i anriket uran enn i naturlig uran?', answers:['Uran-235', 'Uran-240', 'Uran-34', 'Uran-265', 'Uran-300'], correct: 0}
	
];




