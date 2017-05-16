app.controller('SelectController', [
  '$scope',
  function($scope) {
    $scope.colors = [
      { name: "chaos",    src: "css/chaos.css" },
      { name: "burichan", src:"css/burichan.css"},
      { name: "futaba",   src: "css/futaba.css"},
      { name: "kusaba",   src: "css/kusaba.css"},
      { name: "photon",   src: "css/photon.css"},
      { name: "bluemoon", src: "css/bluemoon.css" }
    ];
    $scope.characters = [
      { name: "Glider",            matrix: glider,        yShift: 0,   xShift: 0},
      { name: "Die Hard",          matrix: dieHard,       yShift: 18,  xShift: 16},
      { name: "Acorn",             matrix: acorn,         yShift: 18,  xShift: 17},
      { name: "The R-pentomino",   matrix: theRPentomino, yShift: 18,  xShift: 18},
      { name: "Gosper glider gun", matrix: gGG,           yShift: 15,  xShift: 2},
      { name: "Clear",             matrix: [[]],          yShift: 0 ,  xShift: 0}
    ];
    $scope.setColor = function() {
      document.getElementById("color").href = $scope.selectedColor
    };
  }
])
