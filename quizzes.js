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
	
	{question: 'Hva er uttrykket for effektiviteten til en Carnot-varmemaskin?', answers:['1-(T_c/T_h)', '1-(T_h/T_c)', '1/(T_c/T_h)', '(T_h/T_c)-1', '1/(T_h/T_c)'], correct: 0}
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
	
	{question: 'Hef og Lisa giftet seg for 19 år siden. Da var Hef tre ganger så gammel som Lisa, men i dag kun dobbelt så gammel. Hva er aldersforskjellen mellom dem?', answers:['38', '57', '19', '28','40'], correct: 0},
	
	{question: '37!', answers:['13763753091226345046315979581580902400000001', '?', '38!!', '13763753091226345046315979581580902400000000', '43763753091226345046315979581580902400000300'], correct: 0},
	
	{question: 'Hva kalles summen av grunnflatearealet for alle etasjer i en bygning?', answers:['Bruttoareal', 'Grunnareal', 'Nettoareal', 'Bruksareal'], correct: 0},
	
	{question: 'Fra og med 2009 er minstekravet til isolasjonstykkelse i yttervegger i boliger endret. Hva er det nye kravet?', answers:['25 cm', '10 cm', '15 cm', '20 cm', '30 cm', '35 cm'], correct: 0},
	
	{question: 'Hva er grenseverdien av sin(x)/x når x går mot null?', answers:['1', 'Den divergerer, fordi vi deler på null', '0', 'Uendelig', 'sin(x)'], correct: 0},
	
	{question: 'Hvilken isotop av uran utgjør en høyere prosentvis andel i anriket uran enn i naturlig uran?', answers:['Uran-235', 'Uran-240', 'Uran-34', 'Uran-265', 'Uran-300'], correct: 0}
	
];


//FSAE QUIZES
var FSAEone = [
	{question: 'When the impact attenuator assembly is bolted on to the frame, what is the minimum required grade and size of the bolts used?', answers:['M8 Grade 8.8', 'M8 Grade 9.8', 'M10 Grade 8.8', 'M10 Grade 9.8'], correct: 0},

	{question: 'Which statements is not correct regarding the shoulder harness?', answers:['The shoulder harness mounting points must be between 178mm and 228mm apart', 'There must be a single release common to the lap belt and shoulder harness using a metal-to-metal quick release type latch', 'The shoulder harness must be the over-the-shoulder type. Only separate shoulder straps are permitted (i.e. “y”-type shoulder straps are not allowed). The “H”-type configuration is allowed.', 'When the HANS device is used by the driver, FIA certified 51 mm (2 inch) wide shoulder harnesses are allowed. Should a driver, at any time not utilize the HANS device, then 76 mm (3 inch) wide shoulder harnesses are required.', 'The shoulder harness must be mounted behind the driver to structure that meets the requirements of T3.4.1. However, it cannot be mounted to the Main Roll Hoop Bracing or attendant structure without additional bracing to prevent loads being transferred into the Main Hoop Bracing.', 'The strength of any shoulder harness bar bracing tubes must be proved in the relevant tab of the team’s SES submission.'], correct: 0},

	{question: 'What is the amount of load attachment points between the monocoque and other primary structures  must be able to carry?', answers:['30 kN', '20 kN', '25 kN', '35 kN', '45kN', '40 kN', '50kN'], correct: 0},

	{question: 'The baseline steel property for the Ultimate Strength (Su) that is used for calculations of bending and buckling strength in an SES may not be lower than:', answers:['365 MPa (52.9 ksi)', '200 GPa (29,000 ksi)', '300 MPa (43.5 ksi)', '180 MPa (26ksi)', '305 MPa (44.2 ksi)'], correct: 0},

	{question: 'Which statement is not correct regarding the brake system?', answers:['“Brake-by-wire” acting on the rear wheels is allowed.', 'The car must be equipped with a braking system that acts on all four wheels and is operated by a single control.', 'A single brake acting on a limited-slip differential is acceptable.', 'EV ONLY: The first 90% of the brake pedal travel may be used to regenerate brake energy without actuating the hydraulic brake system. The remaining brake pedal travel must directly actuate the hydraulic brake system, but brake energy regeneration may remain active.', 'Unarmored plastic brake lines are prohibited', 'In side view no portion of the brake system that is mounted on the sprung part of the car can project below the lower surface of the frame or the monocoque, whichever is applicable.'], correct: 0},

	{question: 'When positive locking mechanisms are required, what type of loctite is allowed to perform such a function?', answers:['None', 'Loctite 221', 'Loctite 275', 'Locite 223', 'Loctite 128068', 'Loctite 2701'], correct: 0},

	{question: 'What is the maximum allowed height (above ground) for the rear wing?', answers:['1200mm', '900mm', '1000mm', '1100mm', '1300mm', '1400mm', '1500mm'], correct: 0},

	{question: 'What is not true about the Accumulator Isolation Relays?', answers:['The fuse protecting the accumulator tractive system circuit must have a rating higher than the maximum switch off current of the isolation relays.', 'In every accumulator container at least two isolation relays must be installed', 'The accumulator isolation relays must open both (!) poles of the accumulator. If these relays are open, no HV may be present outside of the accumulator container.', 'The isolation relays must be of a “normally open” type.', 'The accumulator isolation relays must not contain mercury'], correct: 0},

	{question: 'If the Tractive System (TS) voltage is 450VDC and both TS and GLV is present on the same circuit board, what is the required over surface spacing if opto-couplers rated for the respective maxium TS voltage (in this case 450VDC) is not used?', answers:['12.7mm', '14.5mm', '9.5mm', '7.62mm', '6.4mm', '5.56mm', '1.6mm'], correct: 0},

	{question: 'If the Tractive System (TS) voltage is 123.5VDC and the shutdown circuit is opened/interrupted, the TS must drop to under 60VDC in less than', answers:['5 seconds', '1 second', '2 seconds', '3 seconds', '4 seconds', '6 seconds', '7 seconds', '8 seconds', '9 seconds', '10 seconds'], correct: 0},

	{question: 'A part that may become electrically conductive and is within 100mm of any Tractive System or Grounded Low Voltage component must have a resistance to Grounded Low Voltage ground of:', answers:['5 Ohm', '100 mOhm', '300 mOhm', '1 Ohm', '10 Ohm'], correct: 0},

	{question: 'Teams have to make sure that water cannot aggregate anywhere in the chassis. Enclosed monocoque structures needs at least 1 (one) hole with a minimum diameter of', answers:['No diameter specified', '5mm', '6mm', '4mm', '3mm', '2mm'], correct: 0}
];


