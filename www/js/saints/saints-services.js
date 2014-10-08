angular.module('saints.services', [])

.factory('SaintsSrv',function($http){
	var saints = [];

	return{
		getSaintsList:function(){
				return $http.get('js/saints/saints.json').then(function(response){
				saints = response.data.saint_collection;
				return saints;
			})
		},

		getSaintInfo:function(saintId){
			return saints[saintId];
		}
	}
})