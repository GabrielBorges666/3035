document.querySelectorAll('.adicionar-carrinho').forEach(button => {
    button.addEventListener('click', (event) => {
        const produto = event.target.closest('.produto');
        const nome = produto.getAttribute('data-nome');
        const valor = produto.getAttribute('data-valor');

        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push({ nome, valor });
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Adicionando animação de "feedback" ao botão
        const btn = event.target;
        btn.classList.add('animar');

        setTimeout(() => {
            btn.classList.remove('animar');
        }, 1000);

        alert(`${nome} foi adicionado ao carrinho!`);
    });
});

// Animação para o botão "Adicionar ao Carrinho"
const style = document.createElement('style');
style.innerHTML = `
    .animar {
        animation: pulse 0.8s ease;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);
