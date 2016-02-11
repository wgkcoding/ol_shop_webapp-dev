'use strict';

var app = angular.module('shopApp',['ui.router',]);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	
  .state('login',{
   url:'/login',
   templateUrl:'site/partials/login.html',
   controller:'loginCtrl as ctrl',
  })
  .state('admin.add_product',{
    url:'/add_product',
    controller:'addProductCtrl as ctrl',
    templateUrl:'site/partials/admin.add-product.html'
  })
  .state('admin',{
    url:'/admin',
    templateUrl:'site/partials/admin.html',
    controller:'adminCtrl as ctrl',
  })
  .state('shop',{
    url:'/shop',
    templateUrl:'site/partials/shop-main.html',
    controller:'shopCtrl as ctrl',
  });

	$httpProvider.interceptors.push(function(){
       return {
           request: function(config) {
               return config;
           },
           response: function(response) {
               var auth_token = response.headers('authentication');
               if(localStorage.authToken == undefined && auth_token != null){
               	localStorage.authToken = auth_token;
               }
               return response;
           }
       }
   });
});
