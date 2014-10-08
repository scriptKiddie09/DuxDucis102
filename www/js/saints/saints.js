angular.module('saints.controllers', [])

.controller('SaintListCtrl',function($scope,localStorageService,SaintsSrv){
	SaintsSrv.getSaintsList().then(function(saints){
		$scope.saints = saints;
		console.log(saints)
	})

	$scope.modeClass = localStorageService.get('class');
})

.controller('SaintInfoCtrl',function($scope,$stateParams,localStorageService,SaintsSrv){
	$scope.saint = SaintsSrv.getSaintInfo($stateParams.saintId);
	console.log($scope.saint);
	$scope.modeClass = localStorageService.get('class');
})