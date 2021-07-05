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
        password: pass
    }
    
    if(pass){
        if(pass.length > 6){
            if(pass == cfpass){
                console.log(data);
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