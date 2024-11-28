document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.ftos img');

    //criar
    function createOverlay(src) {
        // fundo
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1000';

        //ampliação
        const enlargedImage = document.createElement('img');
        enlargedImage.src = src;
        enlargedImage.style.maxWidth = '90%';
        enlargedImage.style.maxHeight = '90%';
        enlargedImage.style.borderRadius = '10px';
        enlargedImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';

        // fecharr
        const closeButton = document.createElement('button');
        closeButton.id = 'close-btn';
        closeButton.textContent = 'Fechar';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '20px';
        closeButton.style.right = '20px';
        closeButton.style.padding = '10px 20px';
        closeButton.style.backgroundColor = '#ff8c42';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '5px';
        closeButton.style.cursor = 'pointer';

        // adicionar elemntos
        overlay.appendChild(enlargedImage);
        overlay.appendChild(closeButton);

        // encorporar
        document.body.appendChild(overlay);

        //botao fechar

        closeButton.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        // clique fora
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    }

    // clicar para ampliar
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const src = image.getAttribute('src');
            createOverlay(src);
        });
    });
});

// saiba mais
function showMoreInfo(section) {
    const messages = {
        culinaria: "O pad thai nada mais é do que um macarrão de arroz frito e que leva um molho thai, tofu, moyashi, ovos e pode acompanhar uma proteína.",
        historia: "A Tailândia sofreu um rápido crescimento econômico entre meados da década de 1980 e fim da década de 1990, tornando-se um país recentemente industrializado e um grande exportado.",
        cultura: "A cultura tailandesa incorpora uma grande influência da Índia, China, Camboja e outras partes do Sudeste Asiático. Ela é influenciada principalmente pelo animismo e o Budismo."
    };
    alert(messages[section]);}

    
