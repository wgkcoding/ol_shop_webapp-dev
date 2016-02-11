var models = require('../models');
var express = require('express');
var router = express.Router();

//get all orders
router.get('/',function(req,res){
	models.Orders.findAll().then(function(orders){
		res.json({
			orders:orders
		});
	});
});

//get a single order by id
router.get('/:orderId',function(req,res){
	var where = {where:{id:req.params.orderId}};
	models.Orders.find(where).then(function(orders){
		res.json({
			order:order
		});
	});
});

//add a new order
router.post('/',function(req,res){
	var order = req.body;
	models.Orders.create(order).then(function(order){
		res.json({
			order:order
		});
	});
});

//update a new order by id
router.put('/:orderId',function(req,res){
	var where = {where:{id:req.params.orderId}};
	var __order = req.body;
	models.Orders.find(where).then(function(order){
		order.updateAttributes({
	      cart:__order.name,
	      total:__order.image,
	      tax:__order.description,
	      final_total:__order.category,
	    });

	    __order.id = req.params.orderId;
    	res.json({
			order:__order
		});
	});

});


//delete an order
router.delete('/:orderId',function(req,res){
	var where = {where:{id:req.params.orderId}}
	models.Orders.find(where).then(function(order){
		order.destroy();
		res.json({
			deleted:true
		});	
	});
});

module.exports = router;

