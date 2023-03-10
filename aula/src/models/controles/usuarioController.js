function usuarioController(app){
    app.get('/usuario', exibir);
    function exibir(req, res){
        res.send('<h1>Devair</h1>')
    }

    app.post('/usuario', inserir);
    function inserir(req, res){
        res.send('Rota POST de usuario ativada: tarefa adicionada ao BD')
    }
}
export default usuarioController;