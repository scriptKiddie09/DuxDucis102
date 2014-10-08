angular.module('songs.services', [])


.factory('SongsSrv',function($http){
	var songs = [];

	return{
		getSongList:function(){
				return $http.get('js/worship-songs/songs.json').then(function(response){
				songs = response.data.song_collections;
				return songs;
			})
		},

		getSong:function(songId){
			return songs[songId];
		}
	}
})


