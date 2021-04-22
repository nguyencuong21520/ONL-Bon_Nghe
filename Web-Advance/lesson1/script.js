// console.log("hello world");

// console.log("Hello anh Cuong");

// console.log(6);

// 1 Các kiểu dữ liệu trong JS

//     1.Number : 1,2,3,5,8
//     2.String : "Hello", "alo", "55"
//     3.Boolean : true, false

// 2 Variable
    
//     1. let a = 5
//     2. var b = 6

//     3. const c = 9 => không thể thay đổi

    //VD    
        // let a = 9
        // a="bye"
        // a=8

        // var b = 6
        // b = 9
        // console.log(b);

        // const pi = 3.14

        // console.log(pi);

// let Bon = "Nghe"
// let Nghe = "Bon"
// Bon = Nghe
// console.log(Bon + " Hello " + Nghe )

// 3. Toán tử (Operator)

//     + : Cộng
//     - : Trừ
//     / : Chia
//     * : Nhân
//     % : Lấy phần dư

// console.log( 5 + 9);
// console.log(9-55);
// console.log(55/5);
// console.log(1*2*3*4);
// console.log(26%5);

// let a = parseInt(prompt("Nhập a")) 
// let b = parseInt(prompt("Nhập b"))

// // 'kết quả của phép tính' 5 + 556 là ... nè
// let c = a + b

// // console.log("Kết quả của phép tính " + a + '+' + b + " là " + (a+b) + " nè" );
// console.log(`Kết quả của phép tính ${a} + ${b} là ${a+b} nè`);

// 4. if else 
// let a = 9
// let b = 6

// if(a>b){
//     console.log("hello");
//     console.log("ok");
// }else{
//     console.log("bye bye");
// }

let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)

let c = prompt(`Kết quả của ${a} + ${b} = ?`)
if(c == (a+b)){
    alert("dung")
}else{
    alert("sai")
}

// <20 => bạn trẻ quá
// == 20 => bạn bình thường
// 20 - 60 => bạn là ng trường thành
// >60 bạn già

// let age = prompt("nhập tuổi")
// if(age<20){
//     alert("teen")
// }else if(age == 20){
//     alert("Bạn bình thường")
// }else if(age > 60){
//     alert("Ban gia")
// }else{
//     alert("ban la ng truong thanh")
// }

// 5 loop
// for(let i = 24; i<=32; i= i+2){
//     console.log(i);
// }





