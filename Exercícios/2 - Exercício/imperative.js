"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
let foundPerson;
// Função para encontrar uma pessoa pelo ID de forma imperativa
function findByIdImperative(id) {
    for (let i = 0; i < list_1.list.length; i++) {
        if (list_1.list[i].id === id) {
            foundPerson = list_1.list[i];
            break; // Encontrou a pessoa, então pare o loop
        }
    }
    console.log(foundPerson ? `\nA) Biografia: ${foundPerson.bio}` : "\nA) Pessoa não encontrada.");
    return foundPerson;
}
const personA = findByIdImperative(1);
// Função para obter o nome de uma pessoa de forma imperativa
function getName(person) {
    const name = person ? person.name : "Nome não encontrado.";
    console.log(`\nB) Nome: ${name}`);
}
// Chame a função passando personA como argumento
getName(personA);
// Função para remover um item pelo ID de forma imperativa
function removeItemByIdImperative(id) {
    for (let i = 0; i < list_1.list.length; i++) {
        if (list_1.list[i].id === id) {
            list_1.list.splice(i, 1); // Remove o item da list
            console.log(`\nC) Item com id=${id} removido da list! `);
        }
    }
}
removeItemByIdImperative(1);
// Função para editar um item pelo ID e atributo de forma imperativa
function editByIdImperative(id, item, text) {
    let itemFound = false; // Flag para verificar se o item foi encontrado
    for (let i = 0; i < list_1.list.length; i++) {
        if (list_1.list[i].id === id) {
            if (item === "name") {
                list_1.list[i].name = text; // Atualiza o nome
                console.log(`\nD) O "nome" foi atualizado para: ${list_1.list[i].name}`);
            }
            else if (item === "bio") {
                list_1.list[i].bio = text; // Atualiza a biografia
                console.log(`\nD) A "bio" foi atualizada para: ${list_1.list[i].bio}`);
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
console.log(`\nA List original sofreu modificações:`);
console.log(list_1.list);
