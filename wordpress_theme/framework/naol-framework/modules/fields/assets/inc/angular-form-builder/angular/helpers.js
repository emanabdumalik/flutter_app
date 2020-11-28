//window.droid=new Android();
(function () {
  'use strict';
  
  
angular.module('MubaraHelper',['ngMaterial'])
    .service('Konsole',function($mdColorPalette,$mdBottomSheet){

     var konsole = {
     };

     return konsole;
  
  })
     .service('Main',function($mdColorPalette,$mdBottomSheet){

     var self=this;
     this.set=function(ctrl){
     	self.main_ctrl=ctrl;
     }
      this.get=function(){
     	return self.main_ctrl;
     }

     return this;
  
  })
})(angular);