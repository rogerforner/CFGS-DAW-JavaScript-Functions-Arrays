/*******************************************************************************
************************************************************************ "ÍNDEX"
* # Resultat de la ronda
* # Tirar daus
* # Jugador
* # Iniciar el joc
*******************************************************************************/

// Activar l'ítem del Navbar.
$("li#daus").addClass("active");
$("li#daus #hm").addClass("active");


/*
# Resultat de la ronda
Si el resultat és 7 o 11 es guanya i finalitza el joc.
Si el resultat és 2 o 3 o 12 es perd i finalitza el joc.
----------------------------------------------------------------------------- */
function rondaResultat(sumaDaus) {
  var resultat;

  if (sumaDaus == 7 || sumaDaus == 11) {
    resultat = "v"; // Victòria.

  } else if (sumaDaus == 2 || sumaDaus == 3 || sumaDaus == 12) {
    resultat = "p"; // Pèrdua.
  }

  return resultat;
}


/*
# Tirar daus
----------------------------------------------------------------------------- */
function tirarDaus() {
  // Creem dos arrays amb números; Cada variable es correspon a un dau.
  var dau1 = [1, 2, 3, 4, 5, 6];
  var dau2 = [1, 2, 3, 4, 5, 6];

  // Extraiem un número a l'atzar (random); Resultat dels daus.
  dau1 = dau1[Math.floor(Math.random() * dau1.length)];
  dau2 = dau2[Math.floor(Math.random() * dau2.length)];

  // Sumem el resultat dels daus.
  var sumaDaus = dau1 + dau2;

  return sumaDaus;
}

/*
# Jugador
----------------------------------------------------------------------------- */
function jugador() {
  var sumaDaus = tirarDaus();
  var resultat = rondaResultat(sumaDaus);

  return resultat;
}

/*
# Iniciar el joc
----------------------------------------------------------------------------- */
// Escriure el número de partida a la pàgina.
var spanNumPartida = document.getElementById("num-partida");
spanNumPartida.textContent = "-";
var textSpanNumPartida = spanNumPartida.textContent;
// Escriure el número de ronda a la pàgina.
var spanNumRonda = document.getElementById("num-ronda");
spanNumRonda.textContent = "-";
var textSpanNumRonda = spanNumRonda.textContent;
// Escriure el resultat de tirar els daus.
var spanResultatTirada = document.getElementById("resultat");
spanResultatTirada.textContent = "-";
var textSpanResultatTirada = spanResultatTirada.textContent;
// Escriure el tirador dels daus.
var spanTirador = document.getElementById("tirador");
spanTirador.textContent = "Humà";
var textSpanTirador = spanTirador.textContent;

var numRonda = 0;
function iniciJoc() {
  var jugar;
  var partida = 1;
  var contarTirades = 1;

  // Incrementar Ronda en cada clic.
  numRonda++;

  // Num Partida
  spanNumPartida.textContent = partida;
  textSpanNumPartida = spanNumPartida.textContent;

  // Ronda
  spanNumRonda.textContent = numRonda;
  textSpanNumRonda = spanNumRonda.textContent;

  // Tirades
  while (contarTirades <= 2) {
    // Humà
    if (contarTirades == 1) {
      spanTirador.textContent = "Humà";
      textSpanTirador = spanTirador.textContent;

      jugar = jugador();

      // Si el jugador guanya (v) finalitza el joc.
      // Si el jugador perd (p) finalitza el joc.
      if (jugar == "v") {
        jugar = "Victòria de l'humà";

        spanResultatTirada.textContent = jugar;
        textSpanResultatTirada = spanResultatTirada.textContent;
        break;

      } else if (jugar == "p") {
        jugar = "Derrota de l'humà";

        spanResultatTirada.textContent = jugar;
        textSpanResultatTirada = spanResultatTirada.textContent;
        break;
      }
    }

    // Màquina
    if (contarTirades == 2) {
      spanTirador.textContent = "Màquina";
      textSpanTirador = spanTirador.textContent;

      jugar = jugador();

      // Si el jugador guanya (v) finalitza el joc.
      // Si el jugador perd (p) finalitza el joc.
      if (jugar == "v") {
        jugar = "Victòria de la màquina";

        spanResultatTirada.textContent = jugar;
        textSpanResultatTirada = spanResultatTirada.textContent;
        break;

      } else if (jugar == "p") {
        jugar = "Derrota de la màquina";

        spanResultatTirada.textContent = jugar;
        textSpanResultatTirada = spanResultatTirada.textContent;
        break;
      }
    }

    contarTirades++;
  }//tirades

  // Si la variable jugar té un valor corresponent a una victòria o derrota,
  // el joc finalitza. Així doncs, reiniciem aquest.
  // També desactivem el botó per evitar que sigui pijat per passar de ronda.
  if (jugar) {
    // Afegim un atribut al botó per tal de desactivar-lo.
    // Emprem JQuery perquè és més fàcil i ràpid.
    $("button.btn").prop("disabled", true);

    // Passats 3 segons reiniciem el joc.
    setTimeout(
      function() {
        // alert("Fi del joc.");
        // Reiniciar joc.
        window.location.reload();
      }, 3000
    );
  }
}
