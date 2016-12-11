var isMobile = false;
function checkIfMobile() {
  if(navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/Blackberry/i)
  || navigator.userAgent.match(/Windows Phone/i)) {
    isMobile = true;
  }
  else {
    isMobile = false;
  }
}
checkIfMobile();

// Configure the routing
var app = angular.module('theApp', ['ngRoute', 'controllers', 'ui.bootstrap']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: (isMobile)? 'views/mobile.html':'views/main.html',
      controller: (isMobile)? 'myController':'myController'
    })
}]);
