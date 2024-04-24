const express = require('express'); // Importa a biblioteca Express
const iduser = require('uuid'); // Importa a biblioteca UUID
const app = express()
app.use(express.json()) // Habilita o acesso do Front-End
const port = 4000


// Listar usúario
app.get('/list_users/', function (request, response) { // Rota para listar usúarios

    return response.json(users)
})


// Inserir usúario
const users = []
app.post('/post_users', function (request, response) { // Rota para criar usúarios
    const { name, age } = request.body // Pega o ID do usário a ser modificado

    const user = { id: iduser.v4(), name, age } // Encontra em qual posição do array o usúario está
    users.push(user) // Cria uma informação no array

    return response.status(201).json({ message: "Usuário criado com Sucesso!", user }) // Se não encontrar a posição do usúario no array, retorna mensagem de erro
})


// Atualizar usúario
app.put('/update_users', function (request, response) { // Rota para atualizar
    return response.send("Atualizando usuários...")
})


// Deletar usúario
app.delete('/delete_users', function (request, response) { // Rota para deletar
    return response.send("Deletando usuários...")
})

app.listen(port, () => {
    console.log(`Servidor iniciado🚀 na porta ${port}`)
})