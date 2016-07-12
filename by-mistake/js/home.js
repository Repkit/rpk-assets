"use strict";

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ambilight;
var video;
function onYouTubeIframeAPIReady() {
  ambilight = new YT.Player('ambilight', {
    // videoId: 'kcaQ1KnHJyQ',
    videoId: 'uDpojAGsthw',
    events: {
      'onReady': ambilightReady
    }
  });
  video = new YT.Player('video', {
    videoId: 'uDpojAGsthw',
    events: {
      'onReady': videoReady,
      'onStateChange': stateChange
    }
  });
}

function ambilightReady(event) {
  ambilight.mute();
}

function videoReady(event) {
}

function stateChange(state){
  if(state.data == 1){
    setTimeout(function(){ 
      ambilight.seekTo(1);
      ambilight.playVideo();
    }, 500);
  }else if(state.data == 2){
    ambilight.pauseVideo();
  }
}