var FSAEtwo = [
	{question: 'What is not a allowed material for the brake pedal (regardless of production method)', answers:['CFRP', 'Steel', 'Aluminum', 'Titanium'], correct: 0},

	{question: 'Which of these certifications are not accepted certifications for helmets at the competition?', answers:['British Standards Institution BS 6658-85 Type A', 'Snell K2000, K2005, K2010, M2000, M2005, M2010, SA2000, SA2005, SA2010', 'SFI 31.2A, SFI 31.1/2005', 'FIA 8860-2004, FIA 8860-2010'], correct: 0},

	{question: 'Each team must have at least two 0.9kg fire extinguishers. What is not correct?', answers:['If accompanied by a track marshall, the second fire extinguisher does not need follow the vehicle', 'All extinguishers must be equipped with a manufacturer installed pressure/charge gauge', 'As a team option, commercially available on-board fire systems are encouraged as an alternative to the extinguisher that accompanies the vehicle', 'Except for the initial inspection, one extinguisher must readily be available in the team’s paddock area', 'The following are the minimum ratings, any of which are acceptable at any Formula SAE Series event: *USA, Canada & Brazil: 10BC or 1A 10BC*, *Europe: 34B or 5A 34B*, *Australia: 20BE or 1A 10BE*. Extinguishers of larger capacity (higher numerical ratings) are acceptable.', 'Hand held fire extinguishers are not permitted to be mounted on or in the car.'], correct: 0},

	{question: 'Which of the following modifications is not specifically permitted without voiding Inspection Approval once the vehicle is approved to compete in the dynamic events?', answers:['Replacement of worn chains or sprockets', 'Adjustment of brake bias', 'Adjustment of mirrors', 'Replenishment of fluids', 'Substitution of the head restraint or seat insert for different drivers', 'Replacement of worn tires or brake pads'], correct: 0},

	{question: 'The total energy absorbed by the impact attenuator must meet or exceed', answers:['7350 Joules', '7150 Joules', '7250 Joules', '7450 Joules'], correct: 0},

	{question: 'What is the the allowable weight tolerance if the car weight changes during Dynamic Competition?', answers:['± 5.0kg', '± 4.0kg', '± 4.5kg', '± 4.7kg', '± 5.2kg', '± 5.5kg', '± 6.0kg'], correct: 0},

	{question: 'Which of the following statements about the firewall is not correct?', answers:['The firewall must not contain any parts made of metal.', 'The firewall must be fire resistant according to UL94-V0, FAR25 or equivalent.', 'The thickness of second layer must be sufficient to prevent penetrating this layer with a 4 mm wide screwdriver and 250N of force.', 'The firewall must be grounded, if material is used that is or may become conductive.'], correct: 0},

	{question: 'Which statement about the Tractive System Measurement points is not correct?', answers:['When max tractive system voltage is above 400VDC, the resistor value must be 10kR', 'The TSMPs must be protected by a non-conductive housing that can be opened without tools.', 'The TSMP must be protected from being touched with bare hands / fingers, once the housing is opened.', 'Each TSMP must be secured with a current limiting resistor', 'A 4mm shrouded banana jack must be used for the GLV ground measuring point; see the picture below for an example.'], correct: 0},

	{question: 'What is not true when it comes to the master switches?', answers:["The GLVMS must be located on either side of the vehicle, in proximity to the Main Hoop, at the driver's shoulder height and be easily actuated from outside the car.", 'Each vehicle must have two Master Switches, the Grounded Low Voltage Master Switch (GLVMS) and the Tractive System Master Switch (TSMS)', 'The TSMS must be fitted with a "lockout/tagout" capability to prevent accidental activation of the tractive system. The electrical system officer must ensure that the TSMS is locked in the off position whenever work is done on the vehicle.', 'The GLVMS must completely disable power to the GLV System and must be direct acting, i.e. it cannot act through a relay or logic.', 'Both master switches must be of the rotary type, with a red, removable key.', 'The function of both switches must be clearly marked with “LV” and “HV”. A sticker with a red or black lightning bolt on a yellow background or red lightning bolt on a white background must additionally mark the Tractive System Master Switch.'], correct: 0},

	{question: 'What is the response value of the test resistor defined for the Insulation Monitoring Device Test, in relation to the maximum tractive voltage?', answers:['500 Ohm/V', '250 Ohm/A', '1000 Ohm/V', '600 V/Ohm'], correct: 0}
];

