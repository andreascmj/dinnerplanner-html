var SelectDishView = function(container, model){
	
	model.addObserver(this);
	this.numPersons = container.find('#numPersons');
	this.searchBtn = container.find('#searchBtn');
	this.searchField = container.find('#searchField');
	this.dishChooser = container.find('#dishChooser');
	this.foodContainer = container.find('#foodContainer');
	//alert("view igång");
	populate_main_content();

	function populate_main_content() {
		var dishes = model.getAllDishes("starter");
		for (var i = 0; i<dishes.length; i++) {
			var dishContainer = document.createElement("div");
			dishContainer.class="col-xs-4";
			dishContainer.id=dishes[i].name;
			var dishImage = document.createElement("img");
			dishImage.src="images/" + dishes[i].image;
			var dishName = document.createElement("p");
			dishName.innerHTML=dishes[i].name;
			dishContainer.appendChild(dishName);
			dishContainer.appendChild(dishImage);
			this.foodContainer.appendChild(dishContainer);
		};
	}

	function update(arg){
		update_total_cost();
	}

	function update_total_cost(){
		//$("#total-cost").html=("SEK " + model.getTotalMenuPrice());
	}
}
