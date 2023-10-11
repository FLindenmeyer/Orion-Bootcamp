import { Lista, lista } from "./list";

// Função para encontrar uma pessoa na lista pelo id.
function findPersonById(id: number): Lista | undefined {
  const foundPerson = lista.find((element) => element.id === id);
  return foundPerson;
}

// A) Função que retorna a bio do id passado
function findBioById(id: number): string {
  const personA = findPersonById(id);
  console.log(personA ? `\nA) Biografia: ${personA.bio}` : "\nA) Biografia não encontrada!");
  return personA ? personA.bio : "\nA) Biografia não encontrada!";
}
findBioById(1);

// B) Função para encontrar e exibir o nome de uma pessoa pelo ID
function findNameById(id: number): string {
  const personB = findPersonById(id);
  console.log(`\nB) Nome: ${personB.name}`);
  return personB ? personB.name : "\nB) Nome não encontrado!";
}
findNameById(2);

// C) Função que apaga um item da lista a partir de um id passado
function removeItemById(id: number): object {
  const newList = lista.filter((person) => person.id !== id);
  console.log(`\nC) Nova lista com item de id=${id} removido: `);
  console.log(newList);
  return newList;
}

removeItemById(3);

// D) Função para editar um item específico de uma pessoa pelo ID
function editById(id: number, item: string, text: string): Lista | undefined {
  const personD = findPersonById(id);
  if (item === "name") {
    personD.name = text;
    console.log(`\nD) O ${item} foi atualizada para: ${personD.name}`);
  } else if (item === "bio") {
    personD.bio = text;
    console.log(`\nD) A ${item} foi atualizada para: ${personD.bio}`);
  }
  console.log("\nPersonD atualizado:");
  console.log(personD);
  return personD;
}

editById(4, "bio", "a bio foi atualizada!");
