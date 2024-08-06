let contatos = require('./contatos')

function listar() {
    if (contatos.length === 0) {
        console.log("Nehuma residência cadastrada")
    }
    contatos.forEach((contato ) => {
        console.log(`${contato.id}.${contato.nome} .${contato.telefone} .   .${contato.email}`);
    })
}
module.exports = listar