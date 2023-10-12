"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
// Função para encontrar uma pessoa na list pelo id.
function findPersonById(id) {
    const foundPerson = list_1.list.find((person) => person.id === id);
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
// C) Função que apaga um item da list a partir de um id passado
function removeItemById(id) {
    const newList = list_1.list.filter((person) => person.id !== id);
    console.log(`\nC) Nova list com item de id=${id} removido: `);
    console.log(newList);
    return newList;
}
removeItemById(1);
// D) Função para editar um item específico de uma pessoa pelo ID
function editPersonByIdFunctional(id, item, text) {
    const personD = findPersonById(id);
    const option = item.toLowerCase();
    if (personD) {
        // Se uma pessoa for encontrada, execute o seguinte bloco.
        let newPerson = { ...personD };
        // Cria uma cópia do objeto original "personD" usando o operador spread.
        if (option === "name") {
            // Se o "item" for "name", execute este bloco.
            newPerson.name = text;
            // Atualiza a propriedade "name" da cópia do objeto com o novo valor "text".
            console.log(`\nD) O nome foi atualizado para: '${newPerson.name}'`);
            // Exibe uma mensagem indicando que o nome foi atualizado.
        }
        else if (option === "bio") {
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
console.log(`\nA list original continua imutável:`);
console.log(list_1.list);
