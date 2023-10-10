const handleSubmit = (ev) => {
    ev.preventDefault();
    const Vowels = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "á",
        "é",
        "í",
        "ó",
        "ú",
        "à",
        "è",
        "ì",
        "ò",
        "ù",
        "ã",
        "ẽ",
        "ĩ",
        "õ",
        "ũ",
    ];
    const input = document.getElementById("textInput");
    const h4 = document.getElementById("result");
    if (input.value !== "") {
        const vowelsQuantity = input.value
            .toLowerCase()
            .split("")
            .filter((char) => Vowels.indexOf(char) !== -1);
        const result = vowelsQuantity.length;
        h4.innerHTML = `${result} vogais`;
    }
    else {
        h4.innerHTML = `Nenhuma palavra submetida!`;
    }
};
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
