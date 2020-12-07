//Model is used to as part of the MVC model to get pages and allows the website to be a little responsive. It also works with the app.js to get pages displayed on the screen by injecting views. Plus, it acts as the controller of data.
var MODEL = (function(){


    var _getPage = function(viewWeb){
        $.get(`views/${viewWeb}/${viewWeb}.html`, function (data) {
            $("#app").html(data);
        });
    };


    return {
        getPage: _getPage,
    }
})();