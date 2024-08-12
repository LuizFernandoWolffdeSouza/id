let contatos = require('./contatos')

function listar() {
    if (contatos.length === 0) {
        console.log("Nehuma residência cadastrada")
    }
    contatos.forEach((contato,index ) => {
       console.log(`
        ID: ${contato.id}
        Nome: ${contato.nome}
        Telefone: ${contato.telefone}
        Email: ${contato.email}
        `);
    })
}
module.exports = listar