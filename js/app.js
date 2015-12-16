"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "ngResource",
    "songs"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    routerFunction
  ]);

  function routerFunction($stateProvider, $locationProvider){
    $stateProvider
    .state("welcome", {
      url: "/",
      templateUrl: "js/welcome.html"
    })
    .state("songsIndex", {
      url: "/songs",
      templateUrl: "js/songs/index.html",
      controller: "songsIndexController",
      controllerAs: "songsViewModel"
    })
    .state("songShow", {
      url: "/songs/:id",
      templateUrl: "js/songs/song.show.html",
      controller: "songsShowController",
      controllerAs: "songsShowViewModel"
    })

    $locationProvider.html5Mode({enabled: true, requireBase: true});
  };

}());
