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
var app = angular.module('theApp', ['ui.router']);
app.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html'
    });
});

app.controller('myController', function($scope, $state) {
  $scope.$state = $state;
});

// Configure the routing
// var app = angular.module('theApp', ['ngRoute', 'controllers', 'ui.bootstrap']);
// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: (isMobile)? 'views/mobile.html':'views/main.html',
//       controller: (isMobile)? 'myController':'myController'
//     })
// }]);

// Remove the hastag from localhost:8080/#
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
