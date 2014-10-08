angular.module('diocese.services', [])


.factory('DioceseSrv',function($http){
	var vicariates = [];

	return {

			getVicarList: function(){
				return $http.get('js/diocese/vicariates.json').then(function(response){
					vicariates = response.data.vicariate_collection;
					return vicariates;
				})
			
			},

			getChurchInfo:function(churchId){
				return vicariates[churchId];
			}

	}
})


.factory('ContactSrv',function($http){
	var contacts = [];

	return{

		getContactList:function(){
				return $http.get('js/diocese/contact.json').then(function(response){
				contacts = response.data.contact_collection;
				return contacts;
			})
		}
	}
})

.factory('DopNewsFeedSrv',function($http){
	
	var feeds = [];

	return {
		getFeedList:function(){
			return $http.get('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://dioceseofpasig.org/feed/').then(function(response){
				feeds = response.data.responseData.feed.entries;
				return feeds;
			})
		
		},

		getFeedInfo:function(feedId){
			return feeds[feedId];
		}
	}
})