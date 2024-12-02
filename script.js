window.onload = function() {
    var favicon = document.getElementById("favicon");
    setInterval(changeFavicon, 200);

    function changeFavicon() {
        favicon.href = "images/favicon2.png";
    }
};

function changeText() {
    document.getElementById("text").innerHTML = "kiripolskypavel@gmail.com";
    navigator.clipboard.writeText("kiripolskypavel@gmail.com").then(function() {
        alert("Email byl zkopírován do schránky!");
        document.getElementById("text").innerHTML = "Email";
    }).catch(function(error) {
        alert("Došlo k chybě při kopírování: " + error);
        document.getElementById("text").innerHTML = "Email";
    });
}
