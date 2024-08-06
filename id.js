const prompt = require('prompt-sync')()
const adicionar = require('./adicionar')
let contatos = require('./contatos')
const listar = require ('./listar')
const remover = require ('./remover')


menu()
function menu(params) {
    console.log(`
         1.Adicionar
         2.Listar
         3.Atualizar
         4.Remover
         5.Sair`
    )
    const resposta = prompt("Escolha uma opção: ")
    switch (resposta) {
        case '1':
            let nome = prompt('Digite o seu nome: ')
            let telefone = prompt('Digite o seu telefone: ')
            let email = prompt('Digite o seu email: ')
            adicionar({nome:nome, telefone:telefone, email:email})
            menu()

            break;
        case '2':
            listar()
            menu()
            break;
        case '3':
            atualizar()
            break;
        case '4':
            if (contatos.length == 0) {
                console.log("Nenhum contato cadastrado")
        
            }
            else {
                let remover = prompt("Digite qual contato deseja remover: ")
                var indice = Number(remover) - 1
                remover(indice)
            }
            
            break;

        default:
            break;
    }
}

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
    }
}


