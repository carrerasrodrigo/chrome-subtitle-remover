function addStyleString() {
    var id = 'netflix-subtitle-style';
    if (document.getElementById(id)){
        return;
    }
    var str = '#netflix-player .player-timedtext .player-timedtext-text-container {display: none !important;}'
    var node = document.createElement('style');
    node.innerHTML = str;
    node.id = 'netflix-subtitle-style';
    document.body.appendChild(node);
}
addStyleString();
