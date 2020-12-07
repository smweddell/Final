//This gets the pages after a button or link is pressed and uses view injection to display the content on the screen
function initlisteners(){
    $("#nav nav a").click(function (e) {
        var btnID = this.id;
        MODEL.getPage(btnID);
    });
}

//this is how views are getting injected to the website by being specific where the files are located so that when a link or button is pressed it will go find the item in the specific location
function initSite() {
    $.get("views/nav.html", function (nav) {
        $("#nav").html(nav);
        initlisteners();
    });

    $.get("views/home/home.html", function (data) {
        $("#app").html(data);
    });

    $.get("views/footer.html", function (data) {
        $("#footer").html(data);
    });
}

$(document).ready(function (){
    initSite();
});