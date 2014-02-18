var SelectDishView = function(container, model){
	
	model.addObserver(this);
	this.numPersons = container.find('#numPersons');
	this.searchBtn = container.find('#searchBtn');
	this.searchField = container.find('#searchField');
	this.dishChooser = container.find('#dishChooser');
	this.numberGuests = container.find('#numberGuests');
	this.foodContainer = container.find('#foodContainer');

	this.populate_main_content = function() {
		this.foodContainer.children().remove();

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
			dishContainer.appendChild(dishImage);
			dishContainer.appendChild(dishName);
			this.foodContainer.append(dishContainer);
		};
	}

	this.update = function(arg){
		if (arg == "price"){
			update_total_cost();
		}
		else{
			update_total_cost();
			this.populate_main_content();
		}

	}

	function update_total_cost(){
		$("#total-cost").html("SEK " + model.getTotalMenuPrice());
	}
}
