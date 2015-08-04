var contactList = new Object();

function Contact() {
    this.lastName = "";
    this.firstName = "";
    this.telephone = "";
    this.address = "";
    this.city = "";
    this.state = "";
    this.getContacts = getContactInfo;
    this.updateContact = updateSelectedContact;
}

function getContactInfo() {
    document.forms[0].lastname.value = this.lastName;
    document.forms[0].firstname.value = this.firstName;
    document.forms[0].telephone.value = this.telephone;
    document.forms[0].address.value = this.address;
    document.forms[0].city.value = this.city;
    document.forms[0].state.value = this.state;
    document.forms[0].zip.value = this.zip;
}

function updateSelectedContact(curIndex) {
    this.lastName = document.forms[0].lastname.value;
    this.firstName = document.forms[0].firstname.value;
    this.telephone = document.forms[0].telephone.value;
    this.address = document.forms[0].address.value;
    this.city = document.forms[0].city.value;
    this.state = document.forms[0].state.value;
    this.zip = document.forms[0].zip.value;
    document.forms[0].contacts.options[curIndex].value = this.lastName + "," + this.firstName;
    document.forms[0].contacts.options[curIndex].text = this.lastName + "," + this.firstName;
    window.alert("Contact information updated.");
}

function addContact() {
    var newContact = 0;
    for (contact in contactList)
        ++newContact;

    if (document.forms[0].lastname.value == "" || document.forms[0].firstname.value == "")
        window.alert("You must enter the contact's first and last names.");
    else {
        contactList["contact" + newContact] = new Contact();
        contactList["contact" + newContact].lastName = document.forms[0].lastname.value;
        contactList["contact" + newContact].firstName = document.forms[0].firstname.value;
        contactList["contact" + newContact].telephone = document.forms[0].telephone.value;
        contactList["contact" + newContact].address = document.forms[0].address.value;
        contactList["contact" + newContact].city = document.forms[0].city.value;
        contactList["contact" + newContact].state = document.forms[0].state.value;
        contactList["contact" + newContact].zip = document.forms[0].zip.value;
    }

    var createContact = new Option();
    createContact.value = contactList["contact" + newContact].lastName + "," + contactList["contact" + newContact].firstName;
    createContact.text = contactList["contact" + newContact].lastName + "," + contactList["contact" + newContact].firstName;
    document.forms[0].contacts.options[newContact] = createContact;

    calcGroupDiscount(newContact + 1);
}

function deleteContact() {
    var contactSelected = false;
    var selectedContact = 0;
    for (var i=0; i < document.forms[0].contacts.options.length; ++i) {
        if (document.forms[0].contacts.options[i].selected== true) {
            contactSelected = true;
            selectedContact = i;
            calcGroupDiscount(document.forms[0].contacts.options.length);
            break;
        }
    }
    document.forms[0].contacts.options[i] = null;

    if (contactSelected == true) {
        for (prop in contactList) {
            delete contactList[prop]
        }
        for (var i=0; i < document.forms[0].contacts.options.length;++i) {
            contactList["contact" + i] = new Contact();
            contactList["contact" + i].lastName = document.forms[0].lastname.value;
            contactList["contact" + i].firstName= document.forms[0].firstname.value;
            contactList["contact" + i].telephone = document.forms[0].telephone.value;
            contactList["contact" + i].address = document.forms[0].address.value;
            contactList["contact" + i].city = document.forms[0].city.value;
            contactList["contact" + i].state = document.forms[0].state.value;
            contactList["contact" + i].zip = document.forms[0].zip.value;
        }
    }
    else
        window.alert(
            "You must select a contact in the list.");
}

