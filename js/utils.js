function copyToClipboard(text) {

    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

    if(mobile) {
        if(confirm('Deseja copiar o gabarito para a área de transferência?')) {
            navigator.clipboard.writeText(text);
        }
        
        return;
    }

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