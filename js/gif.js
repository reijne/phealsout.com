$(function() {
    $("#portraitman-box").hover(
        function() {
            $("#portraitman").attr("src", "../img/portfolio/gifs/portraitman.gif");
            $("#portraitman").attr("class", "img-responsive gif");
        },
        function() {
            $("#portraitman").attr("src", "../img/portfolio/portraitman.png");
            $("#portraitman").attr("class", "img-responsive");
        }                         
    );                  
});

$(function() {
    $("#ffc-box").hover(
        function() {
            $("#ffc-img").attr("src", "../img/portfolio/gifs/ffc.gif");
            $("#ffc-img").attr("class", "img-responsive gif");
        },
        function() {
            $("#ffc-img").attr("src", "../img/portfolio/Fast Feeling Colours.png");
            $("#ffc-img").attr("class", "img-responsive");
        }                         
    );                  
});

$(function() {
    $("#bcbb-box").hover(
        function() {
            $("#bcbb-img").attr("src", "../img/portfolio/gifs/bcbb.gif");
            $("#bcbb-img").attr("class", "img-responsive gif");
        },
        function() {
            $("#bcbb-img").attr("src", "../img/portfolio/Black Can Be Back.png");
            $("#bcbb-img").attr("class", "img-responsive");
        }                         
    );                  
});