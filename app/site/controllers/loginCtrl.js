app.controller('loginCtrl',loginCtrl);

function loginCtrl(productSrv, $state, api) {
	console.log("Login control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
//	ctrl.products = products;
	ctrl.api = api;

	ctrl.password;
	ctrl.user;

	ctrl.auth_btn = 'Continue';

	if(localStorage.authToken){
		ctrl.$state.go('admin');
	}
}

loginCtrl.prototype.login = function(){
	var ctrl = this;
	console.log(ctrl.user);
	 var payload = {
		email:ctrl.user,
		password:ctrl.password
		}
		console.log(payload);

		ctrl.auth_btn = "Authorizing";
		//make api call
		ctrl.api.request('/users/login',payload,'POST')
		.then(function(res){
			console.log(res);
			console.log('test');
		
		//successfull response
		if(res.status == 200){
	 		ctrl.auth_btn = "Success";
	 		//user exists
	 		console.log(res);
	 		if(res.data.user != null){
 				ctrl.$state.go('admin');
	 		}
	 	}
	 	else{
	 		ctrl.auth_btn = 'Invalid Password';
	 	}
		
	 },function(error){
	 	console.log(error);
	 	ctrl.auth_btn = "Error: Check console";
	});
}

