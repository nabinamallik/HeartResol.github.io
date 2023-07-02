function changeResolution(resolution){
    var image = document.getElementById("image")
    var imgUrl = "";
    switch(resolution){
        case "144p":
            imgUrl = "images/144.png";
        break;
        case "240p":
            imgUrl = "images/240.png";
        break;
        case "360p":
            imgUrl = "images/360.png";
        break;
        case "480p":
            imgUrl = "images/480.png";
        break;
        case "720p":
            imgUrl = "images/720.png";
        break;
        case "1080p":
            imgUrl = "images/1080.png";
        break;
        default:
            break;
    }
    image.src = imgUrl;
    image.style.display = "block";

    var button = document.getElementsByTagName("button");
    for(var i = 0; i<button.length; i++){
        button[i].classList.remove("button-clicked")
    }

    setTimeout(function(){
        this.classList.remove("button-clicked");
    }.bind(this), 300);

}