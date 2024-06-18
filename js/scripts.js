"use strict";

function toggle(down, up, content) {
  const dropDown = document.getElementById(down);
  const dropUp = document.getElementById(up);
  const educationDescription = document.getElementById(content);
  if (dropDown.style.display == "none") {
    dropDown.style.display = "block";
    dropUp.style.display = "none";
    educationDescription.style.display = "none";
  } else {
    dropDown.style.display = "none";
    dropUp.style.display = "block";
    educationDescription.style.display = "flex";
  }
}

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

function toggleNav() {
  const dropDown = document.getElementById("nav-drop-down");
  const dropUp = document.getElementById("nav-drop-up");
  const navEls = document.getElementById("nav-els");

  if (dropUp.style.display === "none") {
    dropDown.style.display = "none";
    dropUp.style.display = "block";
    navEls.style.display = "block";
  } else {
    dropDown.style.display = "block";
    dropUp.style.display = "none";
    navEls.style.display = "none";
  }
}
