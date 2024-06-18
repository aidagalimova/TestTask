"use strict";

function toggle(down, up, content) {
  const dropDown = document.getElementById(down);
  const dropUp = document.getElementById(up);
  const educationDescription = document.getElementById(content);
  if (dropDown.style.display === "none") {
    dropDown.style.display = "block";
    dropUp.style.display = "none";
    educationDescription.style.display = "none";
  } else {
    dropDown.style.display = "none";
    dropUp.style.display = "block";
    educationDescription.style.display = "flex";
  }
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
