var DishViewController = function(view, model){
	view.chooseDishBtn.click(search);
	view.backBtn.click(back);

	function search(){
		alert("Search");
	}
	function back(){
		window.location="selectDish.html"
	}
}