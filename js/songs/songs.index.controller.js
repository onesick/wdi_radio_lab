"use strict";


(function(){
  angular
  .module("songs")
  .controller("songsIndexController",[
    "songFactory",
    songsIndexControllerFunction
  ]);

  function songsIndexControllerFunction(songFactory){
    this.songs = songFactory.query();
  };
}());
