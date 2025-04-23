document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#add').disabled = true

    //se não tiver nada na caixa de texto, o botão estará desabilitado
    document.querySelector('#newtask').onkeyup = () => {
        if ((document.querySelector('#newtask').value == '')){
            document.querySelector('#add').disabled = true
        } else {
            document.querySelector('#add').disabled = false
        }
    }

    document.querySelector('#description').onkeyup = () => {
        if ((document.querySelector('#description').value == '')){
            document.querySelector('#add').disabled = true
        } else {
            document.querySelector('#add').disabled = false
        }
    }

    document.querySelector('form').onsubmit = () => {
        //constantes que terão a nova tarefa, sua descrição e, se tiver, as suas subtarefas
        const titulo = document.querySelector('#newtask').value
        const descricao = document.querySelector('#description').value
        const subtarefa = document.querySelector('#subtasks').value.split(', ').map(subtarefa => subtarefa.trim()).filter(s => s !== '');

        //criação de objetos
        const tarefa = {
            title: titulo,
            descricao: descricao,
            status: false
        }

        const subtarefas = {
            subtarefa: subtarefa,
            status: false
        }

        document.querySelector('#name').innerHTML = tarefa.title
        document.querySelector('#dc').innerHTML = tarefa.descricao

        localStorage.setItem('tarefa', JSON.stringify(tarefa)) 

        //verificação de existência de subtarefas
        if (subtarefa.length > 0 && subtarefa[0] !== ''){
            for (i=0; i<subtarefa.length; i++){
                const li = document.createElement('li')
                li.innerHTML = subtarefa[i]
                document.querySelector('#subtarefa').append(li)
                localStorage.setItem('subtarefas', JSON.stringify(subtarefas)) 
            } 
        }

        document.querySelector('#newtask').value = ''
        document.querySelector('#description').value = ''
        document.querySelector('#subtasks').value = ''
        document.querySelector('#add').disabled = true

        /*const t = localStorage.getItem('tarefa', JSON.parse(tarefa))
        if (t){
            document.querySelector('#name').innerHTML = `<div class="title" id="titulo">
            <p class="nome" id="name">${task.title}</p>
            </div>`
            document.querySelector('#dc').innerHTML = `<div class="description" id="desc">
            <p class="dc" id="dc">${task.descricao}</p>
            </div>`
        }*/
    }
})