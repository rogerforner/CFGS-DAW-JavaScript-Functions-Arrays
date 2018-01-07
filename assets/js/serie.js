/*******************************************************************************
************************************************************************ "ÍNDEX"
* # Fibonacci
* # App
* # Comrpovar número usuari
*******************************************************************************/

// Activar l'ítem del Navbar.
$("li#serie").addClass("active");

/*
# Fibonacci
----------------------------------------------------------------------------- */
function serieFibonacci(num) {
  if (num === 1) {
    return [0, 1];

  } else {
    var sequencia = serieFibonacci(num - 1);

    sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]);

    return sequencia;
  }
}


/*
# App
----------------------------------------------------------------------------- */
// Creem un array amb números. Per poder fer la sèrie de fibbonacci el número
// ha de ser superior a 1, per això comencem amb el 2.
var nums = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// Extraiem un número a l'atzar (random) del array que conforma la variable nums.
var num = nums[Math.floor(Math.random() * nums.length)];

// Obtenció de la sèrie de fibonacci. Aquesta la passem a un String per tal de
// poder separar els números que retorna en un Array.
var serie = serieFibonacci(num).toString();

// Separem els números de la sèrie obtinguts, tenint en compte la coma "," com a
// delimitador. El valor de la variable es guarda en forma d'Array.
var separarNumsSerie = serie.split(",");

// Donem la volta al Array ja que ens interessa obtenir els últims 7 números. En
// realitat són 6 números, però lúltim no el contem ja que l'ocultarem perquè és
// el que ha d'endevinar l'usuari.
var serieCuaCap = separarNumsSerie.reverse();

// Agafar els primers 7 números. El 7è és el que endivinarà l'usuari.
// Li tornem a donar la volta.
var setPrimers = serieCuaCap.slice(0,7);
var serieJoc   = setPrimers.reverse();

// Obtenim l'últim número de la serie. Aquest és el que ha d'endivinar l'usuari.
// Obtenim els 6 primer números per mostrar-los a l'usuari.
var numUsuari = serieJoc[serieJoc.length-1];
var numsUsuari = serieJoc.slice(0,6);

// Escriure els números de la sèrie a la pàgina.
// Tenim com a refrència un span#serie-fibo.
var spanPagSerie = document.getElementById("serie-fibo");
spanPagSerie.textContent = numsUsuari;
var textSpanPagSerie = spanPagSerie.textContent;

// Escriure els números de la sèrie a la pàgina.
// Tenim com a refrència un span abbr#num-fibo.
var spanPagNum = document.getElementById("num-fibo");
spanPagNum.textContent = num;
var textSpanPagNum = spanPagNum.textContent;


/*
# Comrpovar número usuari
----------------------------------------------------------------------------- */
function comprovar() {
  var numEntrat = document.getElementById('numUsuari').value;

  if (numEntrat == "" || numEntrat == null) {
    alert("Error: Introdueix un número.");

  } else {
    if (numEntrat == numUsuari) {
      alert("Correcte! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧");

    } else {
      alert("Incorrecte! ¬_¬");
    }
  }
}
