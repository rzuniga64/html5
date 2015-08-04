//When you put jquery code within a function that tells
// jquery to wait until the browser has loaded the rest of the
// website and then execute this code.
$(function(){
    $('#alertMe').click(function(e) {
        e.preventDefault();
        $('#successAlert').slideDown();
    });
});

var happyHourWindow;
var curImage="banner1";
var screenWidth = screen.width;
var screenHeight = screen.height;

function showHappyHour(linkTarget) {
    var propertyWidth=1600;
    var propertyHeight=900;
    var winLeft = (screen.width-propertyWidth)/2;
    var winTop = (screen.height-propertyHeight)/2;
    var winOptions = "toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no";
    winOptions += ",width=" + propertyWidth;
    winOptions += ",height=" + propertyHeight;
    winOptions += ",left=" + winLeft;
    winOptions += ",top=" + winTop;
    happyHourWindow = window.open(linkTarget,
        "happyHourInfo", winOptions);
    happyHourWindow.focus();
}

function bannerAd() {
    if (curImage == "banner2") {
        document.images[0].src = "images/rico_suave2_thumbnail.png";
        curImage = "banner1";
    }
    else {
        document.images[0].src = "images/rico_suave_thumbnail.jpg";
        curImage = "banner2";
    }
}