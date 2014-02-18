var DishView = function(container, model){
	
	model.addObserver(this);
	this.selected_dish_description = container.find("#selected_dish_description");
	this.dishName = container.find('#dishName');
	this.ingredients = container.find('#ingredients');
	this.chooseDishBtn = container.find('#chooseDishBtn');
	this.backBtn = container.find('#backBtn');

	fillDescription();

	function fillDescription(){
		this.dishName.innerHTML = model.getDish(1).name;
		this.selected_dish_description.innerHTML = model.getDish(1).description;

		var ingredientString = "";
		var allIngredients = model.getAllIngredients();
		for (var i = 0; i < allIngredients.length; i++) {
			var ingr = allIngredients[i];
			ingredientString += ingr.quantity+" "+ingr.unit+" "+ingr.name;
			ingredientString += "<br>";
		};
		this.ingredients.innerHTML = ingredientString;
	}
}

