function removeStyle(){
    var node = document.getElementById('netflix-subtitle-style');
    if (node){
        document.body.removeChild(document.getElementById('netflix-subtitle-style'));
    }
}
removeStyle();
