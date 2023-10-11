//1.B)
const handleSubmit = (ev: SubmitEvent): void => {
  ev.preventDefault();
  const input = document.getElementById("textInput") as HTMLInputElement;
  const h4 = document.getElementById("result") as HTMLElement;

  // Verificar se o campo de entrada está vazio ou se é um número
  if (input.value === "" || !isNaN(Number(input.value))) {
    h4.innerHTML = `Nenhuma palavra submetida!`;
  } else {
    // Expressão regular para encontrar vogais criada
    const vowelsRegex: RegExp = /[aeiouáàâãéêíóôõúü]/gi;
    // Procura correspondências da regex com o texto
    const vowelsQuantity = input.value.match(vowelsRegex);
    vowelsQuantity
      ? (h4.innerHTML = `${vowelsQuantity.length} vogais`)
      : (h4.innerHTML = ` Nenhuma vogal encontrada!`);
  }
};

const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", handleSubmit);
