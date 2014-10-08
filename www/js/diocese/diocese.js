angular.module('diocese.controllers', [])

.controller('DioceseCtrl',function($scope, $ionicPopover){
  $ionicPopover.fromTemplateUrl('templates/diocese/popover.html', function(popover) {
    $scope.popover = popover;
  });
})

.controller('VicarListCtrl',function($scope, DioceseSrv){
	DioceseSrv.getVicarList().then(function(vicar){
		$scope.vicariates = vicar;
	})
})


.controller('ChurchInfoCtrl',function($scope,$stateParams,DioceseSrv){
	$scope.church = DioceseSrv.getChurchInfo($stateParams.churchId)
})


.controller('AboutCtrl',function($scope,$ionicPopup){
	$scope.showAlert = function(){
		var alertPopup = $ionicPopup.alert({
			title:'Obispo Francisco San Diego',
			template:'<img src="img/diocese/francisco.png" class="full-image">'
		})
	}

	$scope.mylo = function(){
		var alertPopup = $ionicPopup.alert({
			title:'Obispo Mylo Hubert Vergara',
			template:'<img src="img/diocese/hubert.png" class="full-image">'
		})
	}
})


.controller('ContactListCtrl',function($scope,ContactSrv){
	ContactSrv.getContactList().then(function(contacts){
		$scope.contacts = contacts;
	})
})

.controller('DopNewsFeedCtrl',function($scope,DopNewsFeedSrv){
	DopNewsFeedSrv.getFeedList().then(function(feed){
		$scope.feeds = feed;
	})
})


.controller('FeedInfoCtrl',function($scope,$stateParams,DopNewsFeedSrv){
	$scope.feed = DopNewsFeedSrv.getFeedInfo($stateParams.feedId);
	console.log($scope.feed)
})