//TODO:исправить циклические фигуры


var glider = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1]
];

var dieHard = [
  [0, 0, 0, 0, 0, 0, 1, 0],
  [1, 1],
  [0, 1, 0, 0, 0, 1, 1, 1]
  ];

var theRPentomino = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 1, 0]
]

var acorn = [
  [0, 1],
  [0, 0, 0, 1],
  [1, 1, 0, 0, 1, 1, 1]
]

var gGG = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

var deepCopy = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var isSame = function(arr1, arr2) {
  /* if (arr1.length != arr2.length) {
    return false;
  } */
  for (var i = 0; i < arr1.length; i++) {
    /* if(arr1[i].length != arr2.length) {
      return false;
    } */
    for(var j = 0; j < arr1[0].length; j++) {
      if(arr1[i][j] != arr2[i][j]) {
        return false;
      }
    }
  }
  return true;
};

var isIn = function(i, arr) {
  for (var index in arr) {
    if (i == arr[index]) {
      return true;
    }
  } return false;
};

var deepIsIn = function(arr, arrOfArr) {
  for (var index in arrOfArr) {
    var n = 0;
    for(var i=0; i < arr.length; i++) {
     if (arr[i] === arrOfArr[index][i]) {
       n++;
     } if (n === arr.length) {
       return true;
     }
    }
  } return false;
};

var random = function(rate) {
  let padding = [0, 1, 2, 37, 38, 39]
  let matrix = []
  for (let y = 0; y < 40; y++) {
    matrix[y] = [];
    for (let x = 0; x < 40; x++) {
      if (isIn(y, padding) || isIn(x, padding)) {
        matrix[y][x] = 0;
      } else if (Math.random() < rate) {
        matrix[y][x] = 1;
      } else {
        matrix[y][x] = 0;
      }
    }
  }
  return matrix;
}

var warp = function(fy, fx, yLenBoard, xLenBoard) {
  var y, x;
  if (fy === yLenBoard) {
    y = 0;
  } else if (fy === -1) {
    y = yLenBoard-1;
  } else {
    y = fy;
  } if (fx === xLenBoard) {
    x = 0;
  } else if (fx === -1) {
    x = xLenBoard -1;
  } else {
    x = fx;
  }
  return [y, x];
};


