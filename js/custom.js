// Portfolio: On hover change src to gif
$(".img-box").hover(function() {
    var $this = $(this);
    change_src($this, "gif")
}, function() {
    var $this = $(this);
    change_src($this, "jpg")
});

function change_src($this, format) {
    var $img = $this.closest("div.portfolio-box").find("img.portfolio-img");
    if (format == "gif") {
        $img[0].src = "../img/portfolio/gifs/" + $img[0].id + ".gif"
    }
    else {
        $img[0].src = "../img/portfolio/" + $img[0].id + ".jpg"
    }
}

// Functionality to submit a link
function toggle_url_form() {
    var urlForm = document.getElementById("url-form");
    if (urlForm.style.display === "block") {
        urlForm.style.display = "none";
    } else {
        urlForm.style.display = "block"
    }

    var linkBtn = document.getElementById("link-btn");
    linkBtn.style.display = "none";
};

// TODO Write link upload to db func

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
    update_price(this, count)
});

// Update the price displayed in shopping cart
function update_price($this, count) {
    // TODO update on input and get price from DB
    // var $this = $(this);
    var $input = $this.closest("div").find("input");
    var count = parseInt($input.val());
    console.log($this);
    var $price_tag = $this.closest("div").find("h1");
    var original_price = parseFloat($price_tag[0].innerText)

    price = Math.round((count * original_price) * 100) / 100
    $this.closest("div").find("h5")[0].innerHTML = price
}

// Highlight selected shop item
$("div.portfolio-box-caption").click(function() {
    $(".img-shadow").removeClass("img-shadow");
    $overlay = $(this).closest("a").find("div.overlay")
    $overlay.addClass("img-shadow");
    $image = $(this).closest("a").find("img")[0]
    if ($image == null) {
        return
    }
    // TODO add the current selected item to cookies
    document.cookie = "selected=" + $image.id + ";"
    show_cookies();
});

// Highlight form button
$("div.btn-form").click(function() {
    $(".btn-shadow").removeClass("btn-shadow");
    $(this).addClass("btn-shadow");
    // TODO add the current selected item to cookies
});

function show_cookies() {
    console.log(document.cookie)
}

function add_to_cart() {

}