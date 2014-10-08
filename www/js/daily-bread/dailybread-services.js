angular.module('dailybread.services', [])


.factory('DailyBreadSrv',function($http){
       var currentTime = new Date(); 
       var month = currentTime.getMonth() + 1; 
       var day = currentTime.getDate(); 
       var year = currentTime.getFullYear(); 
       if (day < 10) day = '0'+day; 
       if (month < 10) month = '0'+month; 
       var baseUrl = 'http://feed.evangelizo.org/v2/reader.php?date='+year+month+day;

       return {
          getVotd:function(){
            return $http.get("https://www.biblegateway.com/votd/get/?format=json&version=NIV").then(function(response){
              var votd = response.data;
              return votd;
            })
          },

          getRandomVerse:function(){
            return $http.get("http://labs.bible.org/api/?passage=random&type=json").then(function(response){
              var randomVerse = response.data;
              return randomVerse;
            })
          },

          getLiturgicalTitle:function(){
            return $http.get(baseUrl+'&type=liturgic_t&lang=AM').then(function(response){
              var litTitle = response.data;
              return litTitle;
            })
          },

          getFirstReadingTitle:function(){
            return $http.get(baseUrl+'&type=reading_lt&lang=AM&content=FR').then(function(response){
              return response.data;
            })
          },
          getFirstReading:function(){
            return $http.get(baseUrl+'&type=reading&lang=AM&content=FR').then(function(response){
              return (response.data);
            })
          },

          getPsalmTitle:function(){
            return $http.get(baseUrl+'&type=reading_st&lang=AM&content=PS').then(function(response){
              return (response.data);
            })
          },

          getPsalm:function(){
            return $http.get(baseUrl+'&type=reading&lang=AM&content=PS').then(function(response){
              return (response.data);
            })
          },

          getGospelTitle:function(){
            return $http.get(baseUrl+'&type=reading_lt&lang=AM&content=GSP').then(function(response){
              return (response.data);
            })
          },
          getGospelReading:function(){
            return $http.get(baseUrl+'&type=reading&lang=AM&content=GSP').then(function(response){
              return (response.data);
            })
          }
      }
})
