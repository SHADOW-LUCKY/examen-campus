const form = document.querySelector('#form');
const btnSub = document.querySelector('#btn');
function submitHandler(e) {
    e.preventDefault();
    let user = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    if (user =="admin" && pass=="admin") {
        alert('Login success')
        location.href ="html/dash.html"
    }else{
        alert('ERROR: user or pass must be invalid')
        document.querySelector('#user').value = ""
        document.querySelector('#pass').value = ""
    }
}
if (form){
    form.addEventListener('submit', submitHandler)
}else{
    alert('error')
}