var SelectDishViewController = function(view, model){
	view.dishChooser.on("change", filterDishType);
	view.searchBtn.click(filterDishType);
	view.numberGuests.on("change", setNumberOfGuests);
	filterDishType();


	function setNewPersons() {
		model.setNumberOfGuests(view.numPersons.value);
	}

	function search(){
		alert("Search");
	}

	function filterDishType() {
		var search = view.searchField.val();
		view.populate_main_content(search);
		setClickersOnImgs();
	}

	function setClickersOnImgs() {
		view.foodContainer.children().click(navigate);
	}
	function navigate() {
		window.location="dish.html";
	}
	function setNumberOfGuests (){
		model.setNumberOfGuests(view.numberGuests.val());
	}
}