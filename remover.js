let contatos = require('./contatos')

function remover(contatos){
        if (indice >= 0 && indice <= nomes.length) {
            contatos.splice(indice, 1)
            console.log("Contato excluido")

        }
      
    

}
module.exports = remover