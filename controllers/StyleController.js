app.controller('StyleController',[
  '$scope',
  function($scope) {
    $scope.getCookie = function(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    $scope.css = $scope.getCookie("style"); //"css/chaos.css";
  }
]
);
