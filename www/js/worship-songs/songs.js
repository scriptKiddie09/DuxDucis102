angular.module('songs.controllers', [])

.controller('SongCtrl',function($scope,$stateParams,$ionicPlatform,$cordovaMedia,SongsSrv){
	$ionicPlatform.ready(function(){
		//initializing media object
		var media = null;
		
		$scope.playMedia = function(url){
			if (media == null){
				//avoiding to create multiple instance
				var mediaSource = $cordovaMedia.newMedia(url);
				var mediaStatus = mediaSource.mediaStatus;
				media = mediaSource.media;
				$cordovaMedia.play(media);
				$scope.isStreaming = true;
				
			}
			 //manipulate play button
			$scope.isPlaying = true;
			 	
		};


		$scope.pauseMedia = function(){
			//stoping if media is being played
			if(media){
				$cordovaMedia.pause(media);
				$scope.isStreaming = false;
				media = null;
			}
			$scope.isPlaying = false;
			console.log($scope.isPlaying);
		};

		$scope.song = SongsSrv.getSong($stateParams.songId);
	
	})



})

.controller('SongListCtrl',function($scope,SongsSrv){
	SongsSrv.getSongList().then(function(songs){
		$scope.songs = songs;
		console.log(songs);
	})
	
})

