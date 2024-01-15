// Open a new tab and get a reference to the new window
var newTab = window.open("hordes.io/play");

// Add a script element to the new window
var scriptElement = newTab.document.createElement('script');
scriptElement.src = 'https://raw.githubusercontent.com/Huntlb/KekUI/main/main.js';  // Replace with your script URL
newTab.document.head.appendChild(scriptElement);
