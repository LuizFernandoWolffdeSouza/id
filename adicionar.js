let contatos = require('./contatos')

function adicionar(contato) {
    contato.id = contatos.length + 1
    contatos.push(contato)
    console.log("contato cadastrado")
    


    
}
module.exports = adicionar