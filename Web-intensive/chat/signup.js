let form_signup = document.getElementById("form_signup")

form_signup.onsubmit = (nghe)=>{
    nghe.preventDefault();

    let name = form_signup.name.value
    let email = form_signup.email.value
    let pass = form_signup.password.value
    let cfpass = form_signup.cfpassword.value

    let data = {
        name: name,
        email: email,
        pass: pass
    }
    
    if(pass){
        if(pass.length > 6){
            if(pass == cfpass){
                signUp_process(data)
            }else{
                setTextError("#cfpassword-err","Confirm password must be the same")
            }

        }else{
            setTextError("#password-err","Password must be longer than 6")
        }

    }else{
        setTextError("#password-err","Field Required")
    }

}

let setTextError = (tagname, content) => {
    document.querySelector(tagname).innerHTML = content
}
let signUp_process = async (data)=>{
    let email = data.email
    let password = data.pass
    let name = data.name
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        await firebase.auth().currentUser.sendEmailVerification()
        sweetAlert('success','Successfully! please check your email')
    } catch (error) {
        let message = error.message
        sweetAlert('error',message)
    }
}


let sweetAlert = (icon, title,)=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: title,
      })
}

