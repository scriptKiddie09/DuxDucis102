angular.module('bible.services', [])

.factory('BibleApplicationSrv',function($ionicPlatform){

	return{
		openApplication:function(application){
			navigator.startApp.start(application, function(message) { /* success */
   				 console.log(message); // => OK
			}, 
			function(error) { /* error */
    			console.log('47', error);
			});
		}
	}
})