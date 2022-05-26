function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function copyToClipboard2(text) {

    const text_format = text.slice(1, -1);
    console.log(text_format);

    navigator.clipboard.writeText(text_format);

    if(confirm('Copiado, deseja reiniciar o processo?')) {
        document.location.reload();
    }
}

function openCalculator() {
    window.open('Calculator:///')
}