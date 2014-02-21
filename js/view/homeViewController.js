var HomeViewController = function(view, model){

	function newDinnerClick(){
		//changeScreen('home-page','selectDish-page');
		/*window.location="selectDish.html";*/
		window.homePage.hide();
		window.selectDishPage.show();

	}

	view.newDinnerBtn.click(newDinnerClick);
}