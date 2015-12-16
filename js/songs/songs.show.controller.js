(function() {
  'use strict';
  angular
  .module("songs")
  .controller("songsShowController",[
    "songFactory",
    "$stateParams",
    songsShowControllerFunction
  ]);

  function songsShowControllerFunction(songFactory, $stateParams){
    console.log($stateParams);
    this.song = songFactory.get({id: $stateParams.id});
  };

}());
