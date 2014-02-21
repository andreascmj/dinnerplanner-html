$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	//alert("1");
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"),model);
   	//var exampleViewController = new ExampleViewController(exampleView,model);
   	var preparationView = new PreparationView($('#preparation-page-content'), model);
   	var preparationViewController = new PreparationViewController(preparationView, model);
});