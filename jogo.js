let tentativas = 10;
let aleatorio = Math.floor(Math.random() * (100 - 1) + 1);

function calcularJogo() {
    let palpite = parseInt(document.getElementById("palpite").value);

    let dentro = (palpite > 0 && palpite <= 100) ? true : false;
    
    if (dentro) {
        if (aleatorio > palpite) {
            tentativas = tentativas - 1;
            document.getElementById("resultado").textContent = "O número secreto é maior!";
            if (tentativas < 0) {
                document.getElementById("resultado").textContent = "Você perdeu! O número secreto era: " + Math.floor(aleatorio);
            } else {
                document.getElementById("tentativas").textContent = "Seu número de tentativas é: " + tentativas;
            }
        } else if (aleatorio < palpite) {
            tentativas = tentativas - 1;
            document.getElementById("resultado").textContent = "O número secreto é menor!";
            if (tentativas < 0) {
                document.getElementById("resultado").textContent = "Você perdeu! O número secreto era: " + Math.floor(aleatorio);
            } else {
                document.getElementById("tentativas").textContent = "Seu número de tentativas é: " + tentativas;
            }
        } else if (aleatorio === palpite) {
            tentativas = 10;
            document.getElementById("resultado").textContent = "Você acertou!";
            if (tentativas < 0) {
                document.getElementById("resultado").textContent = "Você perdeu! O número secreto era: " + Math.floor(aleatorio);
            } else {
                document.getElementById("tentativas").textContent = "Seu número de tentativas é: " + tentativas;
            }
        }
    } else {
        tentativas = tentativas - 1;
        document.getElementById("resultado").textContent = "Você errou!";
        if (tentativas < 0) {
            document.getElementById("resultado").textContent = "Você perdeu! O número secreto era: " + Math.floor(aleatorio);
        } else {
            document.getElementById("tentativas").textContent = "Seu número de tentativas é: " + tentativas;
        }
    }

    let form = document.getElementById("form");
    
    function handleForm(event) {
        event.preventDefault();
    }

    form.addEventListener('submit', handleForm);
}