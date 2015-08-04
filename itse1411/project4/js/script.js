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

function confirmSend() {
    var sendSelected = false;
    if (document.forms[0].fname.value == ""
        || document.forms[0].lname.value == ""
        || document.forms[0].mobile.value == ""
        || document.forms[0].email.value == "" ) {
        window.alert("You must enter your contact information.");
        return false;
    }

    /* Check whether a selection is selected in the work status group */
    if (document.forms[0].select.value == "-1") {
        window.alert("You must select a work status.");
        return false;
    }

    /* Check whether a button is selected in the radio group */
    for (var j = 0; j < 3; ++j) {
        if (document.forms[0].radiogroup[j].checked == true) {
            sendSelected = true;
            break;
        }
    }

    /* show an alert box if the a radio button is not selected */
    if (sendSelected != true) {
        window.alert("You must select a radio button.");
        return false;
    }

    /* Check whether a resume has been submitted */
    if (($.trim(document.forms[0].resume.value) =='')) {
        window.alert("You must fill in your resume.");
        return false;
    }

    return true;
}

function confirmReset() {
    var resetForm = window.confirm("Are you sure you want to reset the form?");
    if (resetForm == true)
        return true;
    return false;
}