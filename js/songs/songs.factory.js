(function() {
  'use strict';
  angular
  .module("songs")
  .factory("songFactory", [
    "$resource",
    songFactoryFunction
  ]);

  function songFactoryFunction($resource){
    return $resource("http://localhost:3000/songs");
  };
}());
