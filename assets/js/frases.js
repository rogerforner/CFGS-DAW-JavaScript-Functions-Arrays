/*******************************************************************************
************************************************************************ "ÍNDEX"
* # App
*******************************************************************************/

// Activar l'ítem del Navbar.
$("li#frases").addClass("active");

/*
# App
----------------------------------------------------------------------------- */
// Creem 2 Arrays per guardar autors i frases.
// Cada índex associa autor-frase.
var autors = [
  "Miquel Martí i Pol",
  "Ferran Salmurri",
  "Pulitzer",
  "Proverbi japonès",
  "Anònim",
  "León Lederman",
  "Ferran Salmurri",
  "Sèneca",
  "Aristòtil",
  "Proverbi xinès"
];
var frases = [
  "Tot està per fer i tot és possible.",
  "La funció del pare és ensenyar els fills a ser més feliços.",
  "Compte amb les situacions inesperades. En elles s’amaguen la nostra gran oportunitat!",
  "El que parla sembra, el que escolta recull.",
  "Quan una cosa dolenta et succeeixi tens dues opcions: Deixar que et destrueixi o deixar que et faci més fort.",
  "Tota acció provoca reaccions.",
  "El valor que tenim radica en el que pensem de nosaltres mateixos i no en el que creiem que els altres pensen de nosaltres.",
  "Tria per mestre a aquell a qui admiris més pel que en ell veiessis que pel que escoltessis dels seus llavis.",
  "El nostre caràcter és el resultat de la nostra conducta.",
  "Si un persegueix dos conills, tots dos se li escapen."
];

// Mostrar autors per pantalla.
for (var i = 0; i < autors.length; i++) {
  var lavelAutor = document.getElementById('a'+(i+1));
  lavelAutor.textContent = autors[i];
  var nomAutor = lavelAutor.textContent;
}

// Mostrar frases per pantalla.
for (var i = 0; i < frases.length; i++) {
  var lavelFrase = document.getElementById('f'+(i+1));
  lavelFrase.textContent = frases[i];
  var fraseAutor = lavelFrase.textContent;
}


// Ens interessa executar el següent codi quan es faci clic al botó del formulari.
function comprovar() {
  /* AUTORS
  **********/
  // Seleccionem els radios d'autors.
  var radiosAutors = document.getElementsByName('autorsRadio');

  // Recorrem els radios i capturem l'autor (value) seleccionat.
  var autorSeleccionat;
  for (var i = 0; i < radiosAutors.length; i++) {
    if (radiosAutors[i].checked) {
      autorSeleccionat = radiosAutors[i].value;

      // Només ens interessa el radio seleccionat, cap més.
      break;
    }
  }

  /* FRASES
  **********/
  // Seleccionem els radios d'autors.
  var radiosFrases = document.getElementsByName('frasesRadio');

  // Recorrem els radios i capturem l'autor (value) seleccionat.
  // IMPORTANT: i està definida en l'anterior for, li tornem a donar valor 0.
  var fraseSeleccionada;
  for (i = 0; i < radiosFrases.length; i++) {
    if (radiosFrases[i].checked) {
      fraseSeleccionada = radiosFrases[i].value;

      // Només ens interessa el radio seleccionat, cap més.
      break;
    }
  }

  /* RESOLUCIÓ
  *************/
  // Fins aquí tenim el valor de l'autor deleccionat i, també, el de la frase.
  // En el nostre cas no hem desordenat ni els autors ni les frases, de vegades
  // el millor engany és el precidit per l'acció més simple.
  // Per tant, tots els values de tots dos radios coincidiràn.
  if (autorSeleccionat == fraseSeleccionada) {
    // Mostrem per pantalla la solució.
    var solRelacio = document.getElementById('solucio');
    solRelacio.innerHTML  = "<span class='text-primary'><strong>Correcte!</strong></span> "+autors[autorSeleccionat-1]+
      " és l'autor de <strong><em>"+frases[fraseSeleccionada-1]+"</em></strong>"; // Restem 1 perquè l'índex inicia a 0.
    var solCorrecta = solRelacio.innerHTML ;

  } else {
    // Mostrem per pantalla la solució.
    var solRelacioInc = document.getElementById('solucio');
    solRelacioInc.innerHTML  = "<span class='text-danger'><strong>Incorrecte!</strong></span> "+autors[autorSeleccionat-1]+
      " és l'autor de &laquo;<em>"+frases[autorSeleccionat-1]+"</em>&raquo;"; // Restem 1 perquè l'índex inicia a 0.
    var solIncorrecta = solRelacioInc.innerHTML ;
  }
}
