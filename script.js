let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.onclick = () =>{
    if(password.type == 'password'){
        password.type = 'text';
        eyeicon.src = 'image/eye-close.png';
    }else{
        password.type = 'password'
        eyeicon.src = 'image/eye-open.png'
    }
}