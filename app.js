var drawer = new tabris.Drawer();
new tabris.PageSelector().appendTo(drawer);
var NewsPage = require("./pages/NewsPage");
var SettingsPage = require("./pages/SettingsPage");
// You can open a page by calling its open() method.
NewsPage.create().open();
// SettingsPage waits to be opened...
SettingsPage.create(); 

//var firebase = require("https://www.gstatic.com/firebasejs/3.3.0/firebase.js");

var stripe = require("https://js.stripe.com/v2/");



