import {monitorNav} from "./app/nav.js";

//When DOM loads...
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Get "clickable" ids.
    const rate = document.getElementById("rate-click");
    const nation = document.getElementById("nation-click");
    const region = document.getElementById("region-click");

    //Add classes to them.
    rate.classList.add("descending");
    nation.classList.add("descending");
    region.classList.add("descending");

    //Monitor nav for clicks.
    monitorNav();

    //Simulate click on "rate" heading.
    rate.click();
});