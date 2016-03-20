chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "remove-subtitle":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "content-add.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;
        case "show-subtitle":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "content-remove.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;
        }
    }
);
