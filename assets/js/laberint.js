/*******************************************************************************
************************************************************************ "ÍNDEX"
* # App
*******************************************************************************/

// Activar l'ítem del Navbar.
$("li#laberint").addClass("active");

/*
# App
----------------------------------------------------------------------------- */
// Array 12x12 que dibuixa el laberint.
var laberint = [
  [4, 0, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1],
  [1, 0, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1],
  [1, 0, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
  [1, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1],
  [1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0],
  [1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 0],
  [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4]
];

generarTaulaLaberint(laberint);

function generarTaulaLaberint(laberint) {
  // Insertarem la taula en un div amb un id específic.
  var spanLaberint = document.getElementById("taula-laberint");

  // Creem els elements principals de taula.
  // A la taula li donem un estil del bootstrap.
  var table = document.createElement('table');
  table.setAttribute("class", "table table-bordered");
  var tbody = document.createElement('tbody');

  // Executarem una iteració forEach per cada element de l'array.
  cFiles = 1; // Comptador files.
  laberint.forEach(function(dadesFila) {
    // Creem una fila.
    var fila = document.createElement('tr');
    fila.setAttribute("class", cFiles);

    // Executarem una iteració forEach per cada element de l'array.
    cCelles = 1; // Comptador cel·les.
    dadesFila.forEach(function(dadesCella) {
      // Creem una fila.
      var cella = document.createElement('td');
      cella.setAttribute("class", cCelles);


      cella.appendChild(document.createTextNode(dadesCella));
      fila.appendChild(cella);

      cCelles++;
    });

    tbody.appendChild(fila);

    cFiles++;
  });

  table.appendChild(tbody);
  spanLaberint.appendChild(table);

  /* Emprem JQuery, NOMÉS per pintar els td perquè és 100 vegades més fàcil
  que amb JavaScript. */
  // Donar estils (color) a la taula.
  // La idea és eliminar el text i pintar el fons de les cel·les en un 1.
  // console.log(document.getElementsByTagName("td")[0].textContent);
  $("td:contains(1)").addClass("bg-dark");
  $("td:contains(4)").addClass("bg-danger");
}

// Quan l'usuari es rendeix pintem el camí.
function rendirse() {
  // Pintem en blau el camí. El qual es defineix amb 0.
  $("td:contains(0)").addClass("bg-primary");

  // Desactivem el botó
  $("button#rendir").prop("disabled", true);

  // Reiniciar el joc.
  setTimeout(
    function() {
      window.location.reload();
    }, 3000
  );
}
