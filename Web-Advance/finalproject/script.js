let dataAngryBirds = [
    {
       img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
       des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
       name: "Super Red",
       id: "id1",
       like: 0,
    },
    {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },
     {
        img: "https://static.wikia.nocookie.net/angrybirds/images/8/85/Red_bird_space.png/revision/latest/scale-to-width-down/100?cb=20180815234800",
        des: "Same ability as the Classic version of Red the Red Bird, the only difference is shockwaves have been added. Stronger and bigger.",
        name: "Super Red",
        id: "id1",
        like: 0,
     },

]

let angryBirdList = document.querySelector("#arbList")


let renderAngryBirdsList = (data)=>{
    for(let i = 0; i<data.length; i++){
        let html = `        <div class="card" style="width: 20%;">
        <img src="${data[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].des}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`

      angryBirdList.innerHTML += html
    }
}
renderAngryBirdsList(dataAngryBirds)