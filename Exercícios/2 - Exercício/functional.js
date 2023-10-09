"use strict";
// Importando os tipos e dados da lista de outro arquivo chamado "list"
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = require("./list");
function findByIdFunctional(id) {
    const foundPerson = list_1.lista.find((element) => element.id === id);
    return foundPerson;
}
// A) Função que retorne a bio do id passado
function findBioById(id) {
    const personA = findByIdFunctional(id);
    return personA ? personA.bio : "> err: Biografia não encontrada!";
}
console.log(`\nA) Biografia: ${findBioById(1)}`);
// B) Mostrar o nome da pessoa encontrada pelo ID
function findNameById(id) {
    const personB = findByIdFunctional(id);
    return personB ? personB.name : "> err: Nome não encontrado!";
}
console.log(`\nB) Nome: ${findNameById(1)}`);
// C) Função que apaga um item da lista a partir de um id passado
function removeItemById(id) {
    const newList = list_1.lista.filter((person) => person.id !== id);
    console.log(`\nC) Nova lista com item de id=${id} removido: `);
    console.log(newList);
    return newList;
}
removeItemById(3);
// D) Função que altera a bio ou o name a partir de um id passado
function editByIdFuncional(id, item, text) {
    const personD = findByIdFunctional(id);
    if (personD) {
        // Se uma pessoa for encontrada, execute o seguinte bloco.
        let newPerson = { ...personD };
        // Cria uma cópia do objeto original "personD" usando o operador spread.
        if (item === "name") {
            // Se o "item" for "name", execute este bloco.
            newPerson.name = text;
            // Atualiza a propriedade "name" da cópia do objeto com o novo valor "text".
            console.log(`\nD) O nome foi atualizado para: '${newPerson.name}'`);
            // Exibe uma mensagem indicando que o nome foi atualizado.
        }
        else if (item === "bio") {
            newPerson.bio = text;
            console.log(`\nD) A bio foi atualizada para:  '${newPerson.bio}'`);
        }
        return newPerson;
        // Retorna a cópia do objeto modificado.
    }
    console.log("\nD) Pessoa não encontrada");
    // Se a pessoa não for encontrada, exibe uma mensagem indicando que a pessoa não foi encontrada.
}
const resultD = editByIdFuncional(3, "bio", "a bio foi atualizada!");
console.log(resultD);
console.log(`\nA Lista original continua imutável:`);
console.log(list_1.lista);
