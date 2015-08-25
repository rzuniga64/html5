var new_release_price    = 4;
var kid_movie_price      = 1.75;
var adult_price          = 4.50;
var new_release_late_fee = 2;
var catalog_late_fee     = 1;
var kids_late_fee        = 0.5;

new_release_price = new_release_price.toFixed(2);
kid_movie_price = kid_movie_price.toFixed(2);
adult_price = adult_price.toFixed(2);
new_release_late_fee = new_release_late_fee.toFixed(2);
catalog_late_fee = catalog_late_fee.toFixed(2);
kids_late_fee = kids_late_fee.toFixed(2);

var span1 = document.getElementsByTagName("span")[0];
span1.appendChild(document.createTextNode(new_release_price.toString()));
var span2 = document.getElementsByTagName("span")[1];
span2.appendChild(document.createTextNode(kid_movie_price.toString()));
var span3 = document.getElementsByTagName("span")[2];
span3.appendChild(document.createTextNode(adult_price.toString()));
var span4 = document.getElementsByTagName("span")[3];
span4.appendChild(document.createTextNode(new_release_late_fee.toString()));
var span5 = document.getElementsByTagName("span")[4];
span5.appendChild(document.createTextNode(catalog_late_fee.toString()));
var span6 = document.getElementsByTagName("span")[5];
span6.appendChild(document.createTextNode(kids_late_fee.toString()));
