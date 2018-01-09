/*******************************************************************************
************************************************************************ "ÍNDEX"
* # Comrpovar número usuari
* # Morra
* ## Màquina 1
* ## Màquina 2
* ## Assignar números a les imatges
* ## Resultat
*******************************************************************************/

// Activar l'ítem del Navbar.
$("li#morra").addClass("active");

/*
# Comrpovar número usuari
----------------------------------------------------------------------------- */
function comprovar() {
  var numEntrat = document.getElementById('numUsuari').value;

  if (numEntrat == "" || numEntrat == null || numEntrat < 2 || numEntrat > 10) {
    alert("Error: Introdueix un número entre 2 i 10, aquests dos inclosos.");

  } else {
    morra(numEntrat);
  }
}

/*
# Morra
--------------------------------------------------------------------------- */
function morra(num) {
  /*
  ## Màquina 1
  --------------------------------------------------------------------------- */
  //Array imatges persona.
  var imatge = [];
  imatge[0] = "<img src='un.png' class='img-fluid' />";
  imatge[1] = "<img src='dos.png' class='img-fluid' />";
  imatge[2] = "<img src='tres.png' class='img-fluid' />";
  imatge[3] = "<img src='quatre.png' class='img-fluid' />";
  imatge[4] = "<img src='cinc.png' class='img-fluid' />";

  // Escollir imatge.
  var aleatori = Math.floor(Math.random()*imatge.length);

  // Imprimir imatge.
  var divMaquina1 = document.getElementById("img-maquina1");
  divMaquina1.innerHTML = imatge[aleatori];
  var textDivMaquina1 = divMaquina1.innerHTML;

  /*
  ## Màquina 2
  --------------------------------------------------------------------------- */
  //Array imatges màquina.
  var imatge2 = [];
  imatge2[0] = "<img src='un.png' class='img-fluid' />";
  imatge2[1] = "<img src='dos.png' class='img-fluid' />";
  imatge2[2] = "<img src='tres.png' class='img-fluid' />";
  imatge2[3] = "<img src='quatre.png' class='img-fluid' />";
  imatge2[4] = "<img src='cinc.png' class='img-fluid' />";


  // Escollir imatge.
  var aleatori2 = Math.floor(Math.random()*imatge2.length);

  // Imprimir imatge.
  var divMaquina2 = document.getElementById("img-maquina2");
  divMaquina2.innerHTML = imatge2[aleatori2];
  var textDivMaquina2 = divMaquina2.innerHTML;

  /*
  ## Assignar números a les imatges
  Tenim en compte que aquestes s'assignen per un random (aleatori)
  --------------------------------------------------------------------------- */
  var numMaquina1;
  var numMaquina2;

  // Màquina 1
  switch (aleatori) {
    case 0:
      numMaquina1 = 1;
      break;
    case 1:
      numMaquina1 = 2;
      break;
    case 2:
      numMaquina1 = 3;
      break;
    case 3:
      numMaquina1 = 4;
      break;
    case 4:
      numMaquina1 = 5;
      break;
  }

  // Màquina 2
  switch (aleatori2) {
    case 0:
      numMaquina2 = 1;
      break;
    case 1:
      numMaquina2 = 2;
      break;
    case 2:
      numMaquina2 = 3;
      break;
    case 3:
      numMaquina2 = 4;
      break;
    case 4:
      numMaquina2 = 5;
      break;
  }

  /*
  ## Resultat
  --------------------------------------------------------------------------- */
  var resultat = document.getElementById('solucio');

  // Sí el número entrat per l'usuari és igual al sumatori dels números de les
  // màquines, l'usuari haurà encertat el resultat, en cas contrari no.
  if (num == (numMaquina1 + numMaquina2)) {
    resultat.innerHTML = "<span class='text-primary'><strong>Correcte!</strong></span>";

  } else {
    resultat.innerHTML = "<span class='text-danger'><strong>Incorrecte!</strong></span>";
  }

}
