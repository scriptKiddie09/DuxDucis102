angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicPlatform, $cordovaNetwork, $cordovaToast,localStorageService){
	$ionicPlatform.ready(function(){ /* Platform ready start*/
		$scope.openApplication = function(){
			 navigator.startApp.start("yuku.alkitab.kjv", function(message) { /* success */
    			console.log(message); // => OK
    		 }, 
    		
    		function(error) { /* error */
       			 console.log('47', error);
    		});
		};

    var showMessage = localStorageService.get('showMessage');

    var checkNetwork  = function(){
       if($cordovaNetwork.isOnline() == true){
          localStorageService.set('showMessage', false);
       }else if($cordovaNetwork.isOffline() == true && showMessage == 'false'){
          $cordovaToast.showLongBottom("Please check your network, some features may not work properly");
          localStorageService.set('showMessage', true); 
       }
    };

    checkNetwork();

	})/* Platform ready End*/


})


			


.controller('NewsFeedCtrl', function($scope,$cordovaNetwork,$cordovaToast,localStorageService) {
  var showMessage = localStorageService.get('showMessage');

  var checkNetwork  = function(){
     if($cordovaNetwork.isOnline() == true){
        localStorageService.set('showMessage', false);
     }else if($cordovaNetwork.isOffline() == true && showMessage == 'false'){
        $cordovaToast.showLongBottom("Please check your network, some features may not work properly");
        localStorageService.set('showMessage', true); 
     }
  };

  checkNetwork();
})


.controller('AccountCtrl', function($scope,$timeout, $cordovaNetwork,$cordovaToast,localStorageService) {
 
  var init = function(){
    var size = localStorageService.get('size');
    $scope.font = {size:size};
  }
  init();
  

  $timeout(function(){
    $scope.$watch('font.size',function(value){
    localStorageService.set('size',value);
    var size = localStorageService.get('size');
    $scope.font = {size:size};
  
    })
  },1000)
    var style= localStorageService.get('class')
    $scope.customClass ={
      value:style
    };

  $scope.$watch('customClass.value',function(value){
    localStorageService.set('class',value)
    console.log(localStorageService.get('class'))
  })

  
  $scope.style = [
    {text:'Default',value:'default'},
    {text:'Night Mode',value:'nightMode'},
    {text:'Day Mode',value:'dayMode'}
  ]


  var showMessage = localStorageService.get('showMessage');

  var checkNetwork  = function(){
     if($cordovaNetwork.isOnline() == true){
        localStorageService.set('showMessage', false);
     }else if($cordovaNetwork.isOffline() == true && showMessage == 'false'){
        $cordovaToast.showLongBottom("Please check your network, some features may not work properly");
        localStorageService.set('showMessage', true); 
     }
  };

  checkNetwork();



})



