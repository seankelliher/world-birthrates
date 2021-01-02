//Remove items from main.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function cleanMain() {
    "use strict";

    const main = document.querySelector("main");

    while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }
}

export {cleanMain};