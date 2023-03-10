function tarefaController(app){
    app.get('/tarefa', exibir);
    function exibir(req, res){
        res.send('Exibindo tarefas')
    }
}

export default tarefaController;