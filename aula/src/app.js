import express from 'express'
import usuarioController from './models/controles/usuarioController.js'
const app = express()
usuarioController(app)

// app.get('/usuario', (req, res) => {
//   res.send('Rota usuário com método GET')
// })

app.get('/tarefa', (req, res) => {
    res.send('Rota tarefa com método GET')
})

export default app