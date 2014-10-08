angular.module('announcements.services', [])

.factory('AnnouncementSrv',function($http){
	var announcements = [];
	var baseUrl = 'http://192.168.1.2/wordpress/api/';
	return {
		getAnnouncements: function(){
			return $http.get('http://192.168.1.3/wordpress/api/get_category_posts/?slug=announcements').then(function(response){
				announcements = response.data.posts;
				return announcements;
			})
		},

		getAnnouncementItem: function(itemId){
			return announcements[itemId];
		}


	}
})