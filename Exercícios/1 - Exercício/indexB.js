//1.B)
const handleSubmit = (ev) => {
    ev.preventDefault();
    const input = document.getElementById("textInput");
    const h4 = document.getElementById("result");
    // Verificar se o campo de entrada está vazio ou se é um número
    if (input.value === "" || !isNaN(Number(input.value))) {
        h4.innerHTML = `Nenhuma palavra submetida!`;
    }
    else {
        // Expressão regular para encontrar vogais criada
        const vowelsRegex = /[aeiouáàâãéêíóôõúü]/gi;
        // Procura correspondências da regex com o texto
        const vowelsQuantity = input.value.match(vowelsRegex);
        vowelsQuantity
            ? (h4.innerHTML = `${vowelsQuantity.length} vogais`)
            : (h4.innerHTML = ` Nenhuma vogal encontrada!`);
    }
};
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
