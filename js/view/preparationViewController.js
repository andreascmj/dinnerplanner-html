var PreparationViewController = function(view, model){
	view.backBtn.click(backNavigate);

	function backNavigate(){
		window.location="review.html";
	}
}