angular.module('catechism.services', [])

.factory('CatechismSrv',function($http){
	var catechism = [];
	var baseUrl = 'http://192.168.1.2/wordpress/api/';

	return{
		getCatechismList:function(){
			return $http.get('http://192.168.1.3/wordpress/api/get_category_posts/?slug=catechism').then(function(response){
				catechism = response.data.posts;
				return catechism;
			})
		},

		getCatechismItem:function(catecId){
			return catechism[catecId];
		}
	}
})