var app = angular.module('app', ['ui.router']);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');
    // debugger;
    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'components/_home.html',
            resolve: {
              // doSomething: function('$state') { return "bar"; }
            }
        }
            // onExit: Exercise.resetVariables
        );
  }
]);


app.controller('SimpleController', ['$scope', function ($scope) {
  $scope.sayHello = "Hello World!";

  $scope.phones = [
    {name: 'Nexus S', snippet: 'Fast just got faster with Nexus S.', date: new Date(1460324877630)},
    {name: 'Motorola XOOM™ with Wi-Fi', snippet: 'The Next, Next Generation tablet.', date: new Date(1460324877630 - 24*60*60*1000)},
    {name: 'MOTOROLA XOOM™', snippet: 'The Next, Next Generation tablet.', date: new Date(1460324877630 + 48*60*60*1000)}
  ];
}]);
