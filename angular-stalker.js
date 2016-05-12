(function () {
  'use strict';

  angular.module('angular-stalker', [])
    .directive('angularStalker', function($timeout) {
      return {
        restrict: 'A',
        link: function(scope, elem) {
          $timeout(function() {
            elem.stalker({
              stalkerStyle: attrs.angularStalkerStyle
            });
          });
        }
      };
    });
})();