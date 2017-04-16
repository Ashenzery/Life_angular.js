var app = angular.module('myApp', [])

.directive('popUpDialog', function(){
  return {
    restrict: 'E',
    scope: false,
    template: popUpDialog.html,
    controller: function( $scope ) {
      $scope.showPopUpDialog = true;
      $scope.popUpDialogContent = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
    }
  }
})
