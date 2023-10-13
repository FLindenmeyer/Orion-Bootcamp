function findVowelsQuantity(text: string): number | undefined {
  // Expressão regular para encontrar todas as vogais, incluindo acentuadas (global e insensível a maiúsculas/minúsculas)
  const vowelsRegex: RegExp = /[aeiouáàâãéêíóôõúü]/gi;

  // Encontrar todas as correspondências das vogais no text fornecido
  const vowelsQuantity = text.match(vowelsRegex);

  return vowelsQuantity ? vowelsQuantity.length : 0;
}

console.log(findVowelsQuantity("Millie Graham"));
