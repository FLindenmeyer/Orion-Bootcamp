"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
// Função para encontrar uma pessoa na lista pelo id.
function findPersonById(id) {
    const foundPerson = list_1.list.find((element) => element.id === id);
    return foundPerson;
}
// A) Função que retorna a bio do id passado
function findBioById(id) {
    const personA = findPersonById(id);
    console.log(personA ? `\nA) Biografia: ${personA.bio}` : "\nA) Biografia não encontrada!");
    return personA ? personA.bio : "\nA) Biografia não encontrada!";
}
findBioById(1);
// B) Função para encontrar e exibir o nome de uma pessoa pelo ID
function findNameById(id) {
    const personB = findPersonById(id);
    console.log(`\nB) Nome: ${personB.name}`);
    return personB ? personB.name : "\nB) Nome não encontrado!";
}
findNameById(2);
// C) Função que apaga um item da lista a partir de um id passado
function removeItemById(id) {
    const newList = list_1.list.filter((person) => person.id !== id);
    console.log(`\nC) Item de id=${id} removido com sucesso.\nNova Lista:`);
    console.log(newList);
    return newList;
}
removeItemById(3);
// D) Função para editar um item específico de uma pessoa pelo ID
function editById(id, item, text) {
    const personD = findPersonById(id);
    const option = item.toLowerCase();
    if (personD && option === "name") {
        personD.name = text;
        console.log(`\nD) O ${option} foi atualizada para: ${personD.name}`);
    }
    else if (personD && option === "bio") {
        personD.bio = text;
        console.log(`\nD) A ${option} foi atualizada para: ${personD.bio}`);
    }
    console.log("\nPersonD atualizado:");
    console.log(personD);
    return personD ? personD : undefined;
}
editById(4, "bio", "a bio foi atualizada!");
