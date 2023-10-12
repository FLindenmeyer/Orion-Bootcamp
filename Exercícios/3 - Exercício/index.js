const list = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: " Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar",
    },
];
const handleSub = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    switch (form.id) {
        case "form-1B":
            const input1B = document.getElementById("input1B");
            const h4 = document.getElementById("vowelsResult");
            const text1B = input1B.value;
            if (text1B === "" || !isNaN(Number(text1B))) {
                h4.innerHTML = `Nenhuma palavra submetida!`;
            }
            else {
                const result1B = vowelsQuantity(text1B);
                result1B !== 0
                    ? (h4.innerHTML = `${result1B} vogais`)
                    : (h4.innerHTML = ` Nenhuma vogal encontrada!`);
            }
            break;
        case "form-2A":
            const input2A = document.getElementById("input2A");
            const result2A = findBioById(+input2A.value);
            result2A ? alert(`Biografia: ${result2A}`) : alert("Pessoa não encontrada");
            break;
        case "form-2B":
            const input2B = document.getElementById("input2B");
            const result2B = findNameById(+input2B.value);
            result2B ? alert(`Nome: ${result2B}`) : alert("Pessoa não encontrada");
            break;
        case "form-2C":
            const input2C = document.getElementById("input2C");
            const result2C = removeItemById(+input2C.value);
            result2C
                ? alert(`Item com id=${+input2C.value} removido com sucesso\nNova lista:\n${JSON.stringify(result2C, null, 2)}`)
                : alert("Pessoa não encontrada");
            break;
        case "form-2D":
            const input2D = document.getElementById("input2D");
            const item = document.querySelector('input[name="group"]:checked');
            const text = document.getElementById(`formText2D`);
            const person2D = editPersonById(+input2D.value, item.value, text.value);
            const result2D = person2D[item.value];
            result2D
                ? alert(`Pessoa com id=${input2D.value} teve a(o) ${item.value} modificada(o) para "${result2D}"\n${JSON.stringify(person2D, null, 2)}`)
                : alert("Pessoa não encontrada");
            break;
        default:
            alert("Opção invalida!");
            break;
    }
};
document.querySelectorAll("form").forEach((p) => p.addEventListener("submit", handleSub));
// Exercício 1.A
console.log(vowelsQuantity("Millie Graham"));
// Exercício 1.B
function vowelsQuantity(text) {
    // Expressão regular para encontrar todas as vogais, incluindo acentuadas (global e insensível a maiúsculas/minúsculas)
    const vowelsRegex = /[aeiouáàâãéêíóôõúü]/gi;
    // Encontrar todas as correspondências das vogais no text fornecido
    const vowelsQuantity = text.match(vowelsRegex);
    return vowelsQuantity ? vowelsQuantity.length : 0;
}
// Encontra uma pessoa pelo ID na lista
const findPersonById = (id) => list.find((person) => person.id === id);
// A) Função para encontrar e exibir a biografia de uma pessoa pelo ID
function findBioById(id) {
    //Chama a função findPersonById e armazena o resultado em personA
    const personA = findPersonById(id);
    //Se personA for avaliado como verdadeiro, retorna a bio, caso contrario, undefined
    return personA ? personA.bio : undefined;
}
// B) Função para encontrar e exibir o nome de uma pessoa pelo ID
function findNameById(id) {
    const personB = findPersonById(id);
    return personB ? personB.name : undefined;
}
// C) Função para remover um item específico de uma pessoa pelo ID
function removeItemById(id) {
    // cria uma nova lista filtrando o item com o id fornecido para fora da lista
    const newList = list.filter((person) => person.id !== id);
    // validação caso faça uma busca com id nao existente
    return newList.length !== list.length ? newList : undefined;
}
// D) Função que altera a bio ou o name a partir de um id passado
function editPersonById(id, item, text) {
    const personD = findPersonById(id);
    const option = item.toLowerCase();
    if (personD) {
        // Se uma pessoa for encontrada, execute o seguinte bloco.
        let newPerson = { ...personD };
        // Cria uma cópia do objeto original "personD" usando o operador spread.
        if (option === "name") {
            newPerson.name = text;
        }
        else if (option === "bio") {
            newPerson.bio = text;
        }
        return newPerson;
    }
    return undefined;
}
////////////////////////////////////////////////////////////////
//Paradigma Imperativo
const newList = [...list];
let foundPerson;
// Função para encontrar uma pessoa pelo ID de forma imperativa
function findByIdImperative(id) {
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === id) {
            foundPerson = newList[i];
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
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === id) {
            newList.splice(i, 1); // Remove o item da lista
            console.log(`\nC) Item com id=${id} removido da lista! `);
            console.log(newList);
        }
    }
}
removeItemByIdImperative(1);
// Função para editar um item pelo ID e atributo de forma imperativa
function editByIdImperative(id, item, text) {
    let itemFound = false; // Flag para verificar se o item foi encontrado
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === id) {
            if (item === "name") {
                newList[i].name = text; // Atualiza o nome
                console.log(`\nD) O "nome" foi atualizado para: ${newList[i].name}`);
                console.log(newList[i]);
            }
            else if (item === "bio") {
                newList[i].bio = text; // Atualiza a biografia
                console.log(`\nD) A "bio" foi atualizada para: ${newList[i].bio}`);
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
console.log(`\nA Person original sofreu modificações:`);
console.log(newList);
