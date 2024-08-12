let contatos = require('./contatos')

function adicionar(contato) {
    contato.id = contatos.length + 1
    let jaexiste = contatos.find(cont => cont.email === contato.email)
    if(!jaexiste){
        contatos.push(contato)
    }
    else{
        console.log("Já existe um email cadastrado");
    }
    


    
}
module.exports = adicionar