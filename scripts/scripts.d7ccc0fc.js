"use strict";angular.module("safebikeApp",["ngAnimate","ngAria","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","toastr"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"vm"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"vm"}).when("/register",{templateUrl:"views/register.html",controller:"RegisterCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/login"})}]),angular.module("safebikeApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("safebikeApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("safebikeApp").controller("LoginCtrl",["toastr",function(a){var b=this;b.creadentials={username:"",password:""},b.login=function(){a.error("The provided credentials are invalid","Error")}}]),angular.module("safebikeApp").controller("RegisterCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("safebikeApp").constant("urls",{proxy:"http://localhost",account:{register:"Account/Register",reset:"Account/ResetPassword",change:"Account/ChangePassword",update:"Account/Update",get:"Account/Get"},card:{get:"Card/GetAll",add:"Card/Add","delete":"Card/Delete",update:"Card/Update"},station:{all:"Station/GetAll",available:"Station/GetAvailableBoxes/"},reservation:{all:"Reservation/GetAll",active:"Reservation/GetActive",completed:"Reservation/GetCompleted",add:"Reservation/Add",change_card:"Reservation/ChangeCard",end:"Reservation/End/"}}),angular.module("safebikeApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/login.html",'<section id="login"> <img ng-src="/images/logotype.239280b0.png" alt="Logo" class="logo"> <!-- Login form --> <form name="vm.loginForm" novalidate> <!-- Username input --> <div class="form-group" ng-class="{ \'has-feedback\' : vm.loginForm.username.$touched,\n		\'has-error\' : vm.loginForm.username.$invalid,\n		\'has-success\' : vm.loginForm.username.$valid }"> <label for="username" class="sr-only">Username</label> <input type="email" name="username" class="form-control" placeholder="Username" ng-model="vm.credentials.username" required> <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" ng-if="vm.loginForm.username.$valid && vm.loginForm.username.$touched"></span> <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" ng-if="vm.loginForm.username.$invalid && vm.loginForm.username.$touched"></span> </div> <!-- Password input --> <div class="form-group" ng-class="{ \'has-feedback\' : vm.loginForm.username.$touched,\n		\'has-error\' : vm.loginForm.username.$invalid,\n		\'has-success\' : vm.loginForm.username.$valid }"> <label for="password" class="sr-only"></label> <input type="password" name="password" class="form-control" placeholder="Password" ng-model="vm.credentials.password" required> <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" ng-if="vm.loginForm.password.$valid && vm.loginForm.password.$touched"></span> <span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" ng-if="vm.loginForm.password.$invalid && vm.loginForm.password.$touched"></span> </div> <!-- Submit button --> <button ng-disabled="(vm.loginForm.$invalid || vm.loginForm.$pristine)" class="btn btn-sm btn-black btn-login">Login</button> </form> <!-- Auxiliary controlls --> <div class="row"> <div class="col-md-6 text-left"> <a href="#/register">Register</a> </div> <div class="col-md-6 text-right"> <a href="#/login">Lost password?</a> </div> </div> </section>'),a.put("views/main.html",""),a.put("views/register.html",'<section id="login"> <h2>Register</h2> <form name="form" novalidate> <div class="form-group"> <label for="username">E-mail</label> <input type="email" name="email" class="form-control" placeholder="email@domain.com"> </div> <div class="form-group"> <label for="name">Name</label> <input type="text" name="name" class="form-control" placeholder="Enter your name..."> </div> <div class="form-group"> <label for="username">Telephone number</label> <input type="text" name="phone" class="form-control" placeholder="Enter your phone number..."> </div> <div class="form-group"> <label for="password">Password</label> <input type="password" name="password" class="form-control" placeholder="Enter password for the account..."> </div> <div class="form-group"> <label for="password">Repeat password</label> <input type="password" name="repeatpass" class="form-control" placeholder="Repeat the password...."> </div> <button class="btn btn-sm btn-black btn-login">Login</button> </form> <div class="row"> <div class="col-md-6 text-left"> <a href="#/login">Login</a> </div> </div> </section>')}]);