// This is step 3 on page 326 (I am adding the parameter whichMonth here rather than later when the author tells you to do it.)
function displayCalendar(whichMonth) {
    var calendarWin = window.open("", "CalWindow", "status=no,resizable=yes,width=400,height=220,left=200,top=200");
    calendarWin.focus();
    calendarWin.document.write("<!DOCTYPE html PUBLIC '-\/\/W3C\/\/DTD XHTML 1.0 Strict\/\/EN' ");
    calendarWin.document.write("'http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-strict.dtd'>");
    calendarWin.document.write("<html xmlns='http:\/\/www.w3.org\/1999\/xhtml'>");
    calendarWin.document.write("<head><title>Coast City Windsurfing<\/title>");
    calendarWin.document.write("<meta http-equiv='content-type' content='text\/html;charset=iso-8859-1' \/>");
    calendarWin.document.write("<link rel='stylesheet' href='../style.css' type='text\/css' \/><\/head><body>");
    calendarWin.document.write("<table cellspacing='0' border='1' width='100%'>");
    // This ends step 3 on page 326 -- the closing brace goes at the end of the function

    // This is step 4 on page 326
    calendarWin.document.write("<colgroup span='7' width='50' \/>");

    if (whichMonth == -1)
        dateObject.setMonth(dateObject.getMonth() - 1);
    else if (whichMonth == 1)
        dateObject.setMonth(dateObject.getMonth() + 1);

    var month = dateObject.getMonth();
    calendarWin.document.write("<tr><td colspan='2'> <a href= ' ' "
        + " onclick = 'self.opener.displayCalendar(-1); return false'>Previous</a></td>"
        + " <td colspan = '3' align = 'center'><strong>"
        + monthArray[month] + " " + dateObject.getFullYear()
        + "</strong></td><td colspan = '2' align='right'>"
        + "<a href='' onclick='self.opener.displayCalendar(1); return false'>"
        + "Next</a></td></tr>");

    calendarWin.document.write("<tr align='center'><td>Sun<\/td><td>Mon<\/td><td>Tue<\/td><td>Wed<\/td><td>Thu<\/td><td>Fri<\/td><td>Sat<\/td><\/tr>");
    calendarWin.document.write("<tr align='center'>");
    // This ends step 4 on page 326

    // This is step 5 on page 327
    dateObject.setDate(1);
    var dayOfWeek = dateObject.getDay();
    for (var i=0; i<dayOfWeek; ++i) {
        calendarWin.document.write("<td>&nbsp;<\/td>");
    }
    // This ends step 5 on page 327

    // This is step 6 on page 327
    var daysWithDates = 7 - dayOfWeek;
    var dateCounter = 1;
    for (var j=0; j<daysWithDates; ++j) {
        var curDate = monthArray[month] + " " + dateCounter + ", " + dateObject.getFullYear();
        calendarWin.document.write("<td><a href='' onclick='self.opener.document.forms[0].reservationDate.value=\"" + curDate + "\";self.close()'>" + dateCounter + "<\/a><\/td>");
        ++dateCounter;
    }
    // This ends step 6 on page 327


    // This is step 7 on page 328
    var numDays = 0;
    // January, March, May, July, August, October, December
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11)
        numDays = 31;
    // February
    if (month == 1)
        numDays = 28;
    // April, June, September, November
    else if (month == 3 || month == 5 || month == 8 || month == 10)
        numDays = 30;
    // This ends step 7 on page 328

    //This is step 8 on page 328
    for (var rowCounter = 0; rowCounter < 5; ++rowCounter) {
        var weekDayCounter = 0;
        calendarWin.document.write("<tr align='center'>");
        // This ends step 8 on page 328  -- the last line and closing brace are now below step 9.

        // This is step 9 on pages 328 - 329.  After the href looks like a double quote on the monitor, but it is 2 single quotes.
        while (weekDayCounter < 7) {
            curDate = monthArray[month] + " " + dateCounter + ", " + dateObject.getFullYear();
            if (dateCounter <= numDays)
                calendarWin.document.write("<td><a href='' onclick='self.opener.document.forms[0].reservationDate.value=\"" + curDate + "\";self.close()'>" + dateCounter + "<\/a><\/td>");
            else
                calendarWin.document.write("<td>&nbsp;<\/td>");
            ++weekDayCounter;
            ++dateCounter;
        }
        // This ends step 9 on pages 328 - 329

        // The next 2 lines of code was given in step 8 but is to be moved below the code in step 9
        calendarWin.document.write("<\/tr>");
    }

    // This is step 10 on page 329
    calendarWin.document.write("<\/table><\/body><\/html>");
    calendarWin.document.close();
    // This ends step 10 on page 329

    // This closes the function which was originally given in step 3 on page 326
}

function calcGroupDiscount(groupSize) {
    var dailyRate = 49;
    var groupRate;
    if (groupSize >= 5 && groupSize <= 10)
        dailyRate /= 1.1;
    else if (groupSize > 10 && groupSize < 25)
        dailyRate /= 1.2;
    else if (groupSize > 24)
        dailyRate /= 1.25;
    groupRate = groupSize * dailyRate;
    groupRate = Math.round(groupRate);
    document.forms[0].discount.value = groupRate.toLocaleString();
}
