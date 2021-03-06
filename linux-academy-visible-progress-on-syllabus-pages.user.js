/*
*  A browser userscript that adds a visible progress percentage on Linux
*  Academy Syllabus pages
*
*  Copyright 2016, Alexandros Gidarakos.
*    Author: Alexandros Gidarakos <algida79@gmail.com>
*
*  SPDX-License-Identifier: GPL-2.0
*/

// ==UserScript==
// @author      Alexandros Gidarakos <algida79@gmail.com>
// @name        Linux Academy - Visible progress on Syllabus pages
// @namespace   linuxacademy.com
// @version     0.1
// @description Add visible progress percentage on Linux Academy Syllabus pages
// @homepage    https://github.com/AlexGidarakos/MyUserScripts
// @include     https://linuxacademy.com/cp/modules/view/id/*
// @grant       none
// ==/UserScript==

// Make space for the progress box
var target = $("#course-certificate-icon").prev();
target.removeClass("col-sm-11").addClass("col-sm-9");

// Create the progress box
var progressBox = $("<p/>", {
  "id": "progress-box",
  "class": "col-sm-2",
  "css": {
    "margin": "0"
  }
});

// DOM insertion of the progress box
target.before(progressBox);

// Progress attribute not immediately available, poll until available
var progress;
target = $(".course-completion-percentage-tooltip");

var progressPollInterval = setInterval(function() {
  progressPoll()
}, 100);

function progressPoll() {
  progress = target.attr("data-original-title");

  if(progress === undefined) {
    return;
  }

  // Progress is available, cancel polling
  clearInterval(progressPollInterval);

  // Set progress box text
  $("#progress-box").text("Progress: " + progress);
}
