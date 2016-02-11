app.controller('shopCtrl',shopCtrl);

function shopCtrl(productSrv, $state) {
	console.log("Shop control!");
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.productSrv = productSrv;
//	ctrl.products = products;
};