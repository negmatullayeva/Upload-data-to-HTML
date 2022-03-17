    function rasmQoshish() {
    var rasmlar = new Array();
    var htmlString = "";
    for (i = 0; i < 10; i++) {
        rasmlar[i] = new Image();
        rasmlar[i].src = "images/" + (i + 1) + ".jfif";
        htmlString+="<img src=\"" + rasmlar[i].src + "\" alt=\"\">"
        $(".card-body")[0].innerHTML =htmlString;
    }
}