app.controller('MainController',[
  '$scope',
  '$interval',
  function($scope, $interval) {
    $scope.crutch = true;
    $scope.size = 40;
    $scope.initBoard = function(x, y, form, yShift, xShift) {
      var board = new Array(y);
      for (var i = 0; i < y; i++) {
        board[i] = new Array(x);
        for (var j = 0; j < y; j++) {
          board[i][j] = +Boolean(board[i][j]);
        }
      }
      if (form) {
        for (var y = 0; y < form.length; y++) {
          for (var x = 0; x < form[y].length; x++) {
            if (form[y][x])
            {
              board[y + yShift][x + xShift] = 1;
            }
          }
        }
      }
      $scope.story = [];
      $scope.story[0] = board;
      $scope.maps = $scope.makeList($scope.story, 40, 40);
      $scope.board = deepCopy(board)
    };
    $scope.pause_or_play_icon = "icons/music-player-play.png",
    $scope.numOfNeighbors = function(board, y, x) {
      var n = 0;
      for(var counterY = y-1; counterY < y+2; counterY++) {
        for(var counterX = x-1; counterX < x+2; counterX++) {
          [new_y, new_x] = warp(counterY, counterX, 40, 40);
           if (counterX === x && counterY === y) {
            continue;
          } if (board[new_y][new_x]) {
            n++;
          }
        }
      } return n;
    },
    $scope.makeList = function(story, yLenBoard, xLenBoard) {
      var cell = [];
      var toOut = [];
      var boolin = story.length < 2;
      for(var y = 0; y < yLenBoard; y++) {
        for(var x = 0; x < xLenBoard; x++) {
          if (boolin) {
            cell = [y, x];
            toOut[toOut.length] = cell;
            continue;
          } else if (story[story.length -1][y][x] != story[story.length -2][y][x]) {
            for (var newY = y-1; newY < y+2; newY++) {
              for(var newX = x-1; newX < x+2; newX++) {
                cell = [newY, newX];
                if (!deepIsIn(cell, toOut)) {
                  toOut[toOut.length] = cell;
                }
              }
            }
          }
        }
      } return toOut;
    },
    $scope.genStep = function(maps, story) {
      var board = story[story.length-1];
      var newBoard = deepCopy(board);
      var y = 0;
      var x = 0;
      for (var c = 0; c < maps.length; c++) {
        [y, x] = maps[c];
        var cell = warp(y, x, 40, 40);
        y = cell[0];
        x = cell[1];
        if (board[y][x]) {
          if ( isIn( $scope.numOfNeighbors(board,y,x), [2, 3] ) ) {
            newBoard[y][x] = 1;
          } else {
            newBoard[y][x] = 0;
          }
        } else {
          if ( $scope.numOfNeighbors(board, y, x) === 3) {
            newBoard[y][x] = 1;
          }
        }
      } return newBoard;
    },

    $scope.isRepeated = function() {
      var len = $scope.story.length
      for (var gen = 0; gen < len; gen++) {
        if(isSame($scope.board, $scope.story[gen])) {
          //location.href=location.href;
          if (!gen) {
            $scope.initBoard(40, 40, deepCopy($scope.story[0]), 0, 0);
            $scope.story.length = 1;
          /*} else if (gen > 2) {
            $scope.board = deepCopy($scope.story[gen])
            $scope.story.length = gen;*/
          } else {
            $interval.cancel($scope.mainTimer);
            //$scope.settings();
          }
        }
      }
    },
    $scope.initBoard(40, 40, glider, 0, 0);
    $scope.pageTitile = document.getElementsByTagName("TITLE")[0]
    $scope.main = function() {
      $scope.crutch = false;
      $scope.board = $scope.genStep($scope.maps, $scope.story)
      $scope.isRepeated()
      $scope.story[$scope.story.length] = $scope.board
      $scope.maps = $scope.makeList($scope.story, 40, 40)
      $scope.pageTitile.text = 'Generation: ' + $scope.story.length
      $scope.crutch = true;
    },
    $scope.mainTimer = $interval($scope.main, 10000),
    $interval.cancel($scope.mainTimer),
    $scope._up_ = function() {
      while (!$scope.crutch) {}
      if ($scope.story.length > 2 && !$scope.showEditor) {
        $scope.story.length--
        $scope.pageTitile.text = 'Generation: ' + $scope.story.length
        $scope.board = $scope.story[$scope.story.length-1]
      };
    };
    $scope.pause = function() {
      while (!$scope.crutch) {};
      $interval.cancel($scope.mainTimer);
    };
    $scope.play = function() {
      $scope.mainTimer = $interval($scope.main, $scope.delay.value);
    };
    $scope.pause_and_play = function() {
      $scope.showDropMenu = false;
      if ($scope.showEditor) {
        $scope.showEditor = !$scope.showEditor;
        $scope.pause_or_play_icon = "icons/music-player-pause-lines.png"
        $scope.initBoard(40, 40, deepCopy($scope.board), 0, 0)
      }
      if (!$scope.mainTimer.$$state.status) {
        $scope.pause_or_play_icon = "icons/music-player-play.png"
        $scope.pause();
      } else {
        $scope.pause_or_play_icon = "icons/music-player-pause-lines.png"
        $scope.play();
      };
    };
    $scope.down = function() {
      if (!$scope.showEditor) {
         $scope.main()
       }
    };
    $scope.settings = function() {
      $scope.showEditor = !$scope.showEditor;
      $scope.pause_or_play_icon = "icons/music-player-play.png"
      if ($scope.showEditor) {
        $scope.pause()
      } else {
        $scope.initBoard(40, 40, deepCopy($scope.board), 0, 0)
      }
    };
    $scope.closeInfoDialog = function() {
      $scope.showInfoDialog = false;
    };
    $scope.showEditor = false;
    $scope.swap = function(x, y) {
      $scope.board[x][y] = +!$scope.board[x][y]
    };
    $scope.delay = {value: 750};
    //Из дочернего контроллера нельзя изменить свойство, только свойство свойства
  }
]
);
