//Receive sorted results. Build and display elements on page.
function displayResults(srank) {
    "use strict";

    //Loop through results.
    Object.keys(srank).forEach(function (key) {

        //Create section element.
        const section = document.createElement("section");

        //Create column elements.
        const col1 = document.createElement("div");
        const col2 = document.createElement("div");
        const col3 = document.createElement("div");

        //Add class to column elements.
        col1.classList.add("column", "rate-column");
        col2.classList.add("column", "nation-column");
        col3.classList.add("column", "region-column");

        //Create p elements.
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");
        const para3 = document.createElement("p");

        //Assign class names to p elements.
        para1.classList.add("rate");
        para2.classList.add("name");
        para3.classList.add("region");

        //Assign background colors to "para3".
        if (srank[key].region === "Africa") {
            para3.style.background = "#FFCCBC";
        } else if (srank[key].region === "Caribbean") {
            para3.style.background = "#B2EBF2";
        } else if (srank[key].region === "Central America") {
            para3.style.background = "#BDC192";
        } else if (srank[key].region === "Central Asia") {
            para3.style.background = "#5D99C6";
        } else if (srank[key].region === "East Asia") {
            para3.style.background = "#BBDEFB";
        } else if (srank[key].region === "Europe") {
            para3.style.background = "#E0E0E0";
        } else if (srank[key].region === "Middle East") {
            para3.style.background = "#C5CAE9";
        } else if (srank[key].region === "North America") {
            para3.style.background = "#E6EE9C";
        } else if (srank[key].region === "Oceania") {
            para3.style.background = "#B2DFDB";
        } else if (srank[key].region === "Scandinavia") {
            para3.style.background = "#BDBDBD";
        } else if (srank[key].region === "South America") {
            para3.style.background = "#F0F4C3";
        } else if (srank[key].region === "South Asia") {
            para3.style.background = "#8AACC8";
        } else if (srank[key].region === "Southeast Asia") {
            para3.style.background = "#90CAF9";
        }

        //Assign text content to p elements.
        para1.textContent = srank[key].rate;
        para2.textContent = srank[key].nation;
        para3.textContent = srank[key].region;

        //Append p elements to column elements.
        col1.appendChild(para1);
        col2.appendChild(para2);
        col3.appendChild(para3);

        //Append column elements to section element.
        section.appendChild(col1);
        section.appendChild(col2);
        section.appendChild(col3);

        //Append section element to main element.
        const main = document.querySelector("main");
        main.appendChild(section);
    });
}

export {displayResults};