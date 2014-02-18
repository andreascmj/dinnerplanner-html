var SelectDishViewController = function(view, model){
	view.dishChooser.on("change", filterDishType);
	view.searchBtn.click(search);
	setClickersOnImgs();


	function setNewPersons() {
		model.setNumberOfGuests(view.numPersons.value);
	}

	function search(){
		alert("Search");
	}

	function filterDishType() {
		alert("change");
		populate_main_content();
		setClickersOnImgs();
	}

	function setClickersOnImgs() {
		view.foodContainer.children().click(search);
	}
}