$(function() {
    $("#portraitman-box").hover(
        function() {
            $("#portraitman").attr("src", "../img/portfolio/gifs/portraitman.gif");
            $("#portraitman").attr("class", "img-responsive gif");
        },
        function() {
            $("#portraitman").attr("src", "../img/shop/portraitman - A6.jpg");
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
            $("#ffc-img").attr("src", "../img/shop/Fast Feeling Colours - A6.jpg");
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
            $("#bcbb-img").attr("src", "../img/shop/Black Can Be Back - A6.jpg");
            $("#bcbb-img").attr("class", "img-responsive");
        }                         
    );                  
});

$(function() {
    $("#wow-box").hover(
        function() {
            $("#wow-img").attr("src", "../img/portfolio/gifs/wow.gif");
            $("#wow-img").attr("class", "img-responsive gif");
        },
        function() {
            $("#wow-img").attr("src", "../img/shop/Wave Of Wonder - A6.jpg");
            $("#wow-img").attr("class", "img-responsive");
        }                         
    );                  
});

$(function() {
    $("#tsn-box").hover(
        function() {
            $("#tsn-img").attr("src", "../img/portfolio/gifs/tsn.gif");
            $("#tsn-img").attr("class", "img-responsive gif");
        },
        function() {
            $("#tsn-img").attr("src", "../img/portfolio/Trying Something New.png");
            $("#tsn-img").attr("class", "img-responsive");
        }                         
    );                  
});

function toggle_url_form() {
    var urlForm = document.getElementById("url-form");
    if (urlForm.style.display === "block") {
        urlForm.style.display = "none";
    } else {
        urlForm.style.display = "block"
    }
};

$(".minus").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest("div").find("input");
    var count = parseInt($input.val());
 
    if (count >= 2) {
        count = count - 1;
    } else {
        count = 1;
    }
 
    $input.val(count);
    update_price($this, count)
});
 
$(".plus").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest("div").find("input");

    var count = parseInt($input.val());
 
    if (count <= 500) {
        count = count + 1;
    } else {
        count = 500;
    }
 
    $input.val(count);
    update_price($this, count)
});

function update_price($this, count) {
    var $price_tag = $this.closest("div").find("h1");
    var original_price = parseFloat($price_tag[0].innerText)

    price = Math.round((count * original_price) * 100) / 100
    $this.closest("div").find("h5")[0].innerHTML = price
}

function darken() {
    var $this = $(this);
    console.log($this)
    this.style.backgroundColour = "rgba(52, 0, 134, .3)";
}

$("div.portfolio-box-caption-content").on("click", function(e) {
    var $this = $(this);
    console.log($this)
});