window.onload = function() {
    var favicon = document.getElementById("favicon");
    setInterval(changeFavicon, 200);

    function changeFavicon() {
        favicon.href = "images/favicon2.png";
    }
};

function changeText(id, copy, text) {
    document.getElementById(id).innerHTML = copy;
    navigator.clipboard.writeText(copy).then(function() {
        alert(text + " byl zkopírován do schránky!");
        document.getElementById(id).innerHTML = id;
    }).catch(function(error) {
        alert("Došlo k chybě při kopírování: " + error);
        document.getElementById(id).innerHTML = id;
    });
}