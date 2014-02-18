var SelectDishViewController = function(view, model){

	view.numPersons.change("setNewPersons()");
	view.searchBtn.click("search()");


	setNewPersons = function() {
		model.setNumberOfGuests(view.numPersons.value);
	}

	search = function(){
		alert("Search");
	}
}