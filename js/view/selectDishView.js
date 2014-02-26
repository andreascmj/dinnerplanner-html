var SelectDishView = function(container, model){
	
	model.addObserver(this);
	this.numPersons = container.find('#numPersons');
	this.searchBtn = container.find('#searchBtn');
	this.searchField = container.find('#searchField');
	this.dishChooser = container.find('#dishChooser');
	this.numberGuests = container.find('#numberGuests');
	this.foodContainer = container.find('#foodContainer');
	this.confirmBtn = container.find('#confirm-button');
	this.removeStarter = container.find('#removeStarter');
	this.removeMainDish = container.find('#removeMainDish');
	this.removeDessert = container.find('#removeDessert');
	tableStarter = $('#tableStarter');
	tableMainDish = $('#tableMainDish');
	tableDessert = $('#tableDessert');
	update_side_bar();

	this.populate_main_content = function(search) {
		this.numberGuests.value= model.getNumberOfGuests();
		this.foodContainer.children().remove();	
		var dishType = this.dishChooser.val().toLowerCase();
		var dishes;
		if (search != ""){
			dishes = model.getAllDishes(dishType, search);
		}
		else{
			dishes = model.getAllDishes(dishType);
		}

		for (var i = 0; i<dishes.length; i++) {
			var dishContainer = document.createElement("div");
			dishContainer.className="col-xs-4";
			dishContainer.id=dishes[i].id;
			/*dishContainer.click(foo);*/
			dishCenter = document.createElement("div");
			dishCenter.className="well";
			var dishImage = document.createElement("img");
			dishImage.src="images/" + dishes[i].image;
			dishImage.className="center-block";
			var dishName = document.createElement("p");
			dishName.innerHTML=dishes[i].name;
			dishName.className="text-center"
			dishCenter.appendChild(dishImage);
			dishCenter.appendChild(dishName);
			dishContainer.appendChild(dishCenter);
			this.foodContainer.append(dishContainer);
		};
	}

	this.update = function(arg){
		if (arg == "price" || arg == "addedDish") {
			update_total_cost();
			update_side_bar();
		}
		else if (arg == "idUpdate"){}

	}

	function update_total_cost(){
		$("#total-cost").html("SEK " + model.getTotalMenuPrice());
	}
	function update_side_bar(){
		var starter = model.getSelectedDish("starter");
		var mainDish = model.getSelectedDish("main dish");
		var dessert = model.getSelectedDish("dessert");
		var tableStarterItems = tableStarter.children();
		var tableMainDishItems = tableMainDish.children()
		var tableDessertItems = tableDessert.children()
		for (var i = 0; i < tableStarterItems.length; i++) {
			if (tableStarterItems[i].id != "removeStarter"){
				tableStarterItems[i].remove();
			}
		};

		for (var i = 0; i < tableMainDishItems.length; i++) {
			if (tableMainDishItems[i].id != "removeMainDish"){
				tableMainDishItems[i].remove();
			}
		};

		for (var i = 0; i < tableDessertItems.length; i++) {
			if (tableDessertItems[i].id != "removeDessert"){
				tableDessertItems[i].remove();
			}
		};

		if (starter != null){
			this.tableStarter.show();
			var dishName = document.createElement("td");
			var dishPrice = document.createElement("td");
			
			dishName.innerHTML=model.getDish(starter).name;
			dishPrice.innerHTML= model.getDishPrice(model.getDish(starter))*model.getNumberOfGuests();
			tableStarter.append(dishName);
			tableStarter.append(dishPrice);
		}
		else{
			this.tableStarter.hide();
		}

		if (mainDish != null){
			this.tableMainDish.show();
			var dishName = document.createElement("td");
			var dishPrice = document.createElement("td");
			dishName.innerHTML=model.getDish(mainDish).name;
			dishPrice.innerHTML= model.getDishPrice(model.getDish(mainDish))*model.getNumberOfGuests();
			tableMainDish.append(dishName);
			tableMainDish.append(dishPrice);
		}
		else{
			this.tableMainDish.hide();
		}

		if (dessert != null){
			this.tableDessert.show();
			var dishName = document.createElement("td");
			var dishPrice = document.createElement("td");
			dishName.innerHTML=model.getDish(dessert).name;
			dishPrice.innerHTML= model.getDishPrice(model.getDish(dessert))*model.getNumberOfGuests();
			tableDessert.append(dishName);
			tableDessert.append(dishPrice);
		}
		else{
			this.tableDessert.hide();
		}
	}
}
