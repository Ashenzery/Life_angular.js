app.controller('SelectController', [
  '$scope',
  function($scope) {
    $scope.characters = [
      { name: "Glider",            matrix: glider,        yShift: 0,   xShift: 0},
      { name: "Die Hard",          matrix: dieHard,       yShift: 18,  xShift: 16},
      { name: "Acorn",             matrix: acorn,         yShift: 18,  xShift: 17},
      { name: "The R-pentomino",   matrix: theRPentomino, yShift: 18,  xShift: 18},
      { name: "Gosper glider gun", matrix: gGG,           yShift: 15,  xShift: 2},
      { name: "Clear",             matrix: [[]],          yShift: 0 ,  xShift: 0},
      { name: "Random 5%",         matrix: random(0.05),  yShift: 0 ,  xShift: 0},
      { name: "Random 10%",        matrix: random(0.1),   yShift: 0 ,  xShift: 0},
      { name: "Random 15%",        matrix: random(0.15),  yShift: 0 ,  xShift: 0},
      { name: "Random 20%",        matrix: random(0.2),   yShift: 0 ,  xShift: 0},
      { name: "Random 25%",        matrix: random(0.25),  yShift: 0 ,  xShift: 0}
    ];
  }
  ]
);
