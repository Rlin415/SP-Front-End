"use strict";

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Components from './components/components';
import AppComponent from './app.component';

{
  angular.module('app', [
    uiRouter,
    Components.name
  ])
    .config(($urlRouterProvider) => {
      $urlRouterProvider.otherwise('/about');
    })
    .component('app', AppComponent);
}
