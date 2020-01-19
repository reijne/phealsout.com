$(function() {
    $("#portaitman-box").hover(
        function() {
            console.log('Worketh')
            $("#portaitman").attr("src", "../img/portfolio/1.jpg");
        },
        function() {
            $("#portaitman").attr("src", "../img/portfolio/1.jpg");
        }                         
    );                  
});