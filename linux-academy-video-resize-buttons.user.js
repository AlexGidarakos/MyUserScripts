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
// @version     0.2
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

// Create the resize function
function resizeVideo() {
}
