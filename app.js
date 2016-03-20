function clickHandler(e) {
    chrome.extension.sendMessage({directive: "remove-subtitle"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function clickHandlerRemove(e) {
    chrome.extension.sendMessage({directive: "show-subtitle"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('click-me').addEventListener('click', clickHandler);
    document.getElementById('click-me-2').addEventListener('click', clickHandlerRemove);
})
