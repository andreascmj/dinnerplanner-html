function update_total_cost(){
	var price = DinnerModel.getTotalMenuPrice();
	$("#total-cost").html=("SEK " + price);
}
