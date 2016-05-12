(function () {
  'use strict';

  angular.module('angular-stalker', [])
    .directive('angularStalker', function() {
      return {
        restrict: 'A',
        link: function(scope, elem) {
          elem.stalker();
        }
      };
    });
})();