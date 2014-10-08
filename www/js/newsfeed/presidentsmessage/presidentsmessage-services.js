angular.module('presidentsmessage.services', [])
.factory('PresidentsMessageSrv',function($http){
	var messages = [];
	var baseUrl = 'http://192.168.1.2/wordpress/api/';

	return{
		getMessageList:function(){
			return $http.get('http://192.168.1.3/wordpress/api/get_category_posts/?slug=presidentsmessage').then(function(response){
				message = response.data.posts;
				return message;
			})
		},

		getMessageItem:function(messageId){
			return message[messageId];
		}

	}
})