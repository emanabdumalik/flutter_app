(function () {
  'use strict';


  angular.module('MubaraApp', ['ngMaterial', 'MubaraHelper', 'ngAria', 'ngAnimate', 'btford.socket-io', 'ui.router'])


    .config(function ($stateProvider, $urlRouterProvider) {

      var demoState = {
        name: 'demo',
        abstract: false,
        url: '/demo',
        templateUrl: 'tmpls/demo.html',

        controller: DemoController
      }
      var introState = {
        name: 'intro',
        url: '/intro',
        templateUrl: 'tmpls/intro.html',
        controller: IntroController

      }

      var signupState = {
        name: 'signup',
        url: '/signup',
        templateUrl: 'tmpls/signup.html',
        controller: AccountController

      }
      var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'tmpls/login.html',
        controller: AccountController

      }
      var forgotPasswordState = {
        name: 'forgotPassword',
        url: '/forgotPassword',
        templateUrl: 'tmpls/forgotPassword.html',
        controller: AccountController

      }
      var helpState = {
        name: 'help',
        url: '/help',
        templateUrl: 'tmpls/help.html',
        controller: AccountController

      }
      var otpState = {
        name: 'otp',
        url: '/otp',
        templateUrl: 'tmpls/otp.html',
        controller: AccountController

      }
      var otp2State = {
        name: 'otp2',
        url: '/otp2',
        templateUrl: 'tmpls/otp2.html',
        controller: AccountController

      }
      var verificationState = {
        name: 'verification',
        url: '/verification',
        templateUrl: 'tmpls/verification.html',
        controller: AccountController

      }
      var verificationState2 = {
        name: 'verification2',
        url: '/verification2',
        templateUrl: 'tmpls/verification2.html',
        controller: AccountController

      }
      var profileState = {
        name: 'profile',
        url: '/profile',
        templateUrl: 'tmpls/profile.html',
        controller: ProfileController

      }
      var profileState2 = {
        name: 'profile2',
        url: '/profile2',
        templateUrl: 'tmpls/profile2.html',
        controller: ProfileController

      }
      var profileState3 = {
        name: 'profile3',
        url: '/profile3',
        templateUrl: 'tmpls/profile3.html',
        controller: ProfileController

      }
      var profileState4 = {
        name: 'profile4',
        url: '/profile4',
        templateUrl: 'tmpls/profile4.html',
        controller: ProfileController

      }
      var profileTutorState4 = {
        name: 'profile4-tutor',
        url: '/profile4-tutor',
        templateUrl: 'tmpls/profile4-tutor.html',
        controller: ProfileController

      }
      var profileTutorState5 = {
        name: 'profile5-tutor',
        url: '/profile5-tutor',
        templateUrl: 'tmpls/profile5-tutor.html',
        controller: ProfileController

      }
      var profileTutorState6 = {
        name: 'profile6-tutor',
        url: '/profile6-tutor',
        templateUrl: 'tmpls/profile6-tutor.html',
        controller: ProfileController

      }
      var profileTutorState7 = {
        name: 'profile7-tutor',
        url: '/profile7-tutor',
        templateUrl: 'tmpls/profile7-tutor.html',
        controller: ProfileController

      }
      var profileState5 = {
        name: 'profile5',
        url: '/profile5',
        templateUrl: 'tmpls/profile5.html',
        controller: ProfileController

      }
      var profileState6 = {
        name: 'profile6',
        url: '/profile6',
        templateUrl: 'tmpls/profile6.html',
        controller: ProfileController

      }
      var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'tmpls/home.html',
        controller: HomeController

      }
      var settingState = {
        name: 'setting',
        url: '/setting',
        templateUrl: 'tmpls/setting.html',
        controller: HomeController

      }
      var bookState = {
        name: 'book',
        url: '/book',
        templateUrl: 'tmpls/book.html',
        controller: HomeController

      }
      var moneyState = {
        name: 'money',
        url: '/money',
        templateUrl: 'tmpls/money.html',
        controller: HomeController

      }
      var paymentState = {
        name: 'payment',
        url: '/payment',
        templateUrl: 'tmpls/payment.html',
        controller: HomeController

      }
      var tutorState = {
        name: 'tutor',
        url: '/tutor',
        templateUrl: 'tmpls/tutor.html',
        controller: HomeController

      }
      var reviewState = {
        name: 'review',
        url: '/review',
        templateUrl: 'tmpls/review.html',
        controller: HomeController

      }

      $stateProvider.state(helpState);
      $stateProvider.state(demoState);
      $stateProvider.state(signupState);
      $stateProvider.state(loginState);
      $stateProvider.state(forgotPasswordState);
      $stateProvider.state(otp2State);
      $stateProvider.state(otpState);
      $stateProvider.state(introState);
      $stateProvider.state(verificationState);
      $stateProvider.state(verificationState2);
      $stateProvider.state(profileState);
      $stateProvider.state(profileState2);
      $stateProvider.state(profileState3);
      $stateProvider.state(profileState4);
      $stateProvider.state(profileTutorState4);
      $stateProvider.state(profileTutorState5);
      $stateProvider.state(profileTutorState6);
      $stateProvider.state(profileTutorState7);

      $stateProvider.state(profileState5);
      $stateProvider.state(profileState6);
      $stateProvider.state(homeState);
      $stateProvider.state(settingState);
      $stateProvider.state(bookState);
      $stateProvider.state(moneyState);
      $stateProvider.state(paymentState);

      $stateProvider.state(reviewState);
      $stateProvider.state(tutorState);


      $urlRouterProvider.otherwise('demo');
    })
    .config(['$mdIconProvider', '$mdThemingProvider', '$mdAriaProvider', '$mdInkRippleProvider', function ($mdIconProvider, $mdThemingProvider, $mdAriaProvider, $mdInkRippleProvider) {

      // here is where our router goes


      $mdThemingProvider.theme('default')
        .primaryPalette('teal', {
          'default': '400', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': '500',

        })
        .accentPalette('teal', {
          'default': '400', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': '600',

        });

      $mdThemingProvider.theme('black')
        .primaryPalette('grey', {
          'default': '400', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': '900',

        })




      $mdInkRippleProvider.disableInkRipple();
      $mdAriaProvider.disableWarnings();

    }])

    .controller('AppController', AppController)
    .controller('DemoController', DemoController)
    .controller('IntroController', IntroController)
    .controller('AccountController', AccountController)
    .controller('VerificationController', VerificationController)
    .controller('ProfileController', ProfileController)
    .controller('HomeController', HomeController)





  function AppController( $mdLiveAnnouncer,$transitions, $rootScope, $window, Main, $scope, $state, $mdColors, $timeout, $mdSidenav, $log, $mdDialog, $mdColorPalette, $mdMenu, $mdBottomSheet) {
    var self = this;
    $state.transitionTo('demo');
    $rootScope.goBack = function () {
      $window.history.back();
    }
     $mdLiveAnnouncer.announce('Hey Google');
    $scope.budget = 50;
    $scope.distance = 50;
    Main.set(self);
    $transitions.onStart({}, function (trans) {

    


    });
    setTimeout(function () {

      //$state.transitionTo('demo');

    }, 500)
    $scope.tggle = function (snId) {

      $mdSidenav(snId).toggle().then(function () {
        self.right_open = !self.right_open;
        // alert();
        $timeout(function () { $scope.$apply() }, 500);
      });

    }

    self.loaded = false;
    self.toolbar_visible = false;
    self.toggleToolbar = function () {
      self.toolbar_visible = !self.toolbar_visible;
    }
    self.toggleLeft = buildDelayedToggler('left');
    self.toggleRight = buildDelayedToggler('right');

    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        self.left = !self.left;
        $timeout(function () { $scope.$apply(); }, 10);
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function () {
          timer = undefined;
          func.apply(context, args);
        }, wait || 0);
      };
    }
    self.left = false;
    function buildDelayedToggler(navID) {


      return debounce(function () {

        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 1);
    }







    $timeout(function () {




      self.loaded = true;

      $scope.$apply();
      jQuery(document).ready(function () {

       
        FastClick.attach(document.body);
      })


    }, 2000);






  }
  function IntroController($mdLiveAnnouncer,Main, $scope, $state) {
    var self = this;
    self.main_ctrl = Main.get();
  }
  function DemoController(Main, $scope, $state) {

    var self = this;
    self.main_ctrl = Main.get();
    $mdLiveAnnouncer.announce('Hey Google');

  }
  function AccountController(Main, $scope, $state) {

    var self = this;
    self.main_ctrl = Main.get();

  }
  function VerificationController(Main, $scope, $state) {

    var self = this;
    self.main_ctrl = Main.get();

  }
  function ProfileController(Main, $scope, $state) {

    var self = this;
    self.user_type = 'student';
    self.profile_states={
      'student':[

        'interest',
        'location',
        'education_level',
        'profile_picture',
        'confirmation_screen'
      ],
      'teacher':[
        'interest',
        'location',
        'qualification',
        'experience',
        'about',
        'schedule_payment',
        'profile_picture',
        'confirmation_screen'
      ]
    }
    self.fee = "$100";
    self.days =[
      {label:'M',state:'active-green'},
      {label:'T',state:'active-green'},
      {label:'W',state:'active-green'},
      {label:'T',state:'active-green'},
      {label:'F',state:'active-green'},
      {label:'S',state:'active-green'},
      {label:'S',state:'active-green'},
    ];
    self.main_ctrl = Main.get();

  }
  function HomeController($timeout,Main, $scope, $state) {

    var self = this;
    self.main_ctrl = Main.get();
    self.session_notification = true;
    self.screen_notification = true;

    self.navigate_to=function(page){
      $state.transitionTo(page);

    }
  
    $timeout(function () {




      self.loaded = true;

      jQuery(document).ready(function () {

        $('.tutor-list md-list-item').click(function(e){
          $state.transitionTo('tutor');
        })
       
      })


    }, 2000);

  }

})(angular);

