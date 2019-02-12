//Global variable (actually let)
let birthrates;

//Monitor page, after it loads invoke function.
//You'll need the stylesheet so "window" and load" over "document"
//and "DOMContentLoaded" is a safer bet.
window.addEventListener("load", function () {
    "use strict";

    //Invoke the sort high to low function.
    birthrates.sortHighToLow();

    //Get nav and ready event listener. If user clicks...
    const nav = document.querySelector("nav");

    //...then invoke a function.
    nav.addEventListener("click", function (element) {
        if (element.target.id === "high-to-low") {
            birthrates.sortHighToLow();
        } else if (element.target.id === "low-to-high") {
            birthrates.sortLowToHigh();
        }
    });


});

//The birthrates variable (let)
birthrates = {

    items: [

        {
            rank: 1,
            nation: "Angola",
            rate: 44.20,
            region: "Africa"
        },
        {
            rank: 2,
            nation: "Niger",
            rate: 44.20,
            region: "Africa"
        },
        {
            rank: 3,
            nation: "Mali",
            rate: 43.90,
            region: "Africa"
        },
        {
            rank: 4,
            nation: "Uganda",
            rate: 42.90,
            region: "Africa"
        },
        {
            rank: 5,
            nation: "Zambia",
            rate: 41.50,
            region: "Africa"
        },
        {
            rank: 6,
            nation: "Burundi",
            rate: 41.30,
            region: "Africa"
        },
        {
            rank: 7,
            nation: "Burkina Faso",
            rate: 41.20,
            region: "Africa"
        },
        {
            rank: 8,
            nation: "Malawi",
            rate: 41.00,
            region: "Africa"
        },
        {
            rank: 9,
            nation: "Somalia",
            rate: 39.60,
            region: "Africa"
        },
        {
            rank: 10,
            nation: "Liberia",
            rate: 38.30,
            region: "Africa"
        },
        {
            rank: 11,
            nation: "Mozambique",
            rate: 38.10,
            region: "Africa"
        },
        {
            rank: 12,
            nation: "Afghanistan",
            rate: 37.90,
            region: "Middle East"
        },
        {
            rank: 13,
            nation: "Nigeria",
            rate: 36.90,
            region: "Africa"
        },
        {
            rank: 14,
            nation: "Ethiopia",
            rate: 36.50,
            region: "Africa"
        },
        {
            rank: 15,
            nation: "Sierra Leone",
            rate: 36.30,
            region: "Africa"
        },
        {
            rank: 16,
            nation: "Tanzania",
            rate: 35.60,
            region: "Africa"
        },
        {
            rank: 17,
            nation: "Chad",
            rate: 35.60,
            region: "Africa"
        },
        {
            rank: 18,
            nation: "South Sudan",
            rate: 35.50,
            region: "Africa"
        },
        {
            rank: 19,
            nation: "Cameroon",
            rate: 35.40,
            region: "Africa"
        },
        {
            rank: 20,
            nation: "Guinea",
            rate: 35.10,
            region: "Africa"
        },
        {
            rank: 21,
            nation: "Benin",
            rate: 35.00,
            region: "Africa"
        },
        {
            rank: 22,
            nation: "Congo, Republic of the",
            rate: 34.40,
            region: "Africa"
        },
        {
            rank: 23,
            nation: "Central African Republic",
            rate: 34.30,
            region: "Africa"
        },
        {
            rank: 24,
            nation: "Gabon",
            rate: 34.20,
            region: "Africa"
        },
        {
            rank: 25,
            nation: "Zimbabwe",
            rate: 34.20,
            region: "Africa"
        },
        {
            rank: 26,
            nation: "Congo, Democratic Republic of the",
            rate: 33.50,
            region: "Africa"
        },
        {
            rank: 27,
            nation: "Timor-Leste",
            rate: 33.40,
            region: "Oceania"
        },
        {
            rank: 28,
            nation: "Senegal",
            rate: 33.40,
            region: "Africa"
        },
        {
            rank: 29,
            nation: "Togo",
            rate: 33.30,
            region: "Africa"
        },
        {
            rank: 30,
            nation: "Guinea-Bissau",
            rate: 32.50,
            region: "Africa"
        },
        {
            rank: 31,
            nation: "Sao Tome and Principe",
            rate: 32.40,
            region: "Africa"
        },
        {
            rank: 32,
            nation: "Equatorial Guinea",
            rate: 32.20,
            region: "Africa"
        },
        {
            rank: 33,
            nation: "Madagascar",
            rate: 31.60,
            region: "Africa"
        },
        {
            rank: 34,
            nation: "Gaza Strip",
            rate: 31.40,
            region: "Middle East"
        },
        {
            rank: 35,
            nation: "Rwanda",
            rate: 30.70,
            region: "Africa"
        },
        {
            rank: 36,
            nation: "Ghana",
            rate: 30.50,
            region: "Africa"
        },
        {
            rank: 37,
            nation: "Iraq",
            rate: 30.40,
            region: "Middle East"
        },
        {
            rank: 38,
            nation: "Mauritania",
            rate: 30.40,
            region: "Africa"
        },
        {
            rank: 39,
            nation: "Eritrea",
            rate: 29.60,
            region: "Africa"
        },
        {
            rank: 40,
            nation: "Egypt",
            rate: 29.60,
            region: "Africa"
        },
        {
            rank: 41,
            nation: "Gambia, The",
            rate: 29.40,
            region: "Africa"
        },
        {
            rank: 42,
            nation: "Western Sahara",
            rate: 29.30,
            region: "Africa"
        },
        {
            rank: 43,
            nation: "Yemen",
            rate: 28.40,
            region: "Middle East"
        },
        {
            rank: 44,
            nation: "Sudan",
            rate: 27.90,
            region: "Africa"
        },
        {
            rank: 45,
            nation: "Cote d'Ivoire",
            rate: 27.70,
            region: "Africa"
        },
        {
            rank: 46,
            nation: "Namibia",
            rate: 27.30,
            region: "Africa"
        },
        {
            rank: 47,
            nation: "West Bank",
            rate: 26.30,
            region: "Middle East"
        },
        {
            rank: 48,
            nation: "Comoros",
            rate: 26.10,
            region: "Africa"
        },
        {
            rank: 49,
            nation: "Solomon Islands",
            rate: 24.90,
            region: "Oceania"
        },
        {
            rank: 50,
            nation: "Lesotho",
            rate: 24.60,
            region: "Africa"
        },
        {
            rank: 51,
            nation: "Marshall Islands",
            rate: 24.40,
            region: "Oceania"
        },
        {
            rank: 52,
            nation: "Guatemala",
            rate: 24.10,
            region: "Central America"
        },
        {
            rank: 53,
            nation: "Belize",
            rate: 24.00,
            region: "Central America"
        },
        {
            rank: 54,
            nation: "Oman",
            rate: 24.00,
            region: "Middle East"
        },
        {
            rank: 55,
            nation: "Swaziland",
            rate: 24.00,
            region: "Africa"
        },
        {
            rank: 56,
            nation: "Nauru",
            rate: 24.00,
            region: "Oceania"
        },
        {
            rank: 57,
            nation: "Vanuatu",
            rate: 24.00,
            region: "Oceania"
        },
        {
            rank: 58,
            nation: "Jordan",
            rate: 23.90,
            region: "Middle East"
        },
        {
            rank: 59,
            nation: "Kenya",
            rate: 23.90,
            region: "Africa"
        },
        {
            rank: 60,
            nation: "Papua New Guinea",
            rate: 23.70,
            region: "Oceania"
        },
        {
            rank: 61,
            nation: "Philippines",
            rate: 23.70,
            region: "Southeast Asia"
        },
        {
            rank: 62,
            nation: "Tuvalu",
            rate: 23.70,
            region: "Oceania"
        },
        {
            rank: 63,
            nation: "Laos",
            rate: 23.60,
            region: "Southeast Asia"
        },
        {
            rank: 64,
            nation: "Djibouti",
            rate: 23.40,
            region: "Africa"
        },
        {
            rank: 65,
            nation: "Tajikistan",
            rate: 23.30,
            region: "Central Asia"
        },
        {
            rank: 66,
            nation: "Haiti",
            rate: 23.00,
            region: "Caribbean"
        },
        {
            rank: 67,
            nation: "Cambodia",
            rate: 23.00,
            region: "Southeast Asia"
        },
        {
            rank: 68,
            nation: "Honduras",
            rate: 22.40,
            region: "Central America"
        },
        {
            rank: 69,
            nation: "Algeria",
            rate: 22.20,
            region: "Africa"
        },
        {
            rank: 70,
            nation: "Tonga",
            rate: 22.20,
            region: "Oceania"
        },
        {
            rank: 71,
            nation: "Botswana",
            rate: 22.10,
            region: "Africa"
        },
        {
            rank: 72,
            nation: "Kyrgyzstan",
            rate: 22.10,
            region: "Central Asia"
        },
        {
            rank: 73,
            nation: "Bolivia",
            rate: 22.00,
            region: "South America"
        },
        {
            rank: 74,
            nation: "Pakistan",
            rate: 21.90,
            region: "Middle East"
        },
        {
            rank: 75,
            nation: "Syria",
            rate: 21.20,
            region: "Middle East"
        },
        {
            rank: 76,
            nation: "Kiribati",
            rate: 21.20,
            region: "Oceania"
        },
        {
            rank: 77,
            nation: "Samoa",
            rate: 20.40,
            region: "Oceania"
        },
        {
            rank: 78,
            nation: "South Africa",
            rate: 20.20,
            region: "Africa"
        },
        {
            rank: 79,
            nation: "Cabo Verde",
            rate: 20.00,
            region: "Africa"
        },
        {
            rank: 80,
            nation: "Micronesia, Federated States of",
            rate: 20.00,
            region: "Oceania"
        },
        {
            rank: 81,
            nation: "Guam",
            rate: 19.70,
            region: "Oceania"
        },
        {
            rank: 82,
            nation: "American Samoa",
            rate: 19.60,
            region: "Oceania"
        },
        {
            rank: 83,
            nation: "Nepal",
            rate: 19.50,
            region: "South Asia"
        },
        {
            rank: 84,
            nation: "Kuwait",
            rate: 19.20,
            region: "Middle East"
        },
        {
            rank: 85,
            nation: "Malaysia",
            rate: 19.10,
            region: "Southeast Asia"
        },
        {
            rank: 86,
            nation: "Turkmenistan",
            rate: 19.10,
            region: "Central Asia"
        },
        {
            rank: 87,
            nation: "India",
            rate: 19.00,
            region: "South Asia"
        },
        {
            rank: 88,
            nation: "Mongolia",
            rate: 18.90,
            region: "Central Asia"
        },
        {
            rank: 89,
            nation: "Bangladesh",
            rate: 18.80,
            region: "Southeast Asia"
        },
        {
            rank: 90,
            nation: "Venezuela",
            rate: 18.80,
            region: "South America"
        },
        {
            rank: 91,
            nation: "Fiji",
            rate: 18.60,
            region: "Oceania"
        },
        {
            rank: 92,
            nation: "Dominican Republic",
            rate: 18.40,
            region: "Caribbean"
        },
        {
            rank: 93,
            nation: "Saudi Arabia",
            rate: 18.30,
            region: "Middle East"
        },
        {
            rank: 94,
            nation: "Mexico",
            rate: 18.30,
            region: "North America"
        },
        {
            rank: 95,
            nation: "Tunisia",
            rate: 18.20,
            region: "Africa"
        },
        {
            rank: 96,
            nation: "Israel",
            rate: 18.10,
            region: "Middle East"
        },
        {
            rank: 97,
            nation: "Burma",
            rate: 18.10,
            region: "Southeast Asia"
        },
        {
            rank: 98,
            nation: "Kazakhstan",
            rate: 18.10,
            region: "Central Asia"
        },
        {
            rank: 99,
            nation: "Jamaica",
            rate: 17.90,
            region: "Caribbean"
        },
        {
            rank: 100,
            nation: "Panama",
            rate: 17.90,
            region: "South America"
        },
        {
            rank: 101,
            nation: "Iran",
            rate: 17.90,
            region: "Middle East"
        },
        {
            rank: 102,
            nation: "Ecuador",
            rate: 17.90,
            region: "South America"
        },
        {
            rank: 103,
            nation: "Peru",
            rate: 17.80,
            region: "South America"
        },
        {
            rank: 104,
            nation: "Nicaragua",
            rate: 17.70,
            region: "Central America"
        },
        {
            rank: 105,
            nation: "Morocco",
            rate: 17.70,
            region: "Africa"
        },
        {
            rank: 106,
            nation: "Libya",
            rate: 17.50,
            region: "Africa"
        },
        {
            rank: 107,
            nation: "Bhutan",
            rate: 17.30,
            region: "South Asia"
        },
        {
            rank: 108,
            nation: "Brunei",
            rate: 17.00,
            region: "Southeast Asia"
        },
        {
            rank: 109,
            nation: "Uzbekistan",
            rate: 16.80,
            region: "Central Asia"
        },
        {
            rank: 110,
            nation: "Argentina",
            rate: 16.70,
            region: "South America"
        },
        {
            rank: 111,
            nation: "Paraguay",
            rate: 16.60,
            region: "South America"
        },
        {
            rank: 112,
            nation: "El Salvador",
            rate: 16.20,
            region: "Central America"
        },
        {
            rank: 113,
            nation: "Indonesia",
            rate: 16.20,
            region: "Oceania"
        },
        {
            rank: 114,
            nation: "Colombia",
            rate: 16.10,
            region: "South America"
        },
        {
            rank: 115,
            nation: "Maldives",
            rate: 16.10,
            region: "South Asia"
        },
        {
            rank: 116,
            nation: "Azerbaijan",
            rate: 15.80,
            region: "Central Asia"
        },
        {
            rank: 117,
            nation: "Suriname",
            rate: 15.80,
            region: "South America"
        },
        {
            rank: 118,
            nation: "Antigua and Barbuda",
            rate: 15.70,
            region: "Caribbean"
        },
        {
            rank: 119,
            nation: "Turkey",
            rate: 15.70,
            region: "Middle East"
        },
        {
            rank: 120,
            nation: "Costa Rica",
            rate: 15.50,
            region: "Central America"
        },
        {
            rank: 121,
            nation: "Grenada",
            rate: 15.50,
            region: "Caribbean"
        },
        {
            rank: 122,
            nation: "Vietnam",
            rate: 15.50,
            region: "Southeast Asia"
        },
        {
            rank: 123,
            nation: "Guyana",
            rate: 15.40,
            region: "South America"
        },
        {
            rank: 124,
            nation: "Turks and Caicos Islands",
            rate: 15.30,
            region: "Caribbean"
        },
        {
            rank: 125,
            nation: "Bahamas, The",
            rate: 15.30,
            region: "Caribbean"
        },
        {
            rank: 126,
            nation: "Sri Lanka",
            rate: 15.20,
            region: "Southeast Asia"
        },
        {
            rank: 127,
            nation: "Dominica",
            rate: 15.10,
            region: "Caribbean"
        },
        {
            rank: 128,
            nation: "United Arab Emirates",
            rate: 15.10,
            region: "Middle East"
        },
        {
            rank: 129,
            nation: "New Caledonia",
            rate: 15.00,
            region: "Oceania"
        },
        {
            rank: 130,
            nation: "Northern Mariana Islands",
            rate: 15.00,
            region: "Oceania"
        },
        {
            rank: 131,
            nation: "French Polynesia",
            rate: 14.80,
            region: "Oceania"
        },
        {
            rank: 132,
            nation: "Korea, North",
            rate: 14.60,
            region: "East Asia"
        },
        {
            rank: 133,
            nation: "Greenland",
            rate: 14.40,
            region: "Scandinavia"
        },
        {
            rank: 134,
            nation: "Faroe Islands",
            rate: 14.30,
            region: "Scandinavia"
        },
        {
            rank: 135,
            nation: "Lebanon",
            rate: 14.30,
            region: "Middle East"
        },
        {
            rank: 136,
            nation: "Brazil",
            rate: 14.10,
            region: "South America"
        },
        {
            rank: 137,
            nation: "Ireland",
            rate: 14.10,
            region: "Europe"
        },
        {
            rank: 138,
            nation: "Cook Islands",
            rate: 14.00,
            region: "Oceania"
        },
        {
            rank: 139,
            nation: "Gibraltar",
            rate: 14.00,
            region: "Europe"
        },
        {
            rank: 140,
            nation: "Curacao",
            rate: 13.70,
            region: "Caribbean"
        },
        {
            rank: 141,
            nation: "Iceland",
            rate: 13.70,
            region: "Scandinavia"
        },
        {
            rank: 142,
            nation: "Seychelles",
            rate: 13.70,
            region: "Africa"
        },
        {
            rank: 143,
            nation: "Chile",
            rate: 13.60,
            region: "South America"
        },
        {
            rank: 144,
            nation: "Saint Lucia",
            rate: 13.30,
            region: "Caribbean"
        },
        {
            rank: 145,
            nation: "Bahrain",
            rate: 13.30,
            region: "Middle East"
        },
        {
            rank: 146,
            nation: "Saint Vincent and the Grenadines",
            rate: 13.20,
            region: "Caribbean"
        },
        {
            rank: 147,
            nation: "Saint Kitts and Nevis",
            rate: 13.20,
            region: "Caribbean"
        },
        {
            rank: 148,
            nation: "Wallis and Futuna",
            rate: 13.20,
            region: "Oceania"
        },
        {
            rank: 149,
            nation: "Albania",
            rate: 13.20,
            region: "Europe"
        },
        {
            rank: 150,
            nation: "New Zealand",
            rate: 13.20,
            region: "Oceania"
        },
        {
            rank: 151,
            nation: "Saint Maarten",
            rate: 13.10,
            region: "Caribbean"
        },
        {
            rank: 152,
            nation: "Uruguay",
            rate: 13.00,
            region: "South America"
        },
        {
            rank: 153,
            nation: "Mauritius",
            rate: 13.00,
            region: "Africa"
        },
        {
            rank: 154,
            nation: "Armenia",
            rate: 12.90,
            region: "Middle East"
        },
        {
            rank: 155,
            nation: "Virgin Islands",
            rate: 12.80,
            region: "Caribbean"
        },
        {
            rank: 156,
            nation: "Trinidad and Tobago",
            rate: 12.70,
            region: "Caribbean"
        },
        {
            rank: 157,
            nation: "Anguilla",
            rate: 12.50,
            region: "Caribbean"
        },
        {
            rank: 158,
            nation: "United States",
            rate: 12.50,
            region: "North America"
        },
        {
            rank: 159,
            nation: "Aruba",
            rate: 12.40,
            region: "Caribbean"
        },
        {
            rank: 160,
            nation: "Jersey",
            rate: 12.40,
            region: "Europe"
        },
        {
            rank: 161,
            nation: "China",
            rate: 12.30,
            region: "East Asia"
        },
        {
            rank: 162,
            nation: "Georgia",
            rate: 12.30,
            region: "Central Asia"
        },
        {
            rank: 163,
            nation: "France",
            rate: 12.20,
            region: "Europe"
        },
        {
            rank: 164,
            nation: "Norway",
            rate: 12.20,
            region: "Scandinavia"
        },
        {
            rank: 165,
            nation: "Australia",
            rate: 12.10,
            region: "Oceania"
        },
        {
            rank: 166,
            nation: "United Kingdom",
            rate: 12.10,
            region: "Europe"
        },
        {
            rank: 167,
            nation: "Sweden",
            rate: 12.10,
            region: "Scandinavia"
        },
        {
            rank: 168,
            nation: "Cayman Islands",
            rate: 12.00,
            region: "Caribbean"
        },
        {
            rank: 169,
            nation: "Barbados",
            rate: 11.70,
            region: "Caribbean"
        },
        {
            rank: 170,
            nation: "Luxembourg",
            rate: 11.50,
            region: "Europe"
        },
        {
            rank: 171,
            nation: "Moldova",
            rate: 11.50,
            region: "Europe"
        },
        {
            rank: 172,
            nation: "Macedonia",
            rate: 11.40,
            region: "Europe"
        },
        {
            rank: 173,
            nation: "Bermuda",
            rate: 11.30,
            region: "North America"
        },
        {
            rank: 174,
            nation: "Palau",
            rate: 11.30,
            region: "Oceania"
        },
        {
            rank: 175,
            nation: "Belgium",
            rate: 11.30,
            region: "Europe"
        },
        {
            rank: 176,
            nation: "Cyprus",
            rate: 11.30,
            region: "Middle East"
        },
        {
            rank: 177,
            nation: "British Virgin Islands",
            rate: 11.10,
            region: "Caribbean"
        },
        {
            rank: 178,
            nation: "Russia",
            rate: 11.00,
            region: "Central Asia"
        },
        {
            rank: 179,
            nation: "Thailand",
            rate: 11.00,
            region: "Southeast Asia"
        },
        {
            rank: 180,
            nation: "Isle of Man",
            rate: 11.00,
            region: "Europe"
        },
        {
            rank: 181,
            nation: "Falkland Islands (Islas Malvinas)",
            rate: 10.90,
            region: "South America"
        },
        {
            rank: 182,
            nation: "Netherlands",
            rate: 10.90,
            region: "Europe"
        },
        {
            rank: 183,
            nation: "Montserrat",
            rate: 10.80,
            region: "Caribbean"
        },
        {
            rank: 184,
            nation: "Cuba",
            rate: 10.70,
            region: "Caribbean"
        },
        {
            rank: 185,
            nation: "Finland",
            rate: 10.70,
            region: "Scandinavia"
        },
        {
            rank: 186,
            nation: "Denmark",
            rate: 10.50,
            region: "Scandinavia"
        },
        {
            rank: 187,
            nation: "Switzerland",
            rate: 10.50,
            region: "Scandinavia"
        },
        {
            rank: 188,
            nation: "Liechtenstein",
            rate: 10.40,
            region: "Europe"
        },
        {
            rank: 189,
            nation: "Ukraine",
            rate: 10.30,
            region: "Europe"
        },
        {
            rank: 190,
            nation: "Canada",
            rate: 10.30,
            region: "North America"
        },
        {
            rank: 191,
            nation: "Belarus",
            rate: 10.30,
            region: "Europe"
        },
        {
            rank: 192,
            nation: "Malta",
            rate: 10.10,
            region: "Europe"
        },
        {
            rank: 193,
            nation: "Estonia",
            rate: 10.10,
            region: "Europe"
        },
        {
            rank: 194,
            nation: "Montenegro",
            rate: 10.00,
            region: "Europe"
        },
        {
            rank: 195,
            nation: "Lithuania",
            rate: 9.90,
            region: "Europe"
        },
        {
            rank: 196,
            nation: "Guernsey",
            rate: 9.80,
            region: "Europe"
        },
        {
            rank: 197,
            nation: "Slovakia",
            rate: 9.70,
            region: "Europe"
        },
        {
            rank: 198,
            nation: "Latvia",
            rate: 9.70,
            region: "Europe"
        },
        {
            rank: 199,
            nation: "Qatar",
            rate: 9.60,
            region: "Middle East"
        },
        {
            rank: 200,
            nation: "Saint Helena, Ascension, and Tristan da Cunha",
            rate: 9.60,
            region: "South America"
        },
        {
            rank: 201,
            nation: "Austria",
            rate: 9.50,
            region: "Europe"
        },
        {
            rank: 202,
            nation: "Poland",
            rate: 9.50,
            region: "Europe"
        },
        {
            rank: 203,
            nation: "Czechia",
            rate: 9.30,
            region: "Europe"
        },
        {
            rank: 204,
            nation: "Spain",
            rate: 9.20,
            region: "Europe"
        },
        {
            rank: 205,
            nation: "Hungary",
            rate: 9.00,
            region: "Europe"
        },
        {
            rank: 206,
            nation: "Serbia",
            rate: 9.00,
            region: "Europe"
        },
        {
            rank: 207,
            nation: "Portugal",
            rate: 9.00,
            region: "Europe"
        },
        {
            rank: 208,
            nation: "Hong Kong",
            rate: 8.90,
            region: "East Asia"
        },
        {
            rank: 209,
            nation: "Romania",
            rate: 8.90,
            region: "Europe"
        },
        {
            rank: 210,
            nation: "Croatia",
            rate: 8.90,
            region: "Europe"
        },
        {
            rank: 211,
            nation: "Bosnia and Herzegovina",
            rate: 8.80,
            region: "Europe"
        },
        {
            rank: 212,
            nation: "Bulgaria",
            rate: 8.70,
            region: "Europe"
        },
        {
            rank: 213,
            nation: "Germany",
            rate: 8.60,
            region: "Europe"
        },
        {
            rank: 214,
            nation: "Singapore",
            rate: 8.60,
            region: "Southeast Asia"
        },
        {
            rank: 215,
            nation: "Italy",
            rate: 8.60,
            region: "Europe"
        },
        {
            rank: 216,
            nation: "Macau",
            rate: 8.60,
            region: "East Asia"
        },
        {
            rank: 217,
            nation: "San Marino",
            rate: 8.60,
            region: "Europe"
        },
        {
            rank: 218,
            nation: "Greece",
            rate: 8.40,
            region: "Europe"
        },
        {
            rank: 219,
            nation: "Taiwan",
            rate: 8.30,
            region: "East Asia"
        },
        {
            rank: 220,
            nation: "Korea, South",
            rate: 8.30,
            region: "East Asia"
        },
        {
            rank: 221,
            nation: "Slovenia",
            rate: 8.20,
            region: "Europe"
        },
        {
            rank: 222,
            nation: "Puerto Rico",
            rate: 8.10,
            region: "Caribbean"
        },
        {
            rank: 223,
            nation: "Japan",
            rate: 7.70,
            region: "East Asia"
        },
        {
            rank: 224,
            nation: "Andorra",
            rate: 7.50,
            region: "Europe"
        },
        {
            rank: 225,
            nation: "Saint Pierre and Miquelon",
            rate: 7.10,
            region: "North America"
        },
        {
            rank: 226,
            nation: "Monaco",
            rate: 6.60,
            region: "Europe"
        }
    ],

    //Remove all child elements from main.
    removeAll: function () {
        "use strict";

        const main = document.querySelector("main");

        while (main.hasChildNodes()) {
            main.removeChild(main.lastChild);
        }
    },

    //Sort nations by rank, high to low.
    sortHighToLow: function () {
        "use strict";

        //Sort object. Pass result to other function.
        const highToLow = birthrates.items.sort(function (a, b) {
            return a.rank - b.rank;
        });

        //Invoke other functions.
        birthrates.removeAll();
        birthrates.displayResults(highToLow);
    },

    //Sort nations by rank, low to high.
    sortLowToHigh: function () {
        "use strict";

        //Sort object. Pass result to other function.
        const lowToHigh = birthrates.items.sort(function (a, b) {
            return -(a.rank - b.rank);
        });

        //Invoke other functions.
        birthrates.removeAll();
        birthrates.displayResults(lowToHigh);
    },

    //Receive sort result. Build and display elements.
    displayResults: function (srank) {
        "use strict";

        //For each function.
        Object.keys(srank).forEach(function (key) {

            //Create figure element.
            const section = document.createElement("section");

            //Create p elements.
            const pea1 = document.createElement("p");
            const pea2 = document.createElement("p");
            const pea3 = document.createElement("p");

            pea1.className = "nation-name";
            pea2.className = "nation-rate";
            pea3.className = "nation-region";

            //const span = document.createElement("span");

            if (srank[key].region === "Africa") {
                pea3.style.background = "#ffccbc";
            } else if (srank[key].region === "Caribbean") {
                pea3.style.background = "#b2ebf2";
            } else if (srank[key].region === "Central America") {
                pea3.style.background = "#bdc192";
            } else if (srank[key].region === "Central Asia") {
                pea3.style.background = "#5d99c6";
            } else if (srank[key].region === "East Asia") {
                pea3.style.background = "#bbdefb";
            } else if (srank[key].region === "Europe") {
                pea3.style.background = "#e0e0e0";
            } else if (srank[key].region === "Middle East") {
                pea3.style.background = "#c5cae9";
            } else if (srank[key].region === "North America") {
                pea3.style.background = "#e6ee9c";
            } else if (srank[key].region === "Oceania") {
                pea3.style.background = "#b2dfdb";
            } else if (srank[key].region === "Scandinavia") {
                pea3.style.background = "#bdbdbd";
            } else if (srank[key].region === "South America") {
                pea3.style.background = "#f0f4c3";
            } else if (srank[key].region === "South Asia") {
                pea3.style.background = "#8aacc8";
            } else if (srank[key].region === "Southeast Asia") {
                pea3.style.background = "#90caf9";
            }

            //Assign text content to p element.
            pea1.textContent = srank[key].nation;
            pea2.textContent = srank[key].rate;
            pea3.textContent = srank[key].region;

            //Join figure and p elements.
            section.appendChild(pea3);
            section.appendChild(pea1);
            section.appendChild(pea2);
 

            //Join section and figure elements.
            const main = document.querySelector("main");
            main.appendChild(section);

        });
    }
    
}; //close birthrates

