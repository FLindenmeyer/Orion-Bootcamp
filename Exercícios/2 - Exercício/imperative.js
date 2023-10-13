"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
let foundPerson;
// Função para encontrar uma pessoa pelo ID de forma imperativa
function findByIdImperativo(id) {
    for (let i = 0; i < list_1.lista.length; i++) {
        if (list_1.lista[i].id === id) {
            foundPerson = list_1.lista[i];
            break; // Encontrou a pessoa, então pare o loop
        }
    }
    console.log(foundPerson ? `\nA) Biografia: ${foundPerson.bio}` : "\nA) Pessoa não encontrada.");
    return foundPerson;
}
const personA = findByIdImperativo(1);
// Função para obter o nome de uma pessoa de forma imperativa
function getName(person) {
    const name = person ? person.name : "Nome não encontrado.";
    console.log(`\nB) Nome: ${name}`);
}
// Chame a função passando personA como argumento
getName(personA);
// Função para remover um item pelo ID de forma imperativa
function removeItemByIdImperativo(id) {
    for (let i = 0; i < list_1.lista.length; i++) {
        if (list_1.lista[i].id === id) {
            list_1.lista.splice(i, 1); // Remove o item da lista
            console.log(`\nC) Item com id=${id} removido da lista! `);
        }
    }
}
removeItemByIdImperativo(1);
// Função para editar um item pelo ID e atributo de forma imperativa
function editByIdImperativo(id, item, text) {
    let itemFound = false; // Flag para verificar se o item foi encontrado
    for (let i = 0; i < list_1.lista.length; i++) {
        if (list_1.lista[i].id === id) {
            if (item === "name") {
                list_1.lista[i].name = text; // Atualiza o nome
                console.log(`\nD) O "nome" foi atualizado para: ${list_1.lista[i].name}`);
            }
            else if (item === "bio") {
                list_1.lista[i].bio = text; // Atualiza a biografia
                console.log(`\nD) A "bio" foi atualizada para: ${list_1.lista[i].bio}`);
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
console.log(list_1.lista);
