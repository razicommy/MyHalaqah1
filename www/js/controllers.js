angular.module('app.controllers', [])
  
.controller('introCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$ionicHistory', 'PageGuard',         function($rootScope, $scope, $state, $stateParams, $ionicHistory, PageGuard) {
          /* PAGE GUARD */
          $scope.$on("$stateChangeStart", function(
            event,
            toState,
            toParams,
            fromState,
            fromParams
          ) {
            PageGuard.stateChangeStart($state.current.name, event, toState, fromState);
          });
          /* PAGE GUARD END */
          /* USER ACTION */
          $scope.userAction = function(strCmdGrp, strCmd, strRef, objRef) {
            switch (strCmdGrp) {
              case "nav":
                switch (strCmd) {
                  case "login":
                    localStorage.setItem("skipintro", "true");
                    PageGuard.switchPage("login", true, false, false);
                    break;
                } /*switch2*/
                break;
            } /*switch1*/
          };
          /* USER ACTION END */
          /* PAGE EVENTS */
          /* PAGE EVENTS END */
        }])
   
.controller('loginCtrl', ['$scope', '$state', '$stateParams', '$ionicHistory', 'PageGuard', 'Defaults', 'User', '$firebaseAuth',         function(
          $scope,
          $state,
          $stateParams,
          $ionicHistory,
          PageGuard,
          Defaults,
          User,
          $firebaseAuth
        ) {
          /* INIT BEGIN */
          $scope.app = {
            defaults: Defaults.data,
            user: User.data
          };
          User.initLocalUserInfo();
          /* INIT END */
          /* PAGE GUARD */
          $scope.$on("$stateChangeStart", function(
            event,
            toState,
            toParams,
            fromState,
            fromParams
          ) {
            PageGuard.stateChangeStart($state.current.name, event, toState, fromState);
          });
          /* PAGE GUARD END */
          /* USER ACTION */
          $scope.userAction = function(strCmdGrp, strCmd, strRef, objRef) {
            switch (strCmdGrp) {
              case "nav":
                switch (strCmd) {
                  case "intro":
                    PageGuard.switchPage("intro", true, false, false);
                    break;
                }
                break;
              case "user":
                User.userAction(strCmd, strRef, objRef);
                break;
            } /* CmdGrp Switch*/
          };
          /* USER ACTION END */
          /* onAuthStateChanged BEGIN */
          var reloadUserInfo = function(objAuthUser) {
            //console.log('handleAuthStateChange',objAuthUser);
            if (objAuthUser != null) {
              User.reloadUserInfo();
              PageGuard.switchPage($scope.app.defaults.pages.userPage, true, true, true);
            } else {
              User.setLocalUserInfo(null);
            }
          }
          $firebaseAuth().$onAuthStateChanged(function(objAuthUser) {
            //console.log(objAuthUser)
            reloadUserInfo(objAuthUser);
          });
          /* onAuthStateChanged END */
          /* PAGE EVENTS */
          $scope.$on("$ionicView.beforeEnter", function() {
            console.log('beforeEnter');
            /* DETERMINE THAT USER HAS SIGNED IN PREVIOUSLY */
            var checkUserInfo = function() {
              if ($scope.app.user.userInfo != null) {
                //switch Page
                PageGuard.switchPage(
                  $scope.app.defaults.pages.userPage,
                  true, true, true);
              } else {
                //stay here
              }
            }
            checkUserInfo();
            /* DETERMINE THAT USER HAS SIGNED IN PREVIOUSLY END*/
            /* DETERMINE THAT INTRO PAGE TO BE SKIPPED */
            var skipIntro = window.localStorage.getItem("skipintro");
            if (skipIntro != "true") {
              //switch to intro view
              PageGuard.switchPage("intro", true, true, true);
            }
            /* DETERMINE THAT INTRO PAGE TO BE SKIPPED END*/
          });
          /* PAGE EVENTS END */
        }])
   
