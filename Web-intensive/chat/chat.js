let signOut = ()=>{
    firebase.auth().signOut().then(()=>{
        window.open('./signin.html','_self')
    },(error)=>{
        alert(error)
    })
}