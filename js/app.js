$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	//alert("1");
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"),model);
   	//var exampleViewController = new ExampleViewController(exampleView,model);
   	var selectDishView = new SelectDishView($('#page-content'), model);
   	var selectDishViewController = new SelectDishViewController(selectDishView, model);
   	var dishView = new DishView($('#dish-page-content'), model);
   	var dishViewController = new DishViewController(dishView, model);
});