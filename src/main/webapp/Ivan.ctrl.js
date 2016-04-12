'use strict'
angular.module('ligaBaloncestoApp')
    .controller('IvanCtrl', function($scope,Jugador,$http) {

        $http.get("api/equipos").then(function (response) {
            $scope.equipos = response.data;
        });

        $scope.canastas = function () {
            if ($scope.equiposelected == null) {
                Jugador.byCanastas({canastas: $scope.canastasTotales}, function (response) {
                    $scope.jugadores = response;
                })
            }
            else {
                Jugador.byEquipos({
                    canastasTotales: $scope.canastasTotales,
                    equiposelected: $scope.equiposelected
                }, function (response) {
                    $scope.jugadores = response;
                })
            }
        };

        $scope.equipofunc = function () {
            $scope.canastas();
        }

        /*$scope.canastas = function (){Jugador.byCanastas({canastas: $scope.canastasTotales},function (response){$scope.jugadores=response;})}*/

        /*$scope.equipofunc = function() {
         $scope.equipos = function (){Jugador.byEquipos({canastasTotales: $scope.canastasTotales, equiposelected: $scope.equiposelected},function (response){$scope.jugadores=response;})}
         };*/

        /* $scope.equipofunc = function() {
         $scope.canastas();*/
    });




