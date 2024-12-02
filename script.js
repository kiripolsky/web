window.onload = function() {
    var favicon = document.getElementById("favicon");
    setInterval(changeFavicon, 200);

    function changeFavicon() {
        favicon.href = "images/favicon2.png";
    }
};

function changeText() {
    document.getElementById("text").innerHTML = "kiripolskypavel@gmail.com";
    setInterval(copyToClipboard, 1000);
    setInterval(changeTextBack, 1000);
}

function changeTextBack() {
    document.getElementById("text").innerHTML = "Email";
}

function copyToClipboard() {
    navigator.clipboard.writeText("kiripolskypavel@gmail.com").then(function() {
        alert("Email byl zkopírován do schránky!");
    }).catch(function(error) {
        alert("Došlo k chybě při kopírování: " + error);
    });
}
