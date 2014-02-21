var PreparationView = function(container, model){
	
	model.addObserver(this);
	this.menuFoodContainer = container.find('#menuFoodContainer');
	this.backBtn = container.find('#backBtn');
	this.dinnerHeader = container.find('#dinnerHeader');
	populate();

	function populate() {
		$("#menuFoodContainer").children().remove();	

		var dishes=model.getFullMenu();

		for (var i = 0; i<dishes.length; i++) {
			var dishContainer = document.createElement("div");
			dishContainer.className="row";
			dishContainer.style.marginTop="10px";
			dishContainer.id=dishes[i].name;

			var dishImageDiv = document.createElement("div");
			dishImageDiv.className="col-xs-2";

			var dishImage = document.createElement("img");
			dishImage.src="images/" + dishes[i].image;
			dishImage.className="center-block";

			dishImageDiv.appendChild(dishImage);

			var dishIngredients = document.createElement("div");
			dishIngredients.className="col-xs-3"
			var dishName = "<h2>" + dishes[i].name + "</h2>";

			var ingredientString = "";
			var allIngredients = dishes[i].ingredients;

			for (var j = 0; j < allIngredients.length; j++) {
				var ingr = allIngredients[j];
				ingredientString += ingr.quantity*model.getNumberOfGuests() +" "+ingr.unit+" "+ingr.name;
				ingredientString += "<br>";
			};

			dishIngredients.innerHTML=dishName + ingredientString;

			var dishPreparations = document.createElement("div");
			dishPreparations.className="col-xs-6"
			dishPreparations.innerHTML= "<h3>Preparations</h3>" + dishes[i].description;

			dishContainer.appendChild(dishImageDiv);
			dishContainer.appendChild(dishIngredients);
			dishContainer.appendChild(dishPreparations);

			$("#menuFoodContainer").append(dishContainer);
		};
		$('#dinnerHeader').html("My Dinner: " + model.getNumberOfGuests() + " people");
	}
}