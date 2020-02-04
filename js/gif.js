// Portfolio: On hover change src to gif
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

// Functionality to submit a link
function toggle_url_form() {
    var urlForm = document.getElementById("url-form");
    if (urlForm.style.display === "block") {
        urlForm.style.display = "none";
    } else {
        urlForm.style.display = "block"
    }
};

// Plus and minus functionality, adding or subtracting an item in the cart
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

// Update the price displayed in shopping cart
function update_price($this, count) {
    var $price_tag = $this.closest("div").find("h1");
    var original_price = parseFloat($price_tag[0].innerText)

    price = Math.round((count * original_price) * 100) / 100
    $this.closest("div").find("h5")[0].innerHTML = price
}

// Highlight selected shop item
$("div.portfolio-box-caption").click(function() {
    $(".img-shadow").removeClass("img-shadow");
    $overlay = $(this).closest("a").find("div.overlay")
    // console.log($overlay)
    $overlay.addClass("img-shadow");
    // TODO add the current selected item to cookies
    $image = $(this).closest("a").find("img")[0]
    // console.log($image.id)
    document.cookie = "selected=" + $image.id + ";"
    show_cookies();
});

// Highlight form button
$("div.btn-form").click(function() {
    $(".btn-shadow").removeClass("btn-shadow");
    $(this).addClass("btn-shadow");
});

function show_cookies() {
    console.log(document.cookie)
}

function add_to_cart() {

}