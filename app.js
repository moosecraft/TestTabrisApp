var drawer = new tabris.Drawer();
new tabris.PageSelector().appendTo(drawer);
var NewsPage = require("./pages/NewsPage");
var SettingsPage = require("./pages/SettingsPage");
// You can open a page by calling its open() method.
NewsPage.create().open();
// SettingsPage waits to be opened...
SettingsPage.create(); 



