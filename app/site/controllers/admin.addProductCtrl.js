app.controller('addProductCtrl',addProductCtrl);

function addProductCtrl($stateParams,api,productSrv){
	var ctrl = this
	ctrl.productSrv = productSrv;

	ctrl.categories = [
		{label:'Cat1',value:'cat1'},
		{label:'Cat2',value:'cat2'},
		{label:'Cat3',value:'cat3'},
		{label:'Cat4',value:'cat4'},
		{label:'Cat5',value:'cat5'},
	];
	
	ctrl.product = {};
	ctrl.product_update_btn = 'Update Product';
	ctrl.product_delete_btn = 'Remove Product';
	
	if($stateParams.productId != undefined){
		productSrv.getProduct($stateParams.productId)
		.then(function(res){
			console.log(res);
			ctrl.product = res.data.product;
			//TODO #2 set category based on edit form based on 
			//product category
			
			for(var category in ctrl.categories){
			if(ctrl.product.category == ctrl.category[category].value){

			// 	}
			// }
		})
	}


}
}
}

ProductCtrl.prototype.addProduct = function(){
	var ctrl = this;
	//TODO #2
	//create product object, pass to plugin service
	//Update text in button
	var product = {
		name: ctrl.name,
		description: ctrl.description,
		image: ctrl.image,
		category: ctrl.category,
		price: ctrl.price,
		status: true,
	}

	ctrl.productSrv.addProduct(product);

}

ProductCtrl.prototype.updateProduct = function(){
	var ctrl = this;

	//TODO #2
	//create product object, pass to plugin service
	//Update text in button
	ctrl.product_update_btn = "updating";
	ctrl.productSrv.updateProduct(ctrl.product, ctrl.product.id);
}

ProductCtrl.prototype.deleteProduct = function(){
	var ctrl = this;

	//TODO #2
	//remove product, pass to plugin service
	//update text in button
	ctrl.product.product_delete_btn = "Deleting";
	ctrl.productSrv.deleteProduct(ctrl.product.id);
}
