app.controller('adminCtrl',adminCtrl);

function adminCtrl(productSrv, $state) {
	console.log("Admin control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;

//	ctrl.products = products;



	//Login check (later)




	//watch for updates to products object

	// $scope.$watch(function(){
 //    	return productSrv.products;
	// }, function (newValue) {
	// 	if(productSrv.products.length > 0){
	// 	    ctrl.products = productSrv.products;
	// 	    ctrl.is_products = true;
	// 	}
	// });

	ctrl.editProduct = function(product){
	
	ctrl.$state.go('admin.edit_product',{productId:product.id});
	
	}

	ctrl.logout = function(){
	

	localStorage.removeItem('authToken');
	ctrl.$state.go('auth');

	}


}


