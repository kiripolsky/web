window.onload = function() {
    var favicon = document.getElementById("favicon");
    setInterval(changeFavicon, 200);

    function changeFavicon() {
        favicon.href = "images/favicon2.png";
    }
};
