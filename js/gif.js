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