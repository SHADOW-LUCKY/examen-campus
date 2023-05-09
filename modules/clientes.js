const formCli = document.querySelector('#formCli');
const modal_container = document.querySelector('#modal_container');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const nameUser = document.querySelector('#nameUser');
const tel = document.querySelector('#tel');
const direccion = document.querySelector('#direccion');
const formFile = document.querySelector('#formFile');
formCli.addEventListener('submit',saveClient);
function saveClient(e) {
    let nameUser1 =nameUser.value    
    let tel1 =tel.value
    let direccion1 =direccion.value
    let formFile1 =formFile.files    
    const task = {
        nameUser1,
        tel1,
        direccion1,
        formFile1
    }
    if (localStorage.getItem('Clients') === null && localStorage.getItem('IDC')=== null){
     let Clients = []
     let IDC= []
     let ID = Clients.length + 1
     Clients.push(task)
     IDC.push(ID)
     localStorage.setItem('IDC', JSON.stringify(IDC))
     localStorage.setItem('Clients', JSON.stringify(Clients))
    } else {
     let Clients = JSON.parse(localStorage.getItem('Clients'))
     let IDC = JSON.parse(localStorage.getItem('IDC'))
     let ID = Clients.length + 1
     Clients.push(task)
     IDC.push(ID)
     localStorage.setItem('Clients', JSON.stringify(Clients))
     localStorage.setItem('IDC', JSON.stringify(IDC))
    }
    getClient()
    document.querySelector('#form').reset()
    e.preventDefault()
   }
   function delClient(Client) {
    let Clients = JSON.parse(localStorage.getItem('Clients'))
    let IDC = JSON.parse(localStorage.getItem('IDC'))
    for (let i = 0; i < Clients.length; i++) {
     if (Clients[i].nameUser == Client) {
      Clients.splice(i, 1)
      IDC.splice(i, 1)
     }
    }
    localStorage.setItem('Clients', JSON.stringify(Clients))
    getClient()
   }
   function getClient() {
    if(localStorage.getItem('Clients') === null ){
        console.log('nothing in localStorage');
    }else{
    let Clients = JSON.parse(localStorage.getItem('Clients'))
    let IDC = JSON.parse(localStorage.getItem('IDC'))
    let viewtask = document.querySelector('#ans')
    viewtask.innerHTML = ''
    for (let i = 0; i < Clients.length; i++) {
     let id = IDC[i]
        let nameUser = Clients[i].nameUser1  
        let tel = Clients[i].tel1
        let direccion = Clients[i].direccion1
        let formFile = Clients[i].formFile1
     viewtask.innerHTML += ` <tr>
                <th>${id}</th>
                <th>${nameUser}</th>
                <th>${formFile}</th>
                <th>${tel}</th>
                <th>${direccion}</th>
                <th><a class="btn btn-danger" onclick= "delClient('${nameUser}')">Borrar</a>
                </th>
            </tr>`
        
    }
    }
  }
  open.addEventListener('click', () => {
    modal_container.classList.add('show');  
    formOpt();
  });
  
  close.addEventListener('click', () => {
    modal_container.classList.remove('show');
  });
  getClient()