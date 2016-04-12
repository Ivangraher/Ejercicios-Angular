'use strict';

angular.module('ligaBaloncestoApp')
    .factory('Equipo', function ($resource, DateUtils) {
        return $resource('api/equipos/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.fechaCreacion = DateUtils.convertLocaleDateFromServer(data.fechaCreacion);
                    return data;
                }
            },
            'maxCanastasJugador': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.fechaCreacion = DateUtils.convertLocaleDateFromServer(data.fechaCreacion);
                    return data;
                },url:'api/equipos/:id/maxCanastasJugador'
            },
            'jugadorMasVeterano': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.fechaCreacion = DateUtils.convertLocaleDateFromServer(data.fechaCreacion);
                    return data;
                },url:'api/equipos/:id/jugadorMasVeterano'
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.fechaCreacion = DateUtils.convertLocaleDateToServer(data.fechaCreacion);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.fechaCreacion = DateUtils.convertLocaleDateToServer(data.fechaCreacion);
                    return angular.toJson(data);
                }
            }
        });
    });
