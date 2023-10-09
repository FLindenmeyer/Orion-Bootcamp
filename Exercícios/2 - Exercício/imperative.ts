import { Lista, lista } from "./list";

let foundPerson: Lista | undefined;

// Função para encontrar uma pessoa pelo ID de forma imperativa
function findByIdImperativo(id: number): Lista | undefined {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      foundPerson = lista[i];
      break; // Encontrou a pessoa, então pare o loop
    }
  }
  console.log(foundPerson ? `\nA) Biografia: ${foundPerson.bio}` : "\nA) Pessoa não encontrada.");
  return foundPerson;
}

const personA = findByIdImperativo(1);

// Função para obter o nome de uma pessoa de forma imperativa
function getName(person: Lista | undefined): void {
  const name = person ? person.name : "Nome não encontrado.";
  console.log(`\nB) Nome: ${name}`);
}

// Chame a função passando personA como argumento
getName(personA);

// Função para remover um item pelo ID de forma imperativa
function removeItemByIdImperativo(id: number): void {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      lista.splice(i, 1); // Remove o item da lista
      console.log(`\nC) Item com id=${id} removido da lista! `);
    }
  }
}

removeItemByIdImperativo(1);

// Função para editar um item pelo ID e atributo de forma imperativa
function editByIdImperativo(id: number, item: string, text: string): void {
  let itemFound = false; // Flag para verificar se o item foi encontrado
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      if (item === "name") {
        lista[i].name = text; // Atualiza o nome
        console.log(`\nD) O "nome" foi atualizado para: ${lista[i].name}`);
      } else if (item === "bio") {
        lista[i].bio = text; // Atualiza a biografia
        console.log(`\nD) A "bio" foi atualizada para: ${lista[i].bio}`);
      }
      itemFound = true; // Item encontrado
      break; // Pare o loop depois de encontrar o item
    }
  }

  if (!itemFound) {
    console.log(`\nD) Item não encontrado, impossível editar!`);
  }
}

editByIdImperativo(2, "name", "Diego");

console.log(`\nA Lista original sofreu modificações:`);
console.log(lista);
