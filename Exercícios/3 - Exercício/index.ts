interface Lista {
  id: number;
  name: string;
  bio: string;
}

const lista: Array<Lista> = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: " Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar",
  },
];

const handleSub = (ev: SubmitEvent) => {
  ev.preventDefault();
  const form = ev.currentTarget as HTMLFormElement;

  switch (form.id) {
    case "form-1B":
      const input1B = document.getElementById("input1B") as HTMLInputElement;
      const h4 = document.getElementById("vowelsResult") as HTMLElement;
      const text1B = input1B.value;

      if (text1B === "" || !isNaN(Number(text1B))) {
        h4.innerHTML = `Nenhuma palavra submetida!`;
      } else {
        const result1B = vowelsQuantity(text1B);
        result1B !== 0
          ? (h4.innerHTML = `${result1B} vogais`)
          : (h4.innerHTML = ` Nenhuma vogal encontrada!`);
      }

      break;

    case "form-2A":
      const input2A = document.getElementById("input2A") as HTMLFormElement;

      const result2A = findBioById(+input2A.value);

      result2A ? alert(`Biografia: ${result2A}`) : alert("Pessoa não encontrada");
      break;

    case "form-2B":
      const input2B = document.getElementById("input2B") as HTMLFormElement;

      const result2B = findNameById(+input2B.value);
      result2B ? alert(`Nome: ${result2B}`) : alert("Pessoa não encontrada");
      break;

    case "form-2C":
      const input2C = document.getElementById("input2C") as HTMLFormElement;

      const result2C = removeItemById(+input2C.value);

      result2C
        ? alert(
            `Item com id=${+input2C.value} removido com sucesso\nNova lista:\n${JSON.stringify(
              result2C,
              null,
              2,
            )}`,
          )
        : alert("Pessoa não encontrada");
      break;

    case "form-2D":
      const input2D = document.getElementById("input2D") as HTMLFormElement;
      const item = document.querySelector('input[name="group"]:checked') as HTMLFormElement;
      const text = document.getElementById(`formText2D`) as HTMLFormElement;
      const person2D = editPersonById(+input2D.value, item.value, text.value);
      const result2D = person2D[item.value];
      result2D
        ? alert(
            `Pessoa com id=${+input2D.value} teve a(o) ${
              item.value
            } modificado para "${result2D}"\n${JSON.stringify(person2D, null, 2)}`,
          )
        : alert("Pessoa não encontrada");
      break;

    default:
      alert("Opção invalida!");
      break;
  }
};

document.querySelectorAll("form").forEach((p) => p.addEventListener("submit", handleSub));

// Exercício 1.A
console.log(vowelsQuantity("Millie Graham"));

// Exercício 1.B
function vowelsQuantity(text: string): number {
  // Expressão regular para encontrar todas as vogais, incluindo acentuadas (global e insensível a maiúsculas/minúsculas)
  const vowelsRegex: RegExp = /[aeiouáàâãéêíóôõúü]/gi;

  // Encontrar todas as correspondências das vogais no text fornecido
  const vowelsQuantity = text.match(vowelsRegex);
  return vowelsQuantity ? vowelsQuantity.length : 0;
}

// Encontra uma pessoa pelo ID na lista
const findPersonById = (id: number) => lista.find((person) => person.id === id);

// A) Função para encontrar e exibir a biografia de uma pessoa pelo ID
function findBioById(id: number): string | undefined {
  const personA = findPersonById(id);
  return personA ? personA.bio : undefined;
}

// B) Função para encontrar e exibir o nome de uma pessoa pelo ID
function findNameById(id: number): string | undefined {
  const personB = findPersonById(id);
  return personB ? personB.name : undefined;
}

// C) Função para remover um item específico de uma pessoa pelo ID
function removeItemById(id: number): Object | undefined {
  // cria uma nova lista excluindo o item com o id fornecido como parâmetro
  const newList = lista.filter((person) => person.id !== id);

  return newList.length !== lista.length ? newList : undefined;
}

// D) Função para editar um item específico de uma pessoa pelo ID
function editPersonById(id: number, item: string, text: string): Object | undefined {
  const personD = findPersonById(id);
  if (personD && item === "name") {
    personD.name = text;
    return personD;
  } else if (personD && item === "bio") {
    personD.bio = text;
    return personD;
  }

  return undefined;
}
