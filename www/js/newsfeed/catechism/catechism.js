angular.module('catechism.controllers', [])

.controller('CatechismListCtrl',function($scope,$cordovaNetwork,CatechismSrv,localStorageService){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

	if(isOnline == true){
			localStorageService.remove('catechism');
			CatechismSrv.getCatechismList().then(function(item){
				localStorageService.set('catechism',item)
				$scope.catechism = item;
				console.log($scope.catechism);
			})
		}else if(isOffline == true){
			$scope.catechism = localStorageService.get('catechism');
			console.log($scope.catechism);
		}else{
			$scope.catechism = localStorageService.get('catechism');
			console.log($scope.catechism);
		};
})


.controller('CatechismItemCtrl',function($scope,$stateParams,$cordovaNetwork,CatechismSrv,localStorageService){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

	var	catechism = localStorageService.get('catechism');
	if(isOnline == true){
		$scope.catechism = CatechismSrv.getCatechismItem($stateParams.cateId);
		console.log($scope.catechism);
	}else if (isOffline == true){
		$scope.catechism = catechism[$stateParams.cateId];
		console.log($scope.catechism)
	}else{
		$scope.catechism = catechism[$stateParams.cateId];
		console.log($scope.catechism)
	};
})