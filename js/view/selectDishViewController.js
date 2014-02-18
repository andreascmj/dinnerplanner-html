var SelectDishViewController = function(view, model){
	view.dishChooser.on("change", filterDishType);
	view.searchBtn.click(search);
	for (var i = 0; i <= view.foodContainer.children.length; i++) {
		view.foodContainer.children[i].click(search);
	};


	function setNewPersons() {
		model.setNumberOfGuests(view.numPersons.value);
	}

	function search(){
		alert("Search");
	}
	function filterDishType() {
		alert("change");
	}
}