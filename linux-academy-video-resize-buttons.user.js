/*
*  A browser userscript that adds video resize buttons on linuxacademy.com
*
*  Copyright 2016, Alexandros Gidarakos.
*    Author: Alexandros Gidarakos <algida79@gmail.com>
*
*  SPDX-License-Identifier: GPL-2.0
*/

// ==UserScript==
// @author      Alexandros Gidarakos <algida79@gmail.com>
// @name        Linux Academy - Video resize buttons
// @namespace   linuxacademy.com
// @version     1.0
// @description Adds video resize buttons on Linux Academy course pages
// @homepage    https://github.com/AlexGidarakos/MyUserScripts
// @include     https://linuxacademy.com/cp/courses/lesson/course/*
// @grant       none
// ==/UserScript==

// Hide default resize button
var target = $("#vl-menu-icon");
target.css("display", "none");

// Create a container for the buttons
var videoResizeButtons = $("<div/>", {
  "id": "video-resize-buttons",
  "class": "col-sm-2",
  "css": {
    "padding": "18px 0"
  }
});

// DOM insertion of the container
target.before(videoResizeButtons);

// Set container as the target
target = target.prev();

// Create the buttons, with click event bound to the resize function
var btnVideoSmaller = $("<button/>", {
  "id": "btn-video-smaller",
  "class": "btn btn-la-major",
  "type": "button",
  "text": "-",
  "css": {
    "width": "36px",
    "height": "30px",
    "padding": "4px",
    "margin-right": "16px"
  },
  click: resizeVideo
});
var btnVideoLarger = $("<button/>", {
  "id": "btn-video-larger",
  "class": "btn btn-la-major",
  "type": "button",
  "text": "+",
  "css": {
    "width": "36px",
    "height": "30px",
    "padding": "4px"
  },
  click: resizeVideo
});

// DOM insertion of the buttons
target.append(btnVideoSmaller, btnVideoLarger);

// Target the element that should be resized
target = $(".js-video-column");

// Set video default size to col-md-11
target.removeClass("col-md-8");
target.addClass("col-md-11");

// Create the resize function
function resizeVideo() {
  // Get current video size from col-md class
  var currentClasses = target.attr("class").split(/\s+/);
  var currentClass = false;

  for(var i = 0; i < currentClasses.length; i++) {
    if(currentClasses[i].includes("col-md-")) {
      currentClass = currentClasses[i];
      break;
    }
  }

  // Return in case a col-md class was not found
  if(!currentClass) {
    return;
  }

  var currentSize = currentClass.split("-")[2];

  // Store resize intent as a boolean
  var enlarge = (this.id === "btn-video-larger")? true : false;

  // Calculate new size
  var newSize = currentSize;

  if(enlarge) {
    newSize++;
  }
  else {
    newSize--;
  }

  // Enable or disable buttons
  switch(newSize) {
    case 6:
    case 12:
      $(this).addClass("disabled");
      break;
    default:
      $("#btn-video-smaller").removeClass("disabled");
      $("#btn-video-larger").removeClass("disabled");
  }

  // Calculate new class
  var newClass = "col-md-" + newSize;

  // Resize video
  target.removeClass(currentClass);
  target.addClass(newClass);
}
