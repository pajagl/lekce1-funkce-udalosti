// tady je místo pro náš program

// Změna barvy čtvereček
function zmenaBarvy () {
  document.querySelector(".ctverecek").style.backgroundColor = "green";
}

document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

// výsledek po stisknutí tlačítka

function zobrazVysledek() {
  document.querySelector("#vysledek").innerHTML = secti (4, 5);
}

/**
 * Upozorní uživatele při spuštění.
 */

function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");

  // propsání do konzole 
  console.log("Gratulace, právě jsi spustila tuto funkci :)");

  //nahrazení textu ve čtverci
  let squareElement = document.getElementsByClassName("ctverecek")[0]
  squareElement.innerHTML = "Gratulace, právě si spustila tuto funkci!";
  squareElement.style.width = "fit-content";
  squareElement.style.backgroundColor = "grey";
}



