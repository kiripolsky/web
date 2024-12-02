window.onload = () => {
    setTimeout(() => document.getElementById("favicon").href = "images/favicon2.png", 200);
};

function changeText(id, copy, text) {
    const element = document.getElementById(id);
    const originalText = element.innerHTML;

    element.innerHTML = copy;

    setTimeout(() => {
        navigator.clipboard.writeText(copy)
            .then(() => alert(`${text} byl zkopírován do schránky!`))
            .catch((error) => alert(`Došlo k chybě při kopírování: ${error}`))
            .finally(() => element.innerHTML = originalText);
    }, 100);
}
