const questions = [
 {
     'id': 1,
     'question' : '¿Cuál es el nombre del río más largo del mundo?',
     'answers' : [
         {'res' : 'Río Nilo'},
         {'res' : 'Río Amazonas'},
         {'res' : 'Río Danubio'},
         {'res' : 'Río Misisipi'}
     ],
     'correct' : 'Río Amazonas',
     'messageCorrect': 'El río Amazonas es el más caudaloso del mundo: contiene mucha más agua que el Nilo, el Yangtsé y el Misisipi juntos.',
     'messageIncorrect': 'El río Amazonas es el más caudaloso del mundo: contiene mucha más agua que el Nilo, el Yangtsé y el Misisipi juntos.'
 },
 {
    'id': 2,
    'question' : '¿Cuanto es 2+2?',
    'answers' : [
        {'res' : '1'},
        {'res' : '2'},
        {'res' : '3'},
        {'res' : '4'}
    ],
    'correct' : '4',
    'messageCorrect': 'Bueno al menos sabes sumar.',
    'messageIncorrect': 'Tienes mas de 7 años cierto?'
},
{
    'id': 3,
    'question' : '¿Cuál es el océano más grande del mundo?',
    'answers' : [
        {'res' : 'Océano Pacífico'},
        {'res' : 'Océano Índico'},
        {'res' : 'Océano Atlántico'},
        {'res' : 'Océano Antártico'}
    ],
    'correct' : 'Océano Pacífico',
    'messageCorrect': 'El océano Pacífico es la parte del océano mundial de mayor extensión de la Tierra. Ocupa la tercera parte de su superficie y se extiende aproximadamente 15 000 kilómetros desde el mar de Bering limitando con el Ártico por el norte, hasta los márgenes congelados del mar de Ross y limitando por el sur con la Antártida.',
    'messageIncorrect': 'El océano Pacífico es la parte del océano mundial de mayor extensión de la Tierra. Ocupa la tercera parte de su superficie y se extiende aproximadamente 15 000 kilómetros desde el mar de Bering limitando con el Ártico por el norte, hasta los márgenes congelados del mar de Ross y limitando por el sur con la Antártida.'
},
{
    'id': 4,
    'question' : '¿Quién era el dios romano de la guerra?',
    'answers' : [
        {'res' : 'Ares'},
        {'res' : 'Júpiter'},
        {'res' : 'Marte'},
        {'res' : 'Belerofonte'}
    ],
    'correct' : 'Marte',
    'messageCorrect': 'En la mitología romana, Marte, en latín Mārs, tenía muchos atributos, era el dios de la guerra, la virilidad masculina, la violencia, la pasión, la sexualidad, el derramamiento de sangre, la valentía, patrón de los guerreros romanos, del horror y victoria en las guerras, la perfección y la belleza.',
    'messageIncorrect': 'En la mitología romana, Marte, en latín Mārs, tenía muchos atributos, era el dios de la guerra, la virilidad masculina, la violencia, la pasión, la sexualidad, el derramamiento de sangre, la valentía, patrón de los guerreros romanos, del horror y victoria en las guerras, la perfección y la belleza.'
},
{
    'id': 5,
    'question' : '¿Cuántos tentáculos tiene un calamar? ',
    'answers' : [
        {'res' : '4'},
        {'res' : '8'},
        {'res' : '10'},
        {'res' : '20'}
    ],
    'correct' : '8',
    'messageCorrect': 'El calamar es un animal carnívoro en su totalidad, alimentándose de peces y otras especies de invertebrados. Para esto, utiliza sus poderosos tentáculos y su mandíbula que contiene un afilado pico que le facilita matar y despedazar en pequeños trozos a sus presas.',
    'messageIncorrect': 'El calamar tiene 8 tentáculos.'
},
{
    'id': 6,
    'question' : 'Aproximadamente, ¿qué porcentaje de la superficie de la Tierra es agua?',
    'answers' : [
        {'res' : '10%'},
        {'res' : '50%'},
        {'res' : '70%'},
        {'res' : '90%'}
    ],
    'correct' : '70%',
    'messageCorrect': 'Alrededor del 70% de la superficie de la tierra está cubierta de agua. De ella, aproximadamente el 96% está contenida en los océanos del mundo.',
    'messageIncorrect': 'Alrededor del 70% de la superficie de la tierra está cubierta de agua. De ella, aproximadamente el 96% está contenida en los océanos del mundo.'
},
{
    'id': 7,
    'question' : '¿Qué significa “palimpsesto”?',
    'answers' : [
        {'res' : 'Un personaje que carece de seriedad.'},
        {'res' : 'Razonamiento por el que la verdad de una proposición se prueba demostrando la imposibilidad o absurdo de la proposición contraria.'},
        {'res' : 'Algo que sirve como ayuda auxiliar.'},
        {'res' : 'Manuscrito cuya escritura ha sido eliminada con objeto de escribir otro texto encima.'}
    ],
    'correct' : 'Manuscrito cuya escritura ha sido eliminada con objeto de escribir otro texto encima.',
    'messageCorrect': 'Manuscrito cuya escritura ha sido borrada intencionadamente con objeto de escribir otro texto sobre su superficie. La Biblia griega es un ejemplo de palimpsesto. ',
    'messageIncorrect': 'Manuscrito cuya escritura ha sido borrada intencionadamente con objeto de escribir otro texto sobre su superficie. La Biblia griega es un ejemplo de palimpsesto. '
},
{
    'id': 8,
    'question' : '¿En qué año murió Bob Marley?',
    'answers' : [
        {'res' : '1981'},
        {'res' : '1986'},
        {'res' : '1991'},
        {'res' : '2003'}
    ],
    'correct' : '1981',
    'messageCorrect': 'Murio un 11 de mayo de 1981, a la edad de 36 años.La expansión del cáncer que comenzara como un melanoma en su piel y la metástasis producida en sus pulmones y cerebro fueron la causa de su temprana muerte.',
    'messageIncorrect': 'Murio un 11 de mayo de 1981, a la edad de 36 años.La expansión del cáncer que comenzara como un melanoma en su piel y la metástasis producida en sus pulmones y cerebro fueron la causa de su temprana muerte.'
},
{
    'id': 9,
    'question' : 'Deberíamos tomar antibióticos...',
    'answers' : [
        {'res' : 'Para combatir los virus'},
        {'res' : 'Contra las infecciones bacterianas'},
        {'res' : 'Siempre que nos sintamos enfermos'},
        {'res' : '¡Nunca!'}
    ],
    'correct' : 'Contra las infecciones bacterianas',
    'messageCorrect': 'Los antibióticos se utilizan para tratar las infecciones causadas por bacterias, unos microorganismos unicelulares que pueden provocar enfermedades en los seres vivos.',
    'messageIncorrect': 'Los antibióticos se utilizan para tratar las infecciones causadas por bacterias, unos microorganismos unicelulares que pueden provocar enfermedades en los seres vivos.'
},
{
    'id': 10,
    'question' : '¿Cuál es el nombre de la herramienta necesaria para jugar al billar?',
    'answers' : [
        {'res' : 'Palo'},
        {'res' : 'Snooker'},
        {'res' : 'Bubingo'},
        {'res' : 'Taco'}
    ],
    'correct' : 'Taco',
    'messageCorrect': 'El palo de billar o taco es el instrumento con el cual los jugadores de billar golpean las bolas para tratar de hacer carambolas o entronerar las bolas, dependiendo del juego.',
    'messageIncorrect': 'El palo de billar o taco es el instrumento con el cual los jugadores de billar golpean las bolas para tratar de hacer carambolas o entronerar las bolas, dependiendo del juego.'
},

];

export default (n = 5) => 
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n)); 