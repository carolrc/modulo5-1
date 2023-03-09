import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Rota raizadasd888a1')
})

app.get('/contato', (req, res) => {
    res.send('Rota Contato')
})

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`)
})