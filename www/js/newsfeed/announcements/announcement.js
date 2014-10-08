angular.module('announcements.controllers', [])


.controller('AnnouncementListCtrl',function($scope,$cordovaNetwork, AnnouncementSrv, localStorageService){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();
		
		if(isOnline == true){
			AnnouncementSrv.getAnnouncements().then(function(item){
				localStorageService.set('announcements',item)
				$scope.announcements = item;
			})
		}else if(isOffline == true){
			$scope.announcements = localStorageService.get('announcements');
			console.log($scope.announcements);
		}else{
			$scope.announcements = localStorageService.get('announcements');
			console.log($scope.announcements);
		}

})

.controller('AnnounceItemCtrl',function($scope,$stateParams,$cordovaNetwork,localStorageService,AnnouncementSrv){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

	var	announcement = localStorageService.get('announcements');
	if(isOnline == true){
		$scope.announcement = AnnouncementSrv.getAnnouncementItem($stateParams.itemId);
		console.log($scope.announcement);
	}else if(isOffline == true){
		$scope.announcement = announcement[$stateParams.itemId];
		console.log($scope.announcement)
	}else{	
		$scope.announcement = announcement[$stateParams.itemId];
		console.log($scope.announcement)
	}	

})