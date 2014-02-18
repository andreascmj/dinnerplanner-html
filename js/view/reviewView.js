var ReviewView = function(container, model){
	
	model.addObserver(this);
	this.foodContainer = container.find('#foodContainer');
	this.backBtn = container.find('#backBtn');
	this.dinnerHeader = container.find('#dinnerHeader');
	populate();

	function populate() {
		$("#foodContainer").children().remove();	

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
			dishName.className="text-center"
			dishCenter.appendChild(dishImage);
			dishCenter.appendChild(dishName);
			dishContainer.appendChild(dishCenter);
			$("#foodContainer").append(dishContainer);
		};
		$('#dinnerHeader').html("My Dinner: " + model.getNumberOfGuests() + " people");
		//container.hide();
	}
}