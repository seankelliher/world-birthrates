[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/world-birthrates?style=flat-square)](/LICENSE.txt)
## World Birthrates

Sortable list of world birthrates.

## Project Screen Shots

![screen shot of project](/screenshots/world-birthrates-screenshot1.jpg)

![screen shot of project](/screenshots/world-birthrates-screenshot2.jpg)

![screen shot of project](/screenshots/world-birthrates-screenshot3.jpg)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

I wanted to build a component where users can sort birthrates for the world's 226 nations by birthrate and nation name. I also wanted to display the region of the world each nation belongs to, color-code the regions for easier recognition, and allow users to sort by world region as well. 

One of the challenges in accomplishing this was managing such a large amount of information, and ensuring it could be accessed and displayed in six different ways (3 categories, each ascending and descending).

There was no available API to draw the data from somewhere else so I built a large object and stored the birthrate data within it. I used  "vanilla JavaScript" to accomplish my goals. I built six simple "while" loops to sort data (one for each possible option), and one "forEach" loop that received the selected sorted result and built and color-coded the page elements from it.

## Acknowledgments

* Birthrate data from the [Central Intelligence Agency](https://www.cia.gov/LIBRARY/publications/the-world-factbook/rankorder/2054rank.html).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).