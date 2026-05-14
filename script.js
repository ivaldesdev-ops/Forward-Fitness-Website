/* 
Name: Isaac Valdes
File Name: script.js
Date: 4/11/2022
 */

// Global variables

var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

// Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");
  if (menu.style.display === "block" && logo.style.display === "none"){
    menu.style.display = "none";
    logo.style.display = "block";
  }else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
}

// Function to display the burpees example video
function burpees() {
  videoSource.src = "Media/burpees.mp4";
  descriptionSource.src = "Media/burpees-descriptions.vtt"
  video.style.display = "block";
  video.load();
}

// Function to display the plank example video
function plank() {
  videoSource.src = "Media/plank.mp4";
  descriptionSource.src = "Media/plank-descriptions.vtt";
  video.style.display = "block";
  video.load();
}

// Function to display the mountain climbers example video
function mountain() {
  videoSource.src = "Media/mc.mp4";
  descriptionSource.src = "Media/mountain-descriptions.vtt";
  video.style.display = "block";
  video.load();
}

// function to display a promo code
function discount() {
  var promo = document.getElementById("special");
  promo.firstChild.nodeValue = "Promo Code: D25START";
  promo.style.color = "#ff0000";
  promo.style.fontSize = "2em";
}