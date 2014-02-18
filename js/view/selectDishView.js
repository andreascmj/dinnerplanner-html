var SelectedDishView = function(container, model){
	
	model.addObserver(this);
	this.numPersons = container.find('#numPersons');
	this.searchBtn = container.find('#searchBtn');
	this.searchField = container.find('#searchField');
	alert("view igång");

	function update(arg){
		update_total_cost();
	}

	function update_total_cost(){
		$("#total-cost").html=("SEK " + model.getTotalMenuPrice());
	}
}
