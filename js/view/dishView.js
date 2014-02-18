var DishView = function(container, model){
	
	model.addObserver(this);
	this.selected_dish_description = container.find("#selected_dish_description");
	this.dishName = container.find('#dishName');
	this.ingredients = container.find('#ingredients');
	this.dishPic = container.find('#dishPic');
	this.chooseDishBtn = container.find('#chooseDishBtn');
	this.backBtn = container.find('#backBtn');
	this.ingredientsHeader = container.find("#ingredientsHeader");

	fillDescription();

	function fillDescription(){
		this.dishName.innerHTML = model.getDish(1).name;
		this.selected_dish_description.innerHTML = model.getDish(1).description;
		this.dishPic.src = "images/"+model.getDish(1).image;

		var ingredientString = "";
		var allIngredients = model.getAllIngredients();
		for (var i = 0; i < allIngredients.length; i++) {
			var ingr = allIngredients[i];
			ingredientString += ingr.quantity*model.getNumberOfGuests() +" "+ingr.unit+" "+ingr.name;
			ingredientString += "<br>";
		};
		this.ingredients.innerHTML = ingredientString;
		this.ingredientsHeader.innerHTML = "Ingredients for: " + model.getNumberOfGuests() + " people";
	}
}

