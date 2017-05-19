var app = angular.module('myApp', ['ngMaterial'])

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('cyan' )
    .warnPalette('cyan')
    //.backgroundPalette('cyan')
    .dark();
});
