import { Person, list } from "./list";

// Função para encontrar uma pessoa na lista pelo id.
function findPersonById(id: number): Person | undefined {
  const foundPerson: Person = list.find((person) => person.id === id);
  return foundPerson;
}

// A) Função que retorna a bio do id passado
function findBioById(id: number): string {
  const personA: Person = findPersonById(id);
  console.log(personA ? `\nA) Biografia: ${personA.bio}` : "\nA) Biografia não encontrada!");
  return personA ? personA.bio : "\nA) Biografia não encontrada!";
}
findBioById(1);

// B) Função para encontrar e exibir o nome de uma pessoa pelo ID
function findNameById(id: number): string {
  const personB: Person = findPersonById(id);
  console.log(`\nB) Nome: ${personB.name}`);
  return personB ? personB.name : "\nB) Nome não encontrado!";
}
findNameById(2);

// C) Função que apaga um item da lista a partir de um id passado
function removeItemById(id: number): Person[] {
  const newList: Person[] = list.filter((person) => person.id !== id);
  console.log(`\nC) Item de id=${id} removido com sucesso.\nNova Lista:`);
  console.log(newList);
  return newList;
}

removeItemById(1);

// D) Função para editar um item específico de uma pessoa pelo ID
function editPersonByIdFunctional(id: number, item: string, text: string): Person | undefined {
  const personD: Person = findPersonById(id);
  const option: string = item.toLowerCase();

  if (personD) {
    // Se uma pessoa for encontrada, execute o seguinte bloco.
    let newPerson: Person = { ...personD };
    // Cria uma cópia do objeto original "personD" usando o operador spread.

    if (option === "name") {
      // Se o "item" for "name", execute este bloco.
      newPerson.name = text;
      // Atualiza a propriedade "name" da cópia do objeto com o novo valor "text".
      console.log(`\nD) O nome foi atualizado para: '${newPerson.name}'`);
      // Exibe uma mensagem indicando que o nome foi atualizado.
    } else if (option === "bio") {
      newPerson.bio = text;
      console.log(`\nD) A bio foi atualizada para:  '${newPerson.bio}'`);
    }
    return newPerson;
    // Retorna a cópia do objeto modificado.
  }

  // Se a pessoa não for encontrada, exibe uma mensagem indicando que a pessoa não foi encontrada.
  console.log("\nD) Pessoa não encontrada");
  return undefined;
}
const resultD = editPersonByIdFunctional(3, "bio", "a bio foi atualizada!");
console.log(resultD);

console.log(`\nA lista original continua imutável:`);
console.log(list);
