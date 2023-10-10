const handleSubmit = (ev: SubmitEvent) => {
  ev.preventDefault();

  const Vowels: string[] = [
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
  const input = document.getElementById("textInput") as HTMLInputElement;
  const h4 = document.getElementById("result") as HTMLFormElement;

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
