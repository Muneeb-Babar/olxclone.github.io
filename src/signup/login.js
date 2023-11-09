function onLogin(){
    const allInputs=document.getElementsByTagName('input')
    const email=allInputs[0]
    const password=allInputs[1]

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email.value)){
        alert('Please Enter a Valid Email')
    }
    
    if(password.value.length < 6 ){
        alert('Please Enter A Strong Password')
        return
    }

    var users1=JSON.parse(localStorage.getItem('users'))
    var found=false
    for(var i=0; i<users1.length; i++){

        if(users1[i].email===email.value && users1[i].password===password.value){
            alert('Login Successfully')
            found=true

            window.open('http://127.0.0.1:5500/olx.html#')
            window.close('http://127.0.0.1:5500/src/signup/login.html')
            break;
        }
    }
    if(!found){
        alert('Invalid email/password')
    }
}