function changeText(id, copy, text, end) {
    const element = document.getElementById(id);
    const originalText = element.innerHTML;

    element.innerHTML = copy;

    setTimeout(() => {
        navigator.clipboard.writeText(copy)
            .then(() => alert(`${text} byl${end} zkopírován${end} do schránky!`))
            .catch((error) => alert(`Došlo k chybě při kopírování: ${error}`))
            .finally(() => element.innerHTML = originalText);
    }, 100);
}
