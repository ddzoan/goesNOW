chrome.browserAction.onClicked.addListener(function(activeTab)
{
  var newURL = "https://goes-app.cbp.dhs.gov/goes/jsp/login.jsp";
  chrome.tabs.create({ url: newURL });
});