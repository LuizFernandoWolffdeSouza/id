const prompt = require('prompt-sync')()
const adicionar = require('./adicionar')
let contatos = require('./contatos')
const listar = require('./listar')
const remover = require('./remover')
const atualizar = require('./atualizar')


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
            adicionar({ nome: nome, telefone: telefone, email: email })
            menu()

            break;
        case '2':
            listar()
            menu()
            break;
        case '3':
           
            if (contatos.length == 0) {
                console.log("Nenhum contato cadastrado")
        
            } else {
                listar()
                index = Number(prompt("Digite o numero do id que deseja atualizar: "))
                let novoNome = prompt('Digite o seu nome: ')
                let novoTelefone = prompt('Digite o seu telefone: ')
                let novoEmail = prompt('Digite o seu email: ')
                atualizar(index ,{ nome:novoNome, telefone:novoTelefone , email:novoEmail })
                    console.log("Contato atualizado com sucesso")
                    
                }
             menu()
            break;
        case '4':
            if (contatos.length == 0) {
                console.log("Nenhum contato cadastrado")

            }
            else {
                listar()
                let numero = prompt("Digite qual contato deseja remover: ")
                var indice = Number(numero) - 1
                remover(indice)
            }
            menu()
            break;

        default:
            break;
    }
}