var FSAEthree = [
	{question: 'IC and EV scoring at FSA: which is true?', answers:['All events are scored completely separate', 'All events are run separately but scored together', 'At FSA, all vehicles are run and scored together', 'Only the dynamic events are scored separately'], correct: 0},

	{question: 'What has to be brought to Technical inspection ?', answers:['Fire extinguishers', 'All of these', 'Vehicle stands', 'Smooth tread ("slick") tires'], correct: 0},

	{question: 'When submitting the cost report, where do drawings and other supporting material go?', answers:['In a seperate file', 'Supporting material should not be submitted, just presented at the visual inspection', 'The supporting material is included in the standard cost tables', 'In the EBOM file next to the table describing the part'], correct: 0},

	{question: 'What is the minimum weight of a rules compliant main hoop tube of 1m length (density of steel 7,85 g/cm^3)?', answers:['1361g', '1387g', '1443g', '1208g'], correct: 0},

	{question: 'What is the minimum radius a main hoop tube can be bent (measured at tube centerline) if the outside diameter is 26mm ?', answers:['78mm', '26mm', 'not regulated', '52mm'], correct: 0},

	{question: "The 'weight transfer' (in N) during cornering is dependent on:", answers:['Lateral acceleration, track width, CoG height, vehicle mass', 'Lateral acceleration, track width', 'Lateral acceleration, wheel base, CoG height', 'Lateral acceleration, track width, CoG height', 'Lateral acceleration, wheel base, CoG height, vehicle mass'], correct: 0},

	{question: 'Your Brake pads are already worn out after the AutoX and you change to pads with a harder compound.', answers:['This is illegal', 'You have to redo the brake test (re-scrutineer)', 'You have to have the brake caliper fasteners checked by a scrutineer after changing.', 'This is allowed'], correct: 0},

	{question: "Imagine the following scenario:  During the Endurance-race, your driver spins off track and unfortunately decides to re-enter the track immediately without paying attention to the track marshals and other cars on track. An oncoming vehicle t-bones your car right in the middle of the upper member of the side impact (we assume you have a steel spaceframe car).\
	The member is 1000mm long, the Steel (E=210GPa) tubing used shall be 30x1,5mm round and the impact is represented by a force of 5kN. In the calculation, consider the tube to be supported on a pivots at each side (i.e. not clamped in!). How far will this tube deflect in the direction of your drivers' hip in this case? Hint: This is a beam on two supports problem.", answers:['36,276mm', '15,324mm', '22,485mm', '18,138mm'], correct: 0},

	{question: 'Which of the following materials is acceptable as scatter shield for a chain with a maximum width of 38mm ?', answers:['120mm wide, 3mm thick, steel', '100mm wide, 5mm thick, steel', '120mm wide, 4mm thick, aluminum', '120mm wide, 2mm thick, steel'], correct: 0},

	{question: 'Which of the following statements about the accumulator container is incorrect?', answers:['A sticker with an area of at least 700mm² and a red or black lightning bolt on yellow background or red lightning bolt on white background must be applied on every accumulator container', 'Each accumulator container must have a prominent indicator, such as an LED that will illuminate whenever a voltage greater than 60V DC is present at the vehicle side of the AIRs.', 'Every wire used in an accumulator container, no matter whether it is part of the GLV or tractive system, must be rated to the maximum tractive system voltage.', 'Every accumulator container must contain at least one fuse and at least two accumulator isolation relays.', 'The Accumulator containers and mounting systems are subject to approval of the Chief Technical Inspector or their representative'], correct: 0},

	{question: 'What is correct about the grounding of the car?', answers:['All electrically conductive parts of the vehicle  which are within 100mm of any tractive system or GLV component must have a resistance below 300 mOhms', 'All electrically conductive parts of the vehicle  which are within 100mm of any tractive system or GLV component must have a resistance below 500 mOhms', 'All parts of the vehicle which may become electrically conductive, must have a resistance below 5 Ohm to GLV system ground.', 'All parts of the vehicle which may become electrically conductive, must have a resistance below 3 Ohm to GLV system ground.'], correct: 0},

	{question: 'Concerning the driver egress, what is incorrect?', answers:['Hands in forward-facing driving position on the connected steering wheel and wearing the required driver equipment.', 'All drivers must be able to exit to the side of the vehicle in no more than 5 seconds.', 'Egress time begins with the driver in the fully seated position', 'Egress time will stop when the driver has both feet on the pavement.'], correct: 0},

	{question: 'During the cost-event you get 38.3 points on your real case, and 37.6 on your visual inspection. Your car has a cost price of 32436.73$. This means you are the 7th most expensive car at the competition. The most expensive car costs 33623.96$ to produce, and the lowest costs only 22963.52$. Your team submitted the cost document 20.06.15, 13:00. How many points does your team score in total.', answers:['57,25', '77,25', '67,75', '62,75', '72,25', '55,75'], correct: 0},

	{question: 'Which of the following forms does not have to be submitted?', answers:['BLC', 'FMEA', 'ESF', 'IAD', 'SES'], correct: 0}
];


