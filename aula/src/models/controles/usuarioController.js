function usuarioController(app){
    app.get('/usuario', exibir);
    function exibir(req, res){
        res.send('Exibindo usuarios')
    }

    app.post('/usuario', inserir);
    function inserir(req, res){
        res.send('Inserindo usuarios')
        console.log(req)
    }
}
export default usuarioController;