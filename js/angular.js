// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {

  // $scope.playerMove = "";
  $scope.playerScore = 0;
  $scope.computerScore = 0;
  $scope.ties = 0;

  $scope.playGame = function () {

    var cpuMove = computerMove();

    $scope.computer = cpuMove;
    var win = winLogic(cpuMove, $scope.playerMove);

    if(win === $scope.playerMove){
      $scope.winner = "Player Wins";
      $scope.playerScore += 1;
    } else if (win === cpuMove) {
      $scope.winner = "Computer Wins";
      $scope.computerScore += 1;
    } else {
      $scope.winner = "Tie";
      $scope.ties += 1;
    }
  }

});