var FSAEfive = [

	{question: 'A main hoop tube has a outside diameter of 50 mm. What is the smallest allowed bending radius?', answers:['150 mm', '50 mm', '150 mm', '200 mm'], correct: 0},

	{question: 'What is the maximum deformation of the anti-intrusion plate during testing of the impact attenuator?', answers:['25.4 mm', '24.5 mm', '26.5 mm', '27.3 mm'], correct: 0},

	{question: 'Which statement is not correct?', answers:['The side impact structure for tube frame cars must be comprised of at least four tubular members located on each side of the driver while seated in the normal driving position.', 'The diagonal side impact structural member must connect the upper and lower side impact structural members forward of the main hoop and rearward of the front hoop.', 'The entire member must be between 300 and 350 mm above the ground if a 77 kg driver is in the default driving position.', 'The upper side impact structural member must connect the main hoop and the front hoop.'], correct: 0},

	{question: 'In the default driving position, a driver cannot come into contact with any material which has a temperature (in celsius) above :', answers:['sixty', 'thirty-five', 'fourty-five', 'eighty'], correct: 0},

	{question: 'A head restraint with an adjustment range of 20 cm is 15 cm wide. What height of the head restraint is not legal?', answers:['15 cm', '28 cm', '22.5 cm', '17.5 cm'], correct: 0},

	{question: 'What does a yellow waving flag signalize? ', answers:['Great Danger, SLOW DOWN, evasive action is most likely required, BE PREPARED TO STOP, something has happened beyond the flag station, NO PASSING unless directed by the corner workers.', 'Danger, SLOW DOWN, be prepared to take evasive action, something has happened beyond the flag station. NO PASSING unless directed by the corner workers.', '- There is a slow moving vehicle on the course that is much slower than you are. Be prepared to approach it at a cautious rate.', 'Something is on the racing surface that should not be there. Be prepared for evasive maneuvers to avoid the situation.', '- Pull into the penalty box for a mechanical inspection of your car, something has been observed that needs closer inspection.', 'Pull into the penalty box for discussion with the Chief Marshall/Director of Operations or other official concerning an incident. A time penalty may be assessed for such incident.', 'Your session has been completed. Exit the course at the first opportunity'], correct: 0},

	{question: 'What is correct about the GLV and TS?', answers:['The GLV system must not exceed 60VDC', 'None is correct', 'The GLV system must be powered up using a specified procedure if the tractive system is active', 'All components in the tractive system must have a minimal rating equal to or greater than the nominal tractive system voltage.', 'A failure causing the GLV system to shut down must trigger an deactivation of the tractive system in no more than 2 seconds.', 'High-voltage is definied as any voltage greater than 40VDC', 'The entire GLV and tractive system must be completely galvanically seperated from the chassis.'], correct: 0},

	{question: 'The motor casing must have a thickness of at least.', answers:['3.0mm aluminum alloy 6061-T6', '3.0mm steel', '3.0mm steel', '2.7mm steel', '2.7mm aluminum alloy 6061-T6', '2.7mm aluminum alloy 6061-T6', '2.5mm steel', '2.5mm aluminum alloy 6061-T6'], correct: 0},

	{question: 'What is defined as a violation of the 80kW maximum power rule?', answers:['A violation is defined as using more than 80kW or exceeding the specified voltage for more than 100ms continuously or using more than 80kW or exceeding the specified voltage, after a moving average over 500ms is applied.', 'A violation is defined as using more than 80kW or exceeding the specified voltage for more than 100ms continuously', 'A violation is defined as using more than 80kW or exceeding the specified voltage for more than 250ms continuously or using more than 80kW or exceeding the specified voltage, after a moving average over 1000ms is applied.', 'A violation is defined as using more than 80kW or exceeding the specified voltage for more than 100ms continuously or using more than 80kW or exceeding the specified voltage, after a moving average over 250ms is applied.', 'A violation is defined as using more than 80kW or exceeding the specified voltage, after a moving average over 500ms is applied.'], correct: 0},

	{question: 'A team is using a distributed BMS system. Which of the following statements is not correct?', answers:['All voltage sense wires to the AMS must be protected by fusible link  wires or fuses.', 'Any GLV connection to the AMS must be galvanically isolated from the tractive system', 'The AMS must continuously measure the temperatures of critical points of the accumulator to keep the cells below the allowed maximum cell temperature  limit stated in the cell data sheet or below 60 degrees celsius, whichever is lower.', 'The AMS must continuously measure the cell voltage of every cell. If single cells are connected directly in parallel, only one measurement is needed.'], correct: 0},

	{question: 'Which of the following statements about the High-Voltage Disconnect (HVD) are wrong?', answers:['Removing the HVD must disconnect both poles of the tractive system accumulator', 'No tools must be needed to open the HVD', 'The HVD must be clearly marked with HVD', 'Remote actuation of the HVD through a long handle, rope or wire is not acceptable.', 'The HVD must be 350mm above the ground  and easily visible when standing behind the vehicle.', 'It must be possible to disconnect the HVD without removing any bodywork'], correct: 0},

	{question: 'What is the width of the skidpad track and the radius of the inner circle?', answers:['3,0m / 7,625m', '3,5m / 7,625m', '2,5m / 7,625m', '3,5m / 15,25m', '3,0m / 15,25m', '2,5m / 15,25m'], correct: 0},
	
	{question: 'What is the acceleration scoring formula?', answers:['', '', '', '', '', '', '', ''], correct: 0},
	{question: '', answers:['', '', '', '', '', '', '', ''], correct: 0},
	{question: '', answers:['', '', '', '', '', '', '', ''], correct: 0},
	{question: '', answers:['', '', '', '', '', '', '', ''], correct: 0},
	{question: '', answers:['', '', '', '', '', '', '', ''], correct: 0},

];

