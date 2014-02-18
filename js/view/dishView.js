var DishView = function(container, model){
	
	model.addObserver(this);
	this.chooseDishBtn = container.find('#chooseDishBtn');

}