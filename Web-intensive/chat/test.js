// bai2
// let str = prompt("enter your string")
// let arrStr = str.split(" ")
// let result = ''

// for(let i = 0; i < arrStr.length; i++) {
//     let l =  arrStr[i][0].toUpperCase() + arrStr[i].slice(1)
//     result += l + " "
// }
// console.log(result);

//bai4

let nv = [
    {
        name: "Nguyen Van A",
        age: 20
    },{
        name: "Nguyen Van B",
        age: 25
    },{
        name: "Nguyen Van C",
        age: 26
    },{
        name: "Nguyen Van D",
        age: 10
    }
]
// read
// for(let i = 0; i <nv.length; i++){
//     console.log(nv[i]);
// }
//create
// let option = prompt("Nhap Y de them nv")

// if(option.toLowerCase() == "y"){
//     let nv_name = prompt("nhap ten")
//     let nv_age = prompt("nhap tuoi")

//     nv.push({
//         name : nv_name,
//         age: nv_age
//     })
// }else{
//     alert("bai bai")
// }
//update

let option = prompt("Nhap u de them nv")

if(option.toLowerCase() == "u"){
    let nv_name = prompt("nhap ten can update")

   let result = nv.findIndex((e)=>{
      return  e.name == nv_name;
    })
    console.log(result);

    if(result != -1){
        let nv_age = prompt("nhap tuoi")
        nv[result].age  = nv_age
    }else{
        alert("User name is not defined")
    }
    
}else{
    alert("bai bai")
}

console.log(nv);