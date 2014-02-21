$(function() {

    //The global variable so we can access it from other controller and views
    window.stage = "starter";
    /*window.stage.addEventListener("onchange", changeScreen, true);*/

    window.homePage = $('#home-page-content');
    window.selectDishPage = $('#selectDish-page-content');
    window.mainContent = $('#main-content');
    window.selectDishPage.hide();
    window.dishPage = $('#dish-page-content');
    window.dishPage.hide();
    window.reviewPage = $('#review-page-content');
    window.reviewPage.hide();
    window.preparationPage = $('#preparation-page-content');
    window.preparationPage.hide();

    window.currentDishId = 1;
    //alert("1");
    
    //We instantiate our model
    var model = new DinnerModel();
    
    //And create the needed controllers and views
    //var exampleView = new ExampleView($("#exampleView"),model);
    //var exampleViewController = new ExampleViewController(exampleView,model);
    var homeView = new HomeView($('#home-page-content'), model);
    var homeViewController = new HomeViewController(homeView, model);
    var selectDishView = new SelectDishView($('#selectDish-page-content'), model);
    var selectDishViewController = new SelectDishViewController(selectDishView, model);
    var dishView = new DishView($('#dish-page-content'), model);
    var dishViewController = new DishViewController(dishView, model);
    var reviewView = new ReviewView($('#review-page-content'), model);
    var reviewViewController = new ReviewViewController(reviewView, model);
    var preparationView = new PreparationView($('#preparation-page-content'), model);
    var preparationViewController = new PreparationViewController(preparationView, model);
});
