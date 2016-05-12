(function () {
  'use strict';

  angular.module('angular-stalker', [])
    .directive('angular-stalker', function() {
      return {
        restrict: 'A',
        link: function(scope, elem) {
          elem.stalker();
        }
      }
    });
})();