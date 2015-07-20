angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('EventsController', function($http, $scope) {

  $scope.init = function() {
    $http.get("http://ajax.googleapis.com/ajax/services/feed/load", {
        params: {
          "v": "1.0",
          "q": "http://attachmentnetwork.ca/events/feed/"
        }
      })
      .success(function(data) {
        $scope.rssTitle = data.responseData.feed.title;
        $scope.rssUrl = data.responseData.feed.feedUrl;
        $scope.rssSiteUrl = data.responseData.feed.link;
        $scope.entries = data.responseData.feed.entries;
      })
      .error(function(data) {
        console.log("ERROR: " + data);
      });
  }

  $scope.init();

})


.controller('NewsController', function($http, $scope) {

  $scope.init = function() {
    $http.get("http://ajax.googleapis.com/ajax/services/feed/load", {
        params: {
          "v": "1.0",
          "q": "http://attachmentnetwork.ca/feed/"
        }
      })
      .success(function(data) {
        $scope.rssTitle = data.responseData.feed.title;
        $scope.rssUrl = data.responseData.feed.feedUrl;
        $scope.rssSiteUrl = data.responseData.feed.link;
        $scope.entries = data.responseData.feed.entries;
      })
      .error(function(data) {
        console.log("ERROR: " + data);
      });
  }

  $scope.init();

})

.controller('ShopController', function($http, $scope) {

  $scope.init = function() {
    $http.get("http://ajax.googleapis.com/ajax/services/feed/load", {
        params: {
          "v": "1.0",
          "q": "http://attachmentnetwork.ca/shop/feed/"
        }
      })
      .success(function(data) {
        $scope.rssTitle = data.responseData.feed.title;
        $scope.rssUrl = data.responseData.feed.feedUrl;
        $scope.rssSiteUrl = data.responseData.feed.link;
        $scope.entries = data.responseData.feed.entries;
      })
      .error(function(data) {
        console.log("ERROR: " + data);
      });
  }

  $scope.init();

})


.controller('PlaylistCtrl', function($scope, $stateParams) {});
