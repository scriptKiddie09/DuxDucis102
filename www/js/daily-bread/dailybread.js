angular.module('dailybread.controllers', [])

.controller('VotdCtrl',function($scope,DailyBreadSrv,localStorageService, $cordovaNetwork){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

	if(isOnline == true){
		DailyBreadSrv.getVotd().then(function(verse){
			localStorageService.set('votd', verse.votd);
			$scope.votd = verse.votd;
		})
	}else if(isOffline == true){
		$scope.votd = localStorageService.get('votd');	
	}else{
		$scope.votd = localStorageService.get('votd');
	}
	$scope.modeClass = localStorageService.get('class');
})


.controller('RandomVerseCtrl',function($scope,$timeout,DailyBreadSrv,localStorageService,$cordovaNetwork){
	
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

	if(isOnline == true){
		localStorageService.remove('randomverse');

			DailyBreadSrv.getRandomVerse().then(function(randomverse){
				localStorageService.set('randomverse', randomverse);
				$scope.randomverse = randomverse;
			
			
		})
	}else if(isOffline == true){
			$scope.randomverse = localStorageService.get('randomverse');
			console.log('sucess');
			console.log($scope.randomverse);
	}else{
		$scope.randomverse = localStorageService.get('randomverse');
		console.log('sucess');
		console.log($scope.randomverse);
	}

	$scope.modeClass = localStorageService.get('class');		
	
})	


.controller('DailyReadingsCtrl',function($scope, DailyBreadSrv, localStorageService,$cordovaNetwork){

	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();


	if(isOnline == true){
		DailyBreadSrv.getLiturgicalTitle().then(function(litTitle){
			localStorageService.remove('litTitle');
			localStorageService.set('litTitle', litTitle);
			console.log('Liturgical_Title Displayed');
			$scope.litTitle = localStorageService.get('litTitle');
			console.log($scope.litTitle);
		})
	}else if(isOffline == true){
		$scope.litTitle = localStorageService.get('litTitle');
		console.log($scope.litTitle);
	}else{
		$scope.litTitle = localStorageService.get('litTitle');
		console.log($scope.litTitle);
	};
	

	$scope.modeClass = localStorageService.get('class');
})

.controller('FirstReadingCtrl',function($scope, DailyBreadSrv, localStorageService,$cordovaNetwork){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

	if(isOnline == true){
		DailyBreadSrv.getFirstReadingTitle().then(function(frt){
			localStorageService.set('frt', frt);
			$scope.firstReadingTitle = frt;
			console.log($scope.firstReadingTitle);
		})

		DailyBreadSrv.getFirstReading().then(function(fr){
			localStorageService.set('fr', fr);
			$scope.firstReading = fr;
			console.log($scope.firstReading);
		})
	}else if(isOffline == true){
		$scope.firstReadingTitle = localStorageService.get('frt');
		$scope.firstReading = localStorageService.get('fr');

		console.log($scope.firstReadingTitle);
		console.log($scope.firstReading);
	}else{
		$scope.firstReadingTitle = localStorageService.get('frt');
		$scope.firstReading = localStorageService.get('fr');

		console.log($scope.firstReadingTitle);
		console.log($scope.firstReading);
	};

	$scope.modeClass = localStorageService.get('class');
})


.controller('PsalmCtrl',function($scope,DailyBreadSrv,localStorageService,$cordovaNetwork){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();

	if(isOnline == true){
		localStorageService.remove('pst');
		localStorageService.remove('ps');

		DailyBreadSrv.getPsalmTitle().then(function(pst){
			localStorageService.set('pst', pst);
			$scope.psalmTitle = pst;
			console.log($scope.psalmTitle);
		});

		DailyBreadSrv.getPsalm().then(function(ps){
			localStorageService.set('ps', ps);
			$scope.psalm = ps;
			console.log($scope.psalm)
		})
	}else if(isOffline == true){
		$scope.psalmTitle  = localStorageService.get('pst');
		$scope.psalm = localStorageService.get('ps');
	}else{
		$scope.psalmTitle  = localStorageService.get('pst');
		$scope.psalm = localStorageService.get('ps');	
	};
	$scope.modeClass = localStorageService.get('class');
}) 

.controller('GospelCtrl',function($scope,DailyBreadSrv,localStorageService,$cordovaNetwork){
	var isOnline = $cordovaNetwork.isOnline();
	var isOffline = $cordovaNetwork.isOffline();
	if(isOnline == true){
		localStorageService.remove('gst');
		localStorageService.remove('gspl');

		DailyBreadSrv.getGospelTitle().then(function(gst){
			localStorageService.set('gst', gst);
			$scope.gospelTitle = gst;
			console.log($scope.gospelTitle);
		});

		DailyBreadSrv.getGospelReading().then(function(gspl){
			localStorageService.set('gspl', gspl);
			$scope.gospel = gspl.replace(/(\r\n|\n|\r)/gm,"");
			console.log($scope.gospel);
		});
	}else if(isOffline == true){
		$scope.gospelTitle = localStorageService.get('gst');
		$scope.gospel = localStorageService.get('gspl').replace(/(\r\n|\n|\r)/gm,"");
		console.log($scope.gospelTitle);
		console.log($scope.gospel);
	}else{
		$scope.gospelTitle = localStorageService.get('gst');
		$scope.gospel = localStorageService.get('gspl').replace(/(\r\n|\n|\r)/gm,"");
		console.log($scope.gospelTitle);
		console.log($scope.gospel);	
	};
	$scope.modeClass = localStorageService.get('class');
})