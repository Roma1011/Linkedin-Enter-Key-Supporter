var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) 
{
    enable = enable ? false : true;
    if(enable) 
    {
        chrome.browserAction.setBadgeText({ text: 'ON' });
        chrome.storage.sync.set({'enable': '1'});
    }
    else
    {
        chrome.browserAction.setBadgeText({ text: 'OFF' });
        chrome.storage.sync.set({'enable': '0'});
    }
});