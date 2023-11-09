
var users=JSON.parse(localStorage.getItem('users'))||[]

function onSignup(){
    var allInputs=document.getElementsByTagName('input')
    var firstName=allInputs[0]
    var email=allInputs[1]
    var password=allInputs[2]
    var confirmPassword=allInputs[3]

    if(!firstName.value || !email.value || !password.value || !confirmPassword.value ){
        alert('Please Enter all Value')
        return
    }

    if(firstName.value.length < 4){
        alert('Please Enter Full Name')
        return
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email.value)){
        alert('Please Enter a Valid Email')
    }
    
    if(password.value.length < 6 ){
        alert('Please Enter A Strong Password')
        return
    }

    if(password.value!==confirmPassword.value){
        alert('Password is not matchable with confirm password!')
        return
    }
    
    //localstorage

    var user={
        name:firstName.value,
        email:email.value,
        password:password.value
    }
    users.push(user)
        localStorage.setItem("users",JSON.stringify(users))
        alert('Register Successfully')

        window.location.replace('http://127.0.0.1:5500/src/signup/login.html')

}