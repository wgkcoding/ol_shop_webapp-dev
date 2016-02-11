app.controller('loginCtrl',loginCtrl);

function loginCtrl(productSrv, $state, api) {
	console.log("Login control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
//	ctrl.products = products;
	ctrl.api = api;

	ctrl.password= null;
	ctrl.user= null;

	ctrl.auth_btn = 'Continue';

//	if(localStorage.authToken){
//		ctrl.$state.go('admin');
	}



loginCtrl.prototype.login = function(){
	var ctrl = this;
	ctrl.$state.go('admin');
	// var payload = {
	// 	email:ctrl.email,
	// 	password:ctrl.password
	// }
	// ctrl.auth_btn = "Authorizing";
	// //make api call
	// ctrl.api.request('/users/login',payload,'POST')
	// .then(function(res){
	// 	console.log(res);
	// 	//successfull response
	// 	if(res.status == 200){
	// 		ctrl.auth_btn = "Success";
	// 		//user exists
	// 		if(res.data.user != null){
	// 			ctrl.$state.go('admin');
	// 		}
	// 	}
	// 	else{
	// 		ctrl.auth_btn = 'Invalid Password';
	// 	}
		
	// },function(){
	// 	//error
	// 	console.log(res);
	// 	ctrl.auth_btn = "Error: Check console";
	// })
}
