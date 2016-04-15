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
// @version     0.1
// @description Adds video resize buttons on Linux Academy course pages
// @homepage    https://github.com/AlexGidarakos/MyUserScripts
// @include     https://linuxacademy.com/cp/courses/lesson/course/*
// @grant       none
// ==/UserScript==

var target = $(".la-video-player").parent();

function smallerVid() {
  var size = target.attr("class").split('-')[2];
  if(size > 4) size--;
  target.attr("class", "col-md-" + size);
}

function largerVid() {
  var size = target.attr("class").split('-')[2];
  if(size < 12) size++;
  target.attr("class", "col-md-" + size);
}

var smallerBtn = $("<button/>", {
  id: "smallerBtn",
  "class": "btn btn-la-major",
  type: "button",
  text: "Smaller",
  style: "margin-bottom: 12px; margin-right: 12px;",
  click: smallerVid
});

var largerBtn = $("<button/>", {
  id: "largerBtn",
  "class": "btn btn-la-major",
  type: "button",
  text: "Larger",
  style: "margin-bottom: 12px; margin-right: 12px;",
  click: largerVid
});

target.prepend(largerBtn);
target.prepend(smallerBtn);
