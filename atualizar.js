let contatos = require('./contatos')

function atualizar(id,novousuario) {
    const index = Number(contatos.findIndex(cont => cont.id === id))
    if (index !== -1) {
        contatos[index] = {id, ...novousuario}
    }
}

  

module.exports = atualizar


