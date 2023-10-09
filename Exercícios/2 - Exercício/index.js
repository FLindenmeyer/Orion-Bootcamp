"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa a lista de pessoas do módulo 'list'
const list_1 = require("./list");
// Encontra uma pessoa pelo ID na lista
const findById = (id) => list_1.lista.find((person) => person.id === id);
// A) Função para encontrar e exibir a biografia de uma pessoa pelo ID
function findBioById(id) {
    const personA = findById(id);
    console.log(`\nA) Biografia: ${personA.bio}`);
    return personA.bio;
}
findBioById(1);
// B) Função para encontrar e exibir o nome de uma pessoa pelo ID
function findNameById(id) {
    const personB = findById(id);
    console.log(`\nB) Nome: ${personB.name}`);
    return personB.name;
}
findNameById(2);
// C) Função para remover um item específico de uma pessoa pelo ID
function removeItemById(id) {
    const newList = list_1.lista.filter((person) => person.id !== id);
    console.log(`\nC) Nova lista com item de id=${id} removido: `);
    console.log(newList);
    return newList;
}
removeItemById(3);
// D) Função para editar um item específico de uma pessoa pelo ID
function editById(id, item, text) {
    const personD = findById(id);
    if (item === "name") {
        personD.name = text;
        console.log(`\nD) O ${item} foi atualizada para: ${personD.name}`);
    }
    else if (item === "bio") {
        personD.bio = text;
        console.log(`\nD) A ${item} foi atualizada para: ${personD.bio}`);
    }
    console.log("\nPersonD atualizado:");
    console.log(personD);
    return personD;
}
editById(4, "bio", "a bio foi atualizada!");
