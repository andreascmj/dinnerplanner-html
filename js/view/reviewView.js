var ReviewView = function(container, model){
	
	model.addObserver(this);
	this.foodContainer = container.find('#foodContainer');

	this.populate_main_content();

	this.populate_main_content = function(search) {
		this.foodContainer.children().remove();	

		var dishes=getFullMenu();

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
			this.foodContainer.append(dishContainer);
		};
	}
}