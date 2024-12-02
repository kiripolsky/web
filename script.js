window.onload = function() {
    var favicon = document.getElementById("favicon");
    setInterval(changeFavicon, 200);

    function changeFavicon() {
        favicon.href = "images/favicon2.png";
    }
};

function changeText(id, copy, text) {
    var element = document.getElementById(id);
    var originalText = element.innerHTML;

    element.innerHTML = copy;

    navigator.clipboard.writeText(copy).then(function() {
        alert(text + " byl zkopírován do schránky!");
        element.innerHTML = originalText;
    }).catch(function(error) {
        alert("Došlo k chybě při kopírování: " + error);
        element.innerHTML = originalText;
    });
}
