/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var zoeken = document.querySelector('.zoekknop');
var searchbar = document.querySelector('.search-closed');

function toggle() {
    searchbar.classList.toggle('search-open');
}

zoeken.addEventListener("click", toggle);

console.log(zoeken, searchbar, toggle);
