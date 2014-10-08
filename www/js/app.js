// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova', 

  'starter.controllers',
  'prayers.controllers',
  'saints.controllers',
  'bible.controllers',
  'dailybread.controllers',
  'diocese.controllers',
  'songs.controllers',
  'announcements.controllers',
  'presidentsmessage.controllers',
  'catechism.controllers',
  'presidentsmessage.services',
  'catechism.services',
  'announcements.services',
  'dailybread.services',
  'saints.services',
  'prayers.services',
  'starter.services',
  'bible.services',
  'diocese.services',
  'songs.services',
  'LocalStorageModule'




  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })


    .state('tab.prayer-category',{
      url:'/prayer-list',
      views:{
        'tab-dash':{
          templateUrl:'templates/prayers/prayer-category.html'
        }
      }
    })


    .state('tab.daily-living',{
      url:'/daily-living',
      views:{
        'tab-dash':{
          templateUrl:'templates/prayers/daily-living.html',
          controller:'PrayerListCtrl'
        }
      }
    })

    .state('tab.daily-prayers',{
      url:'/daily-living/:prayerId',
      views:{
        'tab-dash':{
          templateUrl:'templates/prayers/prayer.html',
          controller:'PrayerCtrl'
        }
      }
    })

    .state('tab.special-prayers',{
      url:'/special-prayers',
      views:{
        'tab-dash':{
          templateUrl:'templates/prayers/special-prayers.html',
          controller:'PrayerListCtrl'
        }
      }
    })

    .state('tab.prayers-to-saints',{
      url:'/prayers-to-saint',
      views:{
        'tab-dash':{
          templateUrl:'templates/prayers/prayers-to-saint.html',
          controller:'PrayerListCtrl'
        }
      }
    })

     .state('tab.devotional-prayers',{
      url:'/devotional-prayers',
      views:{
        'tab-dash':{
          templateUrl:'templates/prayers/devotional-prayers.html',
          controller:'PrayerListCtrl'
        }
      }
    })

     .state('tab.rosary',{
      url:'/rosary',
      views:{
        'tab-dash':{
          templateUrl:'templates/prayers/rosary.html',
          
        }
      }
    })



    .state('tab.saints',{
      url:'/saints',
      views:{
        'tab-dash':{
          templateUrl:'templates/saints/saints-list.html',
          controller:'SaintListCtrl'
        }
      }
    })

     .state('tab.saint-info',{
      url:'/saints/:saintId',
      views:{
        'tab-dash':{
          templateUrl:'templates/saints/saint-info.html',
          controller:'SaintInfoCtrl'
        }
      }
    })



    
    .state('tab.daily-bread',{
      url:'/daily-bread',
      views:{
        'tab-dash':{
          templateUrl:'templates/dailybread/daily-bread.html'
        }
      }
    })

    .state('tab.votd',{
      url:'/votd',
      views:{
        'tab-dash':{
          templateUrl:'templates/dailybread/votd.html',
          controller:'VotdCtrl'
        }
      }
    })

    .state('tab.random-verse',{
      url:'/random-verse',
      views:{
        'tab-dash':{
            templateUrl:'templates/dailybread/random-verse.html',
            controller:'RandomVerseCtrl'
        }
      }
    })

    .state('tab.daily-readings',{
      url:'/daily-readings',
      views:{
        'tab-dash':{
          templateUrl:'templates/dailybread/daily-readings.html',
          controller:'DailyReadingsCtrl'
        }
      }
    })

    .state('tab.first-reading',{
      url:'/first-reading',
      views:{
        'tab-dash':{
          templateUrl:'templates/dailybread/first-reading.html',
          controller:'FirstReadingCtrl'
        }
      }
    })

    .state('tab.psalm',{
      url:'/psalm',
      views:{
        'tab-dash':{
          templateUrl:'templates/dailybread/psalm.html',
          controller:'PsalmCtrl'
        }
      }
    })

    .state('tab.gospel',{
      url:'/gospel',
      views:{
        'tab-dash':{
          templateUrl:'templates/dailybread/gospel.html',
          controller:'GospelCtrl'
        }
      }
    })


    .state('tab.dophome',{
      url:'/dophome',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/dop-home.html',
          controller:'DioceseCtrl'
        }
      }
    })

    .state('tab.about-diocese',{
      url:'/about-diocese',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/about-diocese.html',
          controller:'AboutCtrl'
        }
      }
    })


    .state('tab.vicariates',{
      url:'/vicariates',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/vicariates.html'
        }
      }
    })

    .state('tab.immaculate',{
      url:'/immaculate',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/immaculate.html',
          controller:'VicarListCtrl'
        }
      }
    })

    .state('tab.immaculate-church',{
      url:'/immaculate/:churchId',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/church-info.html',
          controller:'ChurchInfoCtrl'
        }
      }
    })

    .state('tab.stdv',{
      url:'/stdv',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/stdv.html',
          controller:'VicarListCtrl'
        }
      }
    })

    .state('tab.nino',{
      url:'/nino',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/nino.html',
          controller:'VicarListCtrl'
        }
      }
    })
    
    .state('tab.anne',{
      url:'/anne',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/anne.html',
          controller:'VicarListCtrl'
        }
      }
    })

  
    .state('tab.dop-contact',{
      url:'/dop-contact',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/contact.html',
          controller:'ContactListCtrl'
        }
      }
    })


    .state('tab.dop-newsfeed',{
      url:'/dop-newsfeed',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/dop-newsfeed.html',
          controller:'DopNewsFeedCtrl'
        }
      }
    })

    .state('tab.feed-info',{
      url:'/dop-newsfeed/:feedId',
      views:{
        'tab-dash':{
          templateUrl:'templates/diocese/feed-info.html',
          controller:'FeedInfoCtrl'
        }
      }
    })


    .state('tab.worship-songs',{
      url:'/worship-songs',
      views:{
        'tab-dash':{
          templateUrl:'templates/worship-songs/song-list.html'
        }
      }
    })


    .state('tab.englishsongs',{
      url:'/englishsongs',
      views:{
        'tab-dash':{
          templateUrl:'templates/worship-songs/english.html',
           controller:'SongListCtrl'
        }
      }
    })

    .state('tab.song',{
      url:'/worship-songs/:songId',
      views:{
        'tab-dash':{
          templateUrl:'templates/worship-songs/song.html',
          controller:'SongCtrl'
        }
      }
    })

    .state('tab.newsfeed', {
      url: '/newsfeed',
      views: {
        'tab-newsfeed': {
          templateUrl: 'templates/tab-newsfeed.html',
          controller:'NewsFeedCtrl'
        }
      }
    })

    .state('tab.announcement',{
      url:'/announcement',
      views:{
        'tab-newsfeed':{
          templateUrl:'templates/announcements/announcements-list.html',
          controller:'AnnouncementListCtrl'
        }
      }
    })

    .state('tab.announcement-item',{
      url:'/announcements/:itemId',
      views:{
        'tab-newsfeed':{
          templateUrl:'templates/announcements/announcement-item.html',
          controller:'AnnounceItemCtrl'
        }
      }
    })

    .state('tab.catechism',{
      url:'/catechism',
      views:{
        'tab-newsfeed':{
          templateUrl:'templates/catechism/catechism-list.html',
          controller:'CatechismListCtrl'
        }
      }
    })

    .state('tab.catechism-item',{
      url:'/catechism/:cateId',
      views:{
        'tab-newsfeed':{
          templateUrl:'templates/catechism/catechism-item.html',
          controller:'CatechismItemCtrl'
        }
      }
    })
  

    .state('tab.presidentsmessage',{
      url:'/presidentsmessage',
      views:{
        'tab-newsfeed':{
          templateUrl:'templates/presidentsmessage/message-list.html',
          controller:'PresidentsMessageCtlr'
        }
      }
    })

    .state('tab.presidentsmessage-item',{
      url:'/presidentsmessage/:messageId',
      views:{
        'tab-newsfeed':{
          templateUrl:'templates/presidentsmessage/message-item.html',
          controller:'PresidentsMessageItemCtlr'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

