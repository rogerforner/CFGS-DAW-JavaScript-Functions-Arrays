/*******************************************************************************
************************************************************************ "ÍNDEX"
* # Funcions
* ## esPrimer()
* # App
* # Iniciar
* # Comprovar
*******************************************************************************/

// Activar l'ítem del Navbar.
$("li#memoria").addClass("active");

/*
# Funcions
----------------------------------------------------------------------------- */
/*
## esPrimer()
Els números primers són aquell que només poden ser divisibles entre ells
mateixos i pel número 1.
----------------------------------------------------------------------------- */
function esPimer(numero) {
  // Passem un número a analitzar per paràmetre.
  // Aquest número el passem per un bucle, iterant-lo des de 2 fins el valor del
  // número -1 i, en cada iteració, verifiquem si algun dels números obtinguts és
  // divisible amb el número passat. Si això succeeix retornem "false".
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  // En el cas de que la iteració anterior finalitzi sense retornar "false",
  // hem de retornar "true", ara bé, sempre i quan aquest número final no sigui
  // igual a 1, doncs 1 no és un nombre primer. En el cas de que sigui 1
  // retornarem "false", en el cas de que sigui diferent de 1 retornarem "true".
  return numero !== 1;
}

/*
# App
----------------------------------------------------------------------------- */
var numDesde = 2;
var numFins  = 30;
var numsPrimers = [];

// Iterem per trobar els números primers entre 2 i 30.
// 0 i 1 no són números primers.
for (; numDesde < numFins; numDesde++) {
  // Si el resultat de la funció determina que és primer, guardem aquest en un
  // array. L'índex va de 0 a n.
  if (esPimer(numDesde)) {
    numsPrimers.push(numDesde);
  }
}

// TRUCO (mostrats per consola).
console.log("Truco: "+numsPrimers);

// Mostrar els números primers en la pàgina web.
var spanNumsPrimers = document.getElementById("nums-primers");
spanNumsPrimers.textContent = numsPrimers;
var textSpanNumsPrimers = spanNumsPrimers.textContent;

/*
# Iniciar
----------------------------------------------------------------------------- */
function iniciar() {
  // Bootstrap 4 té una classe per ocultar elements "d-none".
  // Ocultem el botó iniciar i els números.
  var ocultarBtn = document.getElementById("iniciar-btn");
  var ocultarNum = document.getElementById("nums-primers");
  ocultarBtn.classList.add("d-none");
  ocultarNum.classList.add("d-none");

  // Mostrem el formulari per escriure els números.
  var mostrarForm = document.getElementById("recordar");
  mostrarForm.classList.remove("d-none");
}

/*
# Comprovar
----------------------------------------------------------------------------- */
function comprovar() {
  // Capturar el valor afegit en el camp de text.
  var formData = document.getElementById("numsPrimers").value;

  // Eliminar espais en blanc.
  // Emprem Regex per tal de que es dugui a terme a tots els espais en blancs ja
  // que sinó només s'aplica al primer.
  var primers = formData.replace(/\s/g, "");


  if (primers == numsPrimers) {
    // Mostrem per pantalla la solució.
    var solRelacio = document.getElementById('solucio');
    solRelacio.innerHTML  = "<span class='text-primary'><strong>Correcte!</strong></span>";
    var solCorrecta = solRelacio.innerHTML ;

    // Desactivem el botó
    $("button#memoria").prop("disabled", true);

    // Quan s'hagi trobat la solució reiniciarem el joc.
    // No ho farem quan no sigui correcta, així deixem peixet per traobar-la.
    setTimeout(
      function() {
        // Reiniciar joc.
        window.location.reload();
      }, 3000
    );

  } else {
    // Mostrem per pantalla la solució.
    var solRelacioInc = document.getElementById('solucio');
    solRelacioInc.innerHTML  = "<span class='text-danger'><strong>Incorrecte!</strong></span>";
    var solIncorrecta = solRelacioInc.innerHTML ;
  }


}
