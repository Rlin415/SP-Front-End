"use strict";

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';
import aboutComponent from './about.component';

export default angular
    .module('about', [
      uiRouter,
      angularUiBootstrap
    ])
    .config(($stateProvider) => {
      $stateProvider
        .state('about', {
          url: '/about',
          template: '<about></about>'
        });
    })
    .component('about', aboutComponent);

angular.module('about').controller('UpdatesFormCtrl', function ($uibModalInstance, $scope, $http, $log) {
  $scope.user = {};

  $scope.submit = () => {
    $http({
      method: 'POST',
      url: '/api/subscribe',
      data: $scope.user
    })
    .then((res) => {
      $log.info('successfully subscribed user', res);
    })
    .catch((err) => {
      $log.info('error subscribing user');
    });
    $uibModalInstance.close();
  };

  $scope.cancel = () => {
    $uibModalInstance.dismiss('cancel');
  };
});
