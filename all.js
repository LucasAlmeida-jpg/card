function showLoading(element) {
    const messageCard = document.getElementById('messageCard');
    element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';

    setTimeout(function () {
        element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
        messageCard.classList.remove('d-none');

        setTimeout(function () {
            element.innerHTML = '<i class="fas fa-exclamation-circle"></i> Sistema indisponível';
        }, 3000);
    }, 2000); 
}

