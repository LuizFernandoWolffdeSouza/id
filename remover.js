let contatos = require('./contatos')

function remover(indice){
        if (indice >= 0 && indice <= contatos.length) {
            contatos.splice(indice, 1)
            console.log("Contato excluido")

        }
      
    

}
module.exports = remover