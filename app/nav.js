import {sortItemsAlphaAsc, sortItemsAlphaDes} from "./sorter-a.js";
import {sortItemsNumAsc, sortItemsNumDes} from "./sorter-n.js";

function monitorNav() {
    "use strict";

    //Get nav.
    const nav = document.querySelector("nav");

    //Monitor nav for clicks.
    nav.addEventListener("click", function (event) {

        //Get the target's class. Check its content.
        const ascending = event.target.classList.contains("ascending");
        const descending = event.target.classList.contains("descending");
        const etid = event.target.id;

        //Modify class to inverse. Invoke matching function.
        if (ascending === true) {
            event.target.classList.remove("ascending");
            event.target.classList.add("descending");
            if (etid === "rate-click") {
                sortItemsNumDes("rate");
            }
            if (etid === "nation-click") {
                sortItemsAlphaDes("nation");
            }
            if (etid === "region-click") {
                sortItemsAlphaDes("region");
            }
        }

        //Modify class to inverse. Invoke matching function.
        if (descending === true) {
            event.target.classList.remove("descending");
            event.target.classList.add("ascending");
            if (etid === "rate-click") {
                sortItemsNumAsc("rate");
            }
            if (etid === "nation-click") {
                sortItemsAlphaAsc("nation");
            }
            if (etid === "region-click") {
                sortItemsAlphaAsc("region");
            }
        }
    });
}

export {monitorNav};