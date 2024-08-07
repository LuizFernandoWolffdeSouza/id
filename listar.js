let contatos = require('./contatos')

function listar() {
    if (contatos.length === 0) {
        console.log("Nehuma residência cadastrada")
    }
    contatos.forEach((contato ) => {
       console.log(contato);
    })
}
module.exports = listar