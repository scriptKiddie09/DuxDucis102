angular.module('presidentsmessage.controllers', [])

.controller('PresidentsMessageCtlr',function($scope,$cordovaNetwork,PresidentsMessageSrv,localStorageService){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

		if(isOnline == true){
				localStorageService.remove('messages');
				PresidentsMessageSrv.getMessageList().then(function(item){
				localStorageService.set('messages',item)
				$scope.messages = item;
				console.log($scope.messages);
			})
		}else if(isOffline == true){
			$scope.messages= localStorageService.get('messages');
			console.log($scope.messages);
		}else{
			$scope.messages= localStorageService.get('messages');
			console.log($scope.messages);
		}
})

.controller('PresidentsMessageItemCtlr',function($scope,$stateParams,$cordovaNetwork,PresidentsMessageSrv,localStorageService){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

	var	messages = localStorageService.get('messages');

	if(isOnline == true){
		$scope.message = PresidentsMessageSrv.getMessageItem($stateParams.messageId);
		console.log($scope.message);
	}else if(isOffline == true){
		$scope.message = messages[$stateParams.messageId];
		console.log($scope.message);
	}else{
		$scope.message = messages[$stateParams.messageId];
		console.log($scope.message);
	}
})