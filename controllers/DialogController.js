app.controller('DialogController', function($scope, $mdDialog) {
  $scope.showInfo = function(ev) {
    $mdDialog.show({
      controller:  function ($scope, $mdDialog) {
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
        },
      templateUrl: 'templates/dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: true
    })
  };
});
