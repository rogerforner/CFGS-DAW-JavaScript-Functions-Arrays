/*******************************************************************************
************************************************************************ "ÍNDEX"
* # Persona
* # Màquina
* # Resultat
*******************************************************************************/

// Activar l'ítem del Navbar.
$("li#ppt").addClass("active");

function iniciar(num) {
  /*
  # Persona
  --------------------------------------------------------------------------- */
  //Array imatges persona.
  var imatge = [];
  imatge[0] = "<img src='piedra.png' class='img-fluid' />";
  imatge[1] = "<img src='papel.png' class='img-fluid' />";
  imatge[2] = "<img src='tijera.png' class='img-fluid' />";

  // Imprimir imatge persona.
  // Passem el que la persona escull:
  // - Pedra = 0
  // - Paper = 1
  // - Tisora = 2
  var divPersona = document.getElementById("img-persona");
  divPersona.innerHTML = imatge[num];
  var textDivPersona = divPersona.innerHTML;

  /*
  # Màquina
  --------------------------------------------------------------------------- */
  //Array imatges màquina.
  var imatge2 = [];
  imatge2[0] = "<img src='piedra.png' class='img-fluid' />";
  imatge2[1] = "<img src='papel.png' class='img-fluid' />";
  imatge2[2] = "<img src='tijera.png' class='img-fluid' />";


  // Escollir imatge de la màquina.
  var aleatori2 = Math.floor(Math.random()*imatge2.length);

  // Imprimir imatge màquina.
  var divMaquina = document.getElementById("img-maquina");
  divMaquina.innerHTML = imatge2[aleatori2];
  var textDivMaquina = divMaquina.innerHTML;

  /*
  # Resultat
  --------------------------------------------------------------------------- */
  var resultat = document.getElementById('solucio');

  // Si num i aleatori2 coincideixen voldrà dir que han sortit les mateixes
  // imatges, per tant, hi ha un empat. En cas contrari...
  if (num == aleatori2) {
    resultat.innerHTML = "<span class='text-warning'><strong>Empat!</strong></span>";

  } else {
    if (num == 0 && aleatori2 == 2) { // pPedra - mTisora
      resultat.innerHTML = "<span class='text-primary'><strong>Has guanyat!</strong></span>";

    } else if (num == 0 && aleatori2 == 1) { // pPedra - mPaper
      resultat.innerHTML = "<span class='text-danger'><strong>La màquina ha guanyat!</strong></span>";

    } else if (num == 1 && aleatori2 == 0) { // pPaper - mPedra
      resultat.innerHTML = "<span class='text-primary'><strong>Has guanyat!</strong></span>";

    } else if (num == 1 && aleatori2 == 2) { // pPaper - mTisora
      resultat.innerHTML = "<span class='text-danger'><strong>La màquina ha guanyat!</strong></span>";

    } else if (num == 2 && aleatori2 == 1) { //mTisora - mPaper
      resultat.innerHTML = "<span class='text-primary'><strong>Has guanyat!</strong></span>";

    } else if (num == 2 && aleatori2 == 0) { //mTisora - mPedra
      resultat.innerHTML = "<span class='text-danger'><strong>La màquina ha guanyat!</strong></span>";
    }
  }
}
