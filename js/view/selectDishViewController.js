var SelectDishViewController = function(view, model){
	view.dishChooser.on("change", filterDishType);
	view.searchBtn.click(filterDishType);
	view.confirmBtn.click(confirm);
	view.removeStarter.click(removeStarter);
	view.removeMainDish.click(removeMainDish);
	view.removeDessert.click(removeDessert);
	view.numberGuests.on("change", setNumberOfGuests);
	filterDishType();

	function confirm () {
		window.selectDishPage.hide();
		window.reviewPage.show();
	}

	function setNewPersons() {
		model.setNumberOfGuests(view.numPersons.value);
	}


	function filterDishType() {
		var search = view.searchField.val();
		view.populate_main_content(search);
		setClickersOnImgs();
	}

	function setClickersOnImgs() {
		var imageBoxes = view.foodContainer.children();
		for (var i = 0; i < imageBoxes.length; i++) {
			var id = imageBoxes[i].id;
			/*alert(id);*/
			$('#'+ id).click({param1: id}, navigate)
		};
	}
	function navigate(event) {
		model.setCurrentDishId(event.data.param1);
		view.confirmBtn.attr('disabled', true);
		window.mainContent.hide();
		window.dishPage.show();
	}
	function setNumberOfGuests (){
		model.setNumberOfGuests(view.numberGuests.val());
	}
	function removeStarter (){
		model.removeDishFromMenyByType('starter');
	}
	function removeMainDish (){
		model.removeDishFromMenyByType('main dish');
	}
	function removeDessert (){
		model.removeDishFromMenyByType('dessert');
	}
}