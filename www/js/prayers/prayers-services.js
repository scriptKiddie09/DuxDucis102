angular.module('prayers.services', [])

.factory('DailyLivingSrv',function($http){
  var prayers = [];

  return{
     getPrayerList:function(){
        return $http.get('js/prayers/prayer.json').then(function(response){
          prayers = response.data.prayer_collection;
          return prayers;
        })
     },

     getPrayer:function(prayerId){
 		     return prayers[prayerId]    
     }
  }

})
