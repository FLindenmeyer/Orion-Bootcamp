const handleSubmit = (ev: SubmitEvent) => {
  ev.preventDefault();

  const input = document.getElementById("textInput") as HTMLInputElement;
  const Vowels: string[] = ["a", "e", "i", "o", "u"];
  const h4 = document.getElementById("result");

  if (input.value !== "") {
    const vowelsQuantity: string[] = input.value
      .toLowerCase()
      .split("")
      .filter((char) => Vowels.indexOf(char) !== -1);

    const result = vowelsQuantity.length;
    h4.innerHTML = `${result} vogais`;
  } else {
    h4.innerHTML = `Nenhuma palavra submetida!`;
  }
};

const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", handleSubmit);
