const form = document.querySelector('#form');
form.addEventListener('submit', savetask)
    function savetask(e) {
        let category = document.querySelector('#nomcat').value
        const task = category
        if (localStorage.getItem('tasks') === null && localStorage.getItem('IDS')=== null){
        let tasks = []
        let ids= []
        let ID = tasks.length + 1
        tasks.push(task)
        ids.push(ID)
        localStorage.setItem('IDS', JSON.stringify(ids))
        localStorage.setItem('tasks', JSON.stringify(tasks))
        } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        let ids = JSON.parse(localStorage.getItem('IDS'))
        let ID = tasks.length + 1
        tasks.push(task)
        ids.push(ID)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        localStorage.setItem('IDS', JSON.stringify(ids))
        }
        gettask()
        document.querySelector('#form').reset()
        e.preventDefault()
    }
    function deltask(category,id) {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        let ids = JSON.parse(localStorage.getItem('IDS'))
        for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] == category && ids[i] == id) {
        tasks.splice(i, 1)
        ids.splice(i, 1)
        }
        }
        localStorage.setItem('tasks', JSON.stringify(tasks))
        gettask()
    }
    function gettask() {
        if(localStorage.getItem('tasks') === null ){
            console.log('nothing in localStorage');
        }else{
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        let ids = JSON.parse(localStorage.getItem('IDS'))
        let viewtask = document.querySelector('#ans')
        viewtask.innerHTML = ''
        for (let i = 0; i < tasks.length; i++) {
        let id = ids[i]
        let category = tasks[i]
        viewtask.innerHTML += ` <tr>
                    <th>${id}</th>
                    <th>${category}</th>
                    <th><a class="btn btn-danger" onclick= "deltask('${category}',JSON.stringify(${id}))">Borrar</a>
                    </th>
                </tr>`
            
        }
        }
    }
    
    gettask()
