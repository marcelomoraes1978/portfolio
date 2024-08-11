// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todas as imagens com a classe 'certificate-image'
    const certificates = document.querySelectorAll('.certificate-image');

    // Itera sobre todas as imagens selecionadas
    certificates.forEach(cert => {

        // Adiciona um evento de clique a cada imagem
        cert.addEventListener('click', () => {

            // Cria um novo elemento 'div' para o overlay
            const overlay = document.createElement('div');
            overlay.classList.add('overlay'); // Adiciona a classe 'overlay' para estilização

            // Cria um novo elemento 'img' para exibir a imagem ampliada
            const img = document.createElement('img');
            img.src = cert.src; // Define a fonte da imagem ampliada como a mesma da imagem clicada
            img.classList.add('overlay-image'); // Adiciona a classe 'overlay-image' para estilização

            // Adiciona a imagem ao overlay
            overlay.appendChild(img);

            // Adiciona o overlay ao corpo do documento
            document.body.appendChild(overlay);

            // Adiciona um evento de clique ao overlay para fechá-lo
            overlay.addEventListener('click', () => {
                // Remove o overlay do corpo do documento
                document.body.removeChild(overlay);
            });
        });
    });
});
