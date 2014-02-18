var SelectDishViewController = function(view, model){
	view.dishChooser.on("change", filterDishType);
	view.searchBtn.click(search);
	filterDishType();


	function setNewPersons() {
		model.setNumberOfGuests(view.numPersons.value);
	}

	function search(){
		alert("Search");
	}

	function filterDishType() {
		view.foodContainer.children().remove();
		view.populate_main_content();
		setClickersOnImgs();
	}

	function setClickersOnImgs() {
		view.foodContainer.children().click(navigate);
	}
	function navigate() {
		window.location="dish.html";
	}
}