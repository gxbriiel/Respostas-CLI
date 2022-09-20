document.addEventListener("DOMContentLoaded", function (event) {
    console.log('pronto')
    console.log(document.getElementById('copyButton'))
    new ClipboardJS(document.getElementById('copyButton'))
});

function copyToClipboard() {

    if (isMobile()) {
        if (confirm('Deseja copiar o gabarito para a área de transferência?')) {
            document.getElementById('copyButton').click()
        }

        return;
    }

    console.log('2')
    document.getElementById('copyButton').click()
}

function copyToClipboard2(text) {

    const text_format = text.slice(1, -1);
    console.log(text_format);

    navigator.clipboard.writeText(text_format);

    if (confirm('Copiado, deseja reiniciar o processo?')) {
        document.location.reload();
    }
}

function openCalculator() {
    window.open('Calculator:///')
}

function isMobile() {
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

    return mobile ? true : false;

}