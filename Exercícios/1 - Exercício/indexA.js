/* A função recebe o parâmetro "text" fornecido e o converte para
 letras minúsculas. Em seguida, ela cria um novo array, onde cada
 caractere do texto é analisado em relação ao conjunto de vogais
 previamente definido.*/
function findVowelsQuantity(text) {
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
    const vowelsQuantity = text
        .toLowerCase()
        .split("")
        .filter((char) => Vowels.indexOf(char) !== -1);
    return vowelsQuantity.length;
}
console.log(findVowelsQuantity("Millie Graham"));
