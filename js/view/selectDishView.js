var SelectDishView = function(container, model){
	
	model.addObserver(this);
	this.numPersons = container.find('#numPersons');
	this.searchBtn = container.find('#searchBtn');
	this.searchField = container.find('#searchField');
	this.dishChooser = container.find('#dishChooser');
	this.foodContainer = container.find('#foodContainer');

	this.populate_main_content = function() {

		var dishType = this.dishChooser.val().toLowerCase();

		var dishes = model.getAllDishes(dishType);
		for (var i = 0; i<dishes.length; i++) {
			var dishContainer = document.createElement("div");
			dishContainer.className="col-xs-4";
			dishContainer.id=dishes[i].name;
			var dishImage = document.createElement("img");
			dishImage.src="images/" + dishes[i].image;
			var dishName = document.createElement("p");
			dishName.innerHTML=dishes[i].name;
			dishContainer.appendChild(dishName);
			dishContainer.appendChild(dishImage);
			this.foodContainer.append(dishContainer);
		};
	}

	function update(arg){
		update_total_cost();
		populate_main_content();

	}

	function update_total_cost(){
		//$("#total-cost").html=("SEK " + model.getTotalMenuPrice());
	}
}
