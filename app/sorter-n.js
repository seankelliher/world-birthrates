import {birthrates} from "./birthrates.js";
import {cleanMain} from "./cleaner.js";
import {displayResults} from "./results.js";

//THIS MODULE SORTS BY "NUMERALS" (NUMBERS).

//Receive argument from nav.
//Sort birthrates by numeral, ascending.
function sortItemsNumAsc(item) {
    "use strict";

    const itemsNumAsc = birthrates.sort(function (a, b) {
        return a[item] - b[item];
    });

    //Invoke next functions.
    cleanMain();
    displayResults(itemsNumAsc);
}

//Receive argument from nav.
//Sort birthrates by numeral, descending.
function sortItemsNumDes(item) {
    "use strict";

    const itemsNumDes = birthrates.sort(function (a, b) {
        return b[item] - a[item];
    });

    //Invoke next functions.
    cleanMain();
    displayResults(itemsNumDes);
}

export {sortItemsNumAsc, sortItemsNumDes};