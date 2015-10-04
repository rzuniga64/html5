var guest = addGuest();
document.newGuest.guests.value += guest;

function addGuest() {
    var guestInfo = document.newGuest.guestName.value
        + ", ";
    guestInfo += document.newGuest.relationship.value + "\r";
    //document.newGuest.guests.value = guestInfo;
    return guestInfo;
}
