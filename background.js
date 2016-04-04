chrome.contextMenus.create({
    "title" : "ユニットテストを生成",
    "type" : "normal",
    "id": "createUnitTest",
    "contexts" : ["page"],
    "documentUrlPatterns": ["http://*.atcoder.jp/tasks/*"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "onClick"
        });
    });
});
