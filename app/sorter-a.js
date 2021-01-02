import {birthrates} from "./birthrates.js";
import {cleanMain} from "./cleaner.js";
import {displayResults} from "./results.js";

//THIS MODULE SORTS BY "ALPHA" (LETTERS).

//Receive argument from nav.
//Sort birthrates by alpha, ascending.
function sortItemsAlphaAsc(item) {
    "use strict";

    const itemsAlphaAsc = birthrates.sort(function (a, b) {

        const itemA = a[item].toUpperCase();
        const itemB = b[item].toUpperCase();

        if (itemA < itemB) {
            return -1;
        }

        if (itemA > itemB) {
            return 1;
        }

        return 0;
    });

    //Invoke next functions.
    cleanMain();
    displayResults(itemsAlphaAsc);
}

//Receive argument from nav.
//Sort birthrates by alpha, descending.
function sortItemsAlphaDes(item) {
    "use strict";

    const itemsAlphaDes = birthrates.sort(function (a, b) {

        const itemA = a[item].toUpperCase();
        const itemB = b[item].toUpperCase();

        if (itemA < itemB) {
            return 1;
        }

        if (itemA > itemB) {
            return -1;
        }

        return 0;
    });

    //Invoke next functions.
    cleanMain();
    displayResults(itemsAlphaDes);
}

export {sortItemsAlphaAsc, sortItemsAlphaDes};