angular.module('prayers.controllers', [])

.controller('PrayerListCtrl',function($scope,DailyLivingSrv,localStorageService){
	DailyLivingSrv.getPrayerList().then(function(prayers){
		$scope.prayers = prayers;
		console.log($scope.prayers);	
	})

	$scope.modeClass = localStorageService.get('class');
})

.controller('PrayerCtrl',function($scope,$stateParams,localStorageService,DailyLivingSrv){

	$scope.modeClass = localStorageService.get('class');
	$scope.prayer = DailyLivingSrv.getPrayer($stateParams.prayerId);
	console.log($scope.prayer);
})