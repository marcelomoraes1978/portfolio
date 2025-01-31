document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.certificate-image');

    certificates.forEach(cert => {
        cert.addEventListener('click', () => {
            if (document.querySelector('.overlay')) return;

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.setAttribute('aria-hidden', 'true');

            const img = document.createElement('img');
            img.src = cert.src;
            img.classList.add('overlay-image');

            const closeButton = document.createElement('span');
            closeButton.textContent = 'X';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '20px';
            closeButton.style.right = '20px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.color = '#fff';
            closeButton.style.fontSize = '24px';

            overlay.appendChild(img);
            overlay.appendChild(closeButton);
            document.body.appendChild(overlay);

            setTimeout(() => overlay.classList.add('active'), 10);

            closeButton.addEventListener('click', () => {
                overlay.classList.remove('active');
                setTimeout(() => document.body.removeChild(overlay), 300);
            });

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                    setTimeout(() => document.body.removeChild(overlay), 300);
                }
            });
        });
    });
});