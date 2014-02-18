var ReviewViewController = function(view, model){
	view.backBtn.click(backNavigate);

	function backNavigate(){
		window.location="selectDish.html";
	}
}