import { Person, list } from "./list";

let foundPerson: Person | undefined;

// Função para encontrar uma pessoa pelo ID de forma imperativa
function findByIdImperative(id: number): Person | undefined {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      foundPerson = list[i];
      break; // Encontrou a pessoa, então pare o loop
    }
  }
  console.log(foundPerson ? `\nA) Biografia: ${foundPerson.bio}` : "\nA) Pessoa não encontrada.");
  return foundPerson;
}

const personA: Person = findByIdImperative(1);

// Função para obter o nome de uma pessoa de forma imperativa
function getName(person: Person | undefined): void {
  const name: string = person ? person.name : "Nome não encontrado.";
  console.log(`\nB) Nome: ${name}`);
}

// Chame a função passando personA como argumento
getName(personA);

// Função para remover um item pelo ID de forma imperativa
function removeItemByIdImperative(id: number): void {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list.splice(i, 1); // Remove o item da lista
      console.log(`\nC) Item com id=${id} removido da lista! `);
    }
  }
}

removeItemByIdImperative(1);

// Função para editar um item pelo ID e atributo de forma imperativa
function editByIdImperative(id: number, item: string, text: string): void {
  let itemFound = false; // Flag para verificar se o item foi encontrado
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      if (item === "name") {
        list[i].name = text; // Atualiza o nome
        console.log(`\nD) O "nome" foi atualizado para: ${list[i].name}`);
      } else if (item === "bio") {
        list[i].bio = text; // Atualiza a biografia
        console.log(`\nD) A "bio" foi atualizada para: ${list[i].bio}`);
      }
      itemFound = true; // Item encontrado
      break; // Pare o loop depois de encontrar o item
    }
  }

  if (!itemFound) {
    console.log(`\nD) Item não encontrado, impossível editar!`);
  }
}

editByIdImperative(2, "name", "Diego");

console.log(`\nA lista original sofreu modificações:`);
console.log(list);
