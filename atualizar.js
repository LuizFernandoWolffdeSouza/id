let usuarios = require('./id')



function atualizar(contato) {
    if (contato.length === 0) {
        console.log("Nehuma residência cadastrada")
    }
    else{
        let nova = prompt('Digite o nome da residência que deseja alterar: ')
        let index  = Number(nova) - 1
        if( index >= 0 && index <= residencias.length) {
            let  nome = prompt('Digite o seu bairro:')
            let  telefone= prompt("Digite o sua rua: ")
            let email= Number (prompt('Digite o numcasa: '))
            let morador = [prompt("Digite o nome de moradores na residência: ")]
            residencias[index ] = {bairro, rua ,numcasa, moradores:morador}
            console.log("Residência atualizada com sucesso: ")
        }
        callback()
    }
}