var PreparationViewController = function(view, model){
	view.backBtn.click(backNavigate);

	function backNavigate(){
		window.preparationPage.hide();
		window.reviewPage.show();
	}
}