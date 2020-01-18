/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//de zoekknop class wordt toegevoegd aan de variabele "zoeken"
var zoeken = document.querySelector('.zoekknop');
//de zoekbalk class wordt toegevoegd aan de variable "searchbar"
var searchbar = document.querySelector('.search-closed');

//wanneer de eventlistener wordt getriggerd wordt de class van de zoekbalk getoggled
function toggle() {
    searchbar.classList.toggle('search-open');
}

//er wordt een eventlistener toegevoegd aan de zoekknop
zoeken.addEventListener("click", toggle);

console.log(zoeken, searchbar, toggle);
