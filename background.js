chrome.contextMenus.create({
    "title" : "ユニットテストを生成",
    "type" : "normal",
    "contexts" : ["page"],
    "onclick" : onClick
});

function onClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "onClick"
        });
    });
}
