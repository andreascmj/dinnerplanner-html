var ReviewViewController = function(view, model){
	view.backBtn.click(backNavigate);
	view.printBtn.click(printRecipe);

	function backNavigate(){
		window.reviewPage.hide();
		window.selectDishPage.show();
	}

	function printRecipe () {
		window.reviewPage.hide();
		window.preparationPage.show();
	}
}