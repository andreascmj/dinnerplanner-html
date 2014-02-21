var ReviewView = function(container, model){
	
	model.addObserver(this);
	this.menuFoodContainer = container.find('#menuFoodContainer');
	this.backBtn = container.find('#backBtn');
	this.printBtn = container.find('#print-button');
	this.dinnerHeader = container.find('#dinnerHeader');
	populate();

	function populate() {
		$("#menuFoodContainer").children().remove();	

		var dishes=model.getFullMenu();

		for (var i = 0; i<dishes.length; i++) {
			var dishContainer = document.createElement("div");
			dishContainer.className="col-xs-4";
			dishContainer.id=dishes[i].name;
			dishCenter = document.createElement("div");
			dishCenter.className="well";
			var dishImage = document.createElement("img");
			dishImage.src="images/" + dishes[i].image;
			dishImage.className="center-block";
			var dishName = document.createElement("p");
			dishName.innerHTML=dishes[i].name;
			dishName.className="text-center";
			var dishPrice = document.createElement("p");
			dishPrice.id=dishes[i].id + "price";
			dishPrice.innerHTML=model.getDishPrice(dishes[i])*model.getNumberOfGuests() +" SEK";
			dishPrice.className="text-center"
			dishCenter.appendChild(dishImage);
			dishCenter.appendChild(dishName);
			dishCenter.appendChild(dishPrice);
			dishContainer.appendChild(dishCenter);
			$("#menuFoodContainer").append(dishContainer);
		};
		$('#dinnerHeader').html("My Dinner: " + model.getNumberOfGuests() + " people");
		$('#totalMenuPrice').html("Total: " + model.getTotalMenuPrice());
	}

	this.update = function(arg){
		if (arg == "addedDish") {
			populate();
		} else if (arg == "price") {
			var dishes=model.getFullMenu();
			for (var i = 0; i < dishes.length; i++) {
				var dishPrice = $('#'+dishes[i].id + 'price');
				dishPrice.html(model.getDishPrice(dishes[i])*model.getNumberOfGuests() +" SEK");
			};
			$('#dinnerHeader').html("My Dinner: " + model.getNumberOfGuests() + " people");
			$('#totalMenuPrice').html("Total: " + model.getTotalMenuPrice());		
		}
	}
}