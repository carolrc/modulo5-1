function usuarioController(app){
    app.get('/usuario', exibir);
    function exibir(req, res){
        res.send('<h1>Devair</h1>')
    }
}
export default usuarioController;