document.getElementById("openMenuBtn").addEventListener("click", openModal);
document.getElementById("overlay").addEventListener("click", closeModal);

window.onload = function() {
    document.getElementById('linkInput').value = window.location.href;
};

function openModal() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById('overlay').style.display = 'flex';

}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById('overlay').style.display = 'none';

}
function shareOn(platform) {
    const urlToShare = encodeURIComponent(window.location.href);

    switch (platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`, '_blank');
            break;

        case 'x':
            window.open(`https://twitter.com/intent/tweet?url=${urlToShare}&text=Texto do tweet`, '_blank');
            break;

        case 'whatsapp':
            window.open(`https://api.whatsapp.com/send?text=${urlToShare}`, '_blank');
            break;

        case 'linkedin':
            window.open(`https://www.linkedin.com/shareArticle?url=${urlToShare}`, '_blank');
            break;

        case 'messenger':
            window.open(`https://www.facebook.com/dialog/send?link=${urlToShare}&app_id=APP_ID`, '_blank');
            break;

        case 'snapchat':
           window.open(`snapchat://creativeKitWeb/camera/1?attachmentUrl=https://linktr.ee/devecoffee`)
            break;

        // Adicione mais casos conforme necessário para outras plataformas.

        default:
            alert('Plataforma de compartilhamento não reconhecida.');
    }
}

function shareViaEmail() {
    // Lógica para compartilhar via email
    window.open("mailto:?subject=Assunto&body=Corpo da mensagem e link: " + window.location.href);
    console.log("Compartilhar via Email");
}

function copyLink() {
    // Cria um elemento de input temporário
    const input = document.createElement('input');
    // Define o valor do input para o URL da página atual
    input.value = window.location.href;
    // Adiciona o input temporário ao corpo do documento
    document.body.appendChild(input);
    // Seleciona o conteúdo do input
    input.select();
    // Executa o comando de cópia
    document.execCommand('copy');
    // Remove o input temporário do corpo do documento
    document.body.removeChild(input);
    // Exibe uma mensagem de confirmação (opcional)
    alert('Link copiado para a área de transferência');
}