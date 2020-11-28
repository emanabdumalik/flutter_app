(function (angular) {
  'use strict';

  angular.module('MubaraApp')
    .directive('customDirective', function () {


    var directive = {
      restrict: 'E | A',
      templateUrl: 'tmpls/directiveTemplate.html',
      scope: {
        item: '=',
        ctrl:'=',
        property:"=",
        index:"="



      },
      controller: DirectiveCtrl,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;
  });

  /*@ngInject*/
  function DirectiveCtrl($sce,$element,$scope) {
  	this.Scope=$scope;
  	var self=this;

 // $element.find("#image-container").css({"height":window.innerHeight+"px"});


  }





})(angular);
