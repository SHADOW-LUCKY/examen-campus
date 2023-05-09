const open = document.querySelector('#open');
const modal_container = document.querySelector('#modal_container');
const close = document.querySelector('#close');
const select = document.querySelector('#select');
const ans = document.querySelector('#ans');
const formProc = document.querySelector('#formProc');
formProc.addEventListener('submit',saveProduct);
function formOpt(e) {
  let opts = JSON.parse(localStorage.getItem('tasks'))
  select.innerHTML += `<option value="N/A" selected>Seleccione una categoria</option>`
  for (let i = 0; i < opts.length; i++){
    let plantila = `<option value="${opts[i]}">${opts[i]}</option>`
    select.innerHTML += plantila
  }
  e.preventDefault()
}
function saveProduct(e) {
  let nomproc  = document.querySelector('#nomproc').value
  let price = document.querySelector('#precio').value
  let select = document.querySelector('#select').value
  const task = {nomproc,price,select}
  if (localStorage.getItem('Products') === null && localStorage.getItem('IDP')=== null){
   let Products = []
   let IDP= []
   let ID = Products.length + 1
   Products.push(task)
   IDP.push(ID)
   localStorage.setItem('IDP', JSON.stringify(IDP))
   localStorage.setItem('Products', JSON.stringify(Products))
  } else {
   let Products = JSON.parse(localStorage.getItem('Products'))
   let IDP = JSON.parse(localStorage.getItem('IDP'))
   let ID = Products.length + 1
   Products.push(task)
   IDP.push(ID)
   localStorage.setItem('Products', JSON.stringify(Products))
   localStorage.setItem('IDP', JSON.stringify(IDP))
  }
  getProduct()
  document.querySelector('#form').reset()
  e.preventDefault()
 }
 function delProduct(product) {
  let Products = JSON.parse(localStorage.getItem('Products'))
  let IDP = JSON.parse(localStorage.getItem('IDP'))
  for (let i = 0; i < Products.length; i++) {
   if (Products[i].nomproc == product) {
    Products.splice(i, 1)
    IDP.splice(i, 1)
   }
  }
  localStorage.setItem('Products', JSON.stringify(Products))
  getProduct()
 }
 function getProduct() {
  if(localStorage.getItem('Products') === null ){
      console.log('nothing in localStorage');
  }else{
  let Products = JSON.parse(localStorage.getItem('Products'))
  let IDP = JSON.parse(localStorage.getItem('IDP'))
  let viewtask = document.querySelector('#ans')
  viewtask.innerHTML = ''
  for (let i = 0; i < Products.length; i++) {
   let id = IDP[i]
   let product = Products[i].nomproc
   let price =  Products[i].price
   let select = Products[i].select
   viewtask.innerHTML += ` <tr>
              <th>${id}</th>
              <th>${select}</th>
              <th>${product}</th>
              <th>${price}$</th>
              <th><a class="btn btn-danger" onclick= "delProduct('${product}')">Borrar</a>
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
getProduct()