document.getElementById('tarefa').addEventListener('submit', function(event){
    event.preventDefault()

    document.querySelector('#add').disabled = true

    document.querySelector('#newtask').onkeyup = () => {
        if (document.querySelector('#newtask').value == ''){
            document.querySelector('#add').disabled = true
        } else {
            document.querySelector('#add').disabled = false
        }
    }

    document.querySelector('#description').onkeyup = () => {
        if (document.querySelector('#description').value == ''){
            document.querySelector('#add').disabled = true
        } else {
            document.querySelector('#add').disabled = false
        }
    }

    document.querySelector('#subtasks').onkeyup = () => {
        if (document.querySelector('#subtasks').value == ''){
            document.querySelector('#add').disabled = true
        } else {
            document.querySelector('#add').disabled = false
        }
    }

    const titulo = document.querySelector('#newtask').value
    const descricao = document.querySelector('#newtask').value
    const subtarefas = document.querySelector('#newtask').value.split(',').map(subtarefa => subtarefa.trim())

    const tarefa = {
        title: titulo,
        descricao: descricao,
        subtarefas: subtarefas,
        status: false
    }

    document.querySelector('#titulo').innerHTML = titulo


    localStorage.setItem('tarefa', JSON.stringify(tarefa))
    
})