.controller('homeCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading',         function($scope, $stateParams,$http,$ionicLoading) {
          

$scope.news={};  
$scope.getNews=function(){
  console.log('$scope.getNews')
                $ionicLoading.show();
  var url="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsites.google.com%2Fsite%2Frazicommy%2Fhome%2Fnews%2Fposts.xml"
  var param=""
            $http
              .get(url + param)
              .then(function(response) {
                if (response) {
                  console.log(response);
                  if (response) {
                    if (response.data) {
                      $scope.news  = angular.fromJson(response.data.items);
                    }
                  }
                }
              $ionicLoading.hide();
                console.log("ok");
              })
              .catch(function(e) {
              $ionicLoading.hide();
                console.log("error:" + e);
              });

}/*$scope.getNews*/          
          
          
          
          $scope.getNews();
          
          
          
        }])
   
.controller('takwimCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$localStorage', '$ionicLoading', '$http', function ($rootScope, $scope, $state, $stateParams,  $localStorage, $ionicLoading, $http) {


$scope.calendar={}
$scope.getCalendar=function(){

    var d = new Date();
    var n = d.toISOString();
  console.log(n)
  var url="https://www.googleapis.com/calendar/v3/calendars/4923d6bs63bht5abo5sao5mquk%40group.calendar.google.com/events?timeMin="+n+"&key=AIzaSyBb0uzWlQ0hSnlLxVtsM6ia4A5s2E7mXxo"
  var param=""

                $http
                .get(url + param)
                .then(function(response) {
                  if (response) {
                    //console.log(response);
                    if (response) {
                      if (response.data) {
                    $scope.calendar = response.data.items
                  console.log($scope.calendar)
                      }
                    }
                  }

                })
                .catch(function(e) {
                  console.log(e);
                });

}/*$scope.getCalendar*/  


          $scope.$on("$ionicView.enter", function() {
              
              $scope.getCalendar()
          })


} /*controller*/
])
   
.controller('halaqahCtrl', ['$rootScope', '$scope', '$state', '$stateParams', 'Defaults', function (
  $rootScope,
  $scope,
  $state,
  $stateParams,
  Defaults
) {
    
    
          /* INIT BEGIN */
          //UserService.initUser();
          $scope.app = {
            defaults: Defaults.data
          };
          //console.log($scope.app)
          /* INIT END */
          


} /*controller*/
])
   
.controller('guruCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$ionicHistory', '$localStorage', '$ionicPopup', function (
  $rootScope,
  $scope,
  $state,
  $stateParams,
  $ionicHistory,
  $localStorage,
  $ionicPopup
) {

          $scope.$on("$ionicView.enter", function() {
              guideUser()
          });
              
   var guideUser = function() {

      $scope.data = {}
      var popupSelectRole = $ionicPopup.show({
         template: 
         $localStorage.userName + ',<br/>' +
          'Ini adalah halaman Guru.<br/>'+
          'Anda menguruskan maklumat anda dan pelajar di sini.<br/>'
          ,
         title: 'Halaman Guru',
         subTitle: '',
         scope: $scope,
			
         buttons: [
            { text: 'OK', type: 'button-balanced' }
         ]
      });

 
   };/*guideUser*/     
   
   
} /*controller*/
])
   
.controller('pengurusanCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$ionicHistory', '$localStorage', '$ionicPopup', function (
  $rootScope,
  $scope,
  $state,
  $stateParams,
  $ionicHistory,
  $localStorage,
  $ionicPopup
) {

          $scope.$on("$ionicView.enter", function() {
              guideUser()
          });
              
   var guideUser = function() {

      $scope.data = {}
      var popupSelectRole = $ionicPopup.show({
         template: 
         $localStorage.userName + ',<br/>' +
          'Halaman Pengurusan.<br/>'+
          'Anda menguruskan maklumat pengurusan di sini.<br/>'
          ,
         title: 'Selamat Masuk',
         subTitle: '',
         scope: $scope,
			
         buttons: [
            { text: 'OK', type: 'button-balanced' }
         ]
      });

 
   };/*guideUser*/     
   
} /*controller*/
])
   
.controller('pentadbiranCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$ionicHistory', '$localStorage', '$ionicPopup', function (
  $rootScope,
  $scope,
  $state,
  $stateParams,
  $ionicHistory,
  $localStorage,
  $ionicPopup
) {

          $scope.$on("$ionicView.enter", function() {
              guideUser()
          });
              
   var guideUser = function() {

      $scope.data = {}
      var popupSelectRole = $ionicPopup.show({
         template: 
         $localStorage.userName + ',<br/>' +
          'Halaman Pentadbiran.<br/>'+
          'Anda menguruskan maklumat pentadbiran di sini.<br/>'
          ,
         title: 'Selamat Masuk',
         subTitle: '',
         scope: $scope,
			
         buttons: [
            { text: 'OK', type: 'button-balanced' }
         ]
      });

 
   };/*guideUser*/     
} /*controller*/
])
   
.controller('tasksCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function (
  $rootScope,
  $scope,
  $state,
  $stateParams
) {
  
$scope.app={parents:[{rship:"f"}]}  

$scope.app.school.batches=
[
    {123456:[{code:'2019-th4-01'},{code:'2019-th5-01'}]},
    {123457:[{code:'2019-th4-01'},{code:'2019-th6-01'}]}
];  




$scope.test=function(){
    alert(2)
}
  
} /*controller*/
])
   
.controller('menuCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$ionicHistory', 'PageGuard', 'Defaults', 'User', '$firebaseAuth', 'Organization',         function(
          $rootScope,
          $scope,
          $state,
          $stateParams,
          $ionicHistory,
          PageGuard,
          Defaults,
          User,
          $firebaseAuth,
          Organization
        ) {
          /* INIT BEGIN */
          $scope.app = {
            defaults: Defaults.data,
            user: User.data
          };
          User.initLocalUserInfo();
          $scope.page={
              showMenuMain:false,
              showMenuUser:false
          }          
          /* INIT END */
          /* PAGE GUARD */
          $scope.$on("$stateChangeStart", function(
            event,
            toState,
            toParams,
            fromState,
            fromParams
          ) {
            PageGuard.stateChangeStart($state.current.name, event, toState, fromState);
          });
          /* PAGE GUARD END */
          /*TOGGLEMENU*/

  $scope.toggleMenu = function($event,strMenuName){
      var symbolDown="&#9661;";
      var symbolUp="&#9651;";
    var element = angular.element($event.target);

    if ($scope.page['showMenu'+strMenuName]==false){
        $scope.page['showMenu'+strMenuName]=true
        element[0].getElementsByClassName("collapsible")[0].innerHTML=symbolUp
    }else{
        $scope.page['showMenu'+strMenuName]=false
        element[0].getElementsByClassName("collapsible")[0].innerHTML=symbolDown        
    }

    console.log($scope.page)
    
  };          
          /*TOGGLEMENU END*/          
          /* USER ACTION */
          $scope.userAction = function(strCmdGrp, strCmd, strRef, objRef) {
            switch (strCmdGrp) {
              case "nav":
                break;
              case "user":
                User.userAction(strCmd, strRef, objRef);
                break;
              case "org":
                Organization.userAction(strCmd, strRef, objRef);
                break;
            } /* CmdGrp Switch*/
          };
          /* USER ACTION END */
          /* onAuthStateChanged BEGIN */
          var reloadUserInfo = function(objAuthUser) {
            //console.log('handleAuthStateChange1',objAuthUser);
            if (objAuthUser != null) {
              console.log(888)
              User.reloadUserInfo();
              $scope.$apply();
            } else {
              User.setLocalUserInfo(null);
              PageGuard.switchPage($scope.app.defaults.pages.guestPage, true, true, true);
            }
          }
          $firebaseAuth().$onAuthStateChanged(function(objAuthUser) {
            //console.log(objAuthUser)
            reloadUserInfo(objAuthUser);
          });
          /* onAuthStateChanged END */
          /* PAGE EVENTS */
          $scope.$on("$ionicView.beforeEnter", function() {
            /* DETERMINE THAT USER HAS SIGNED IN PREVIOUSLY */
            var checkUserInfo = function() {
              if ($scope.app.user.userInfo != null) {
                //stay here                
              } else {
                //switch Page
                PageGuard.switchPage(
                  $scope.app.defaults.pages.guestPage,
                  true, true, true);
              }
            }
            checkUserInfo();
            /* DETERMINE THAT USER HAS SIGNED IN PREVIOUSLY END*/
          });
          /* PAGE EVENTS END */
        }])
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.test=function(){
    alert(5)
}
}])
 