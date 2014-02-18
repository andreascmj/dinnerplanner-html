var DishView = function(container, model){
	
	model.addObserver(this);
	this.selected_dish_description = container.find("#selected_dish_description");
	this.chooseDishBtn = container.find('#chooseDishBtn');
	this.backBtn = container.find('#backBtn');

	fillDescription();

	function fillDescription(){
		this.selected_dish_description.html(model.getDish(1).description);
	}

}