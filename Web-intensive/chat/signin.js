let form_signin = document.querySelector("#form_signin")
form_signin.onsubmit = (e)=>{
    e.preventDefault();

    let email = form_signin.email.value
    let pass = form_signin.password.value

    let data = {
        email: email,
        pass: pass
    }
    signIn_process(data)
}

let signIn_process = async (data)=>{
    let email = data.email
    let password = data.pass
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        let user = result.user
        if (user.emailVerified) {
            window.open("./chat.html","_blank")
        } else {
            throw new Error('Must verify email!')
        }
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