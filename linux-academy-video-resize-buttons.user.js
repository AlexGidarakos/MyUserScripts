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

// Make space for the buttons
var target = $("#vl-menu-icon");
target.removeClass("col-sm-2");
target.addClass("col-sm-1");
target = target.prev();
target.removeClass("col-sm-10");
target.addClass("col-sm-9");

// Create a container for the buttons
var videoResizeButtons = $("<div/>", {
  "id": "video-resize-buttons",
  "class": "col-sm-2",
  "css": {
    "padding": "18px 0"
  }
});
