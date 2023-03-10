function usuarioController(app){
    app.get('/usuario', exibir);
    function exibir(req, res){
        res.send('Exibindo usuários')
    }
}
export default usuarioController;