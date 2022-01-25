let audio1 = document.querySelector('#audio1');
let audio2 = document.querySelector('#audio2');
let audio3 = document.querySelector('#audio3');
let audio4 = document.querySelector('#audio4');
let audio5 = document.querySelector('#audio5');
let audio6 = document.querySelector('#audio6');
let audio7 = document.querySelector('#audio7');
const drums = document.querySelectorAll('.drums');
const audios = document.querySelectorAll('.audios')
for(let i= 0 ; i< drums.length; i++){
    drums[i].addEventListener('click',()=>{
        audios[i].currentTime = 0;
        audios[i].play()
    })
}


let a = 97;
let s = 115;
let d = 100;
let g = 103;
let j = 106;
let k = 107;
let l = 108;


window.addEventListener('keydown',()=>{
    // console.log(`The code of key Pressed is ${event.keyCode}`);
    let x = event.keyCode;
    if(x==a){
        audio1.currentTime = 0;
        audio1.play();
    }
    else if(x === s){
        audio2.currentTime = 0;
        audio2.play();
    }else if(x === d){
        audio3.currentTime = 0;
        audio3.play();
    }
    else if(x === g){
        audio4.currentTime = 0;
        audio4.play();
    }
    else if(x === j){
        audio5.currentTime = 0;
        audio5.play();
    }
    else if(x === k){
        audio6.currentTime = 0;
        audio6.play();
    }
    else if(x === l){
        audio7.currentTime = 0;
        audio7.play();
    }
})


// j == 106
// k == 107 
// l == 108
//  h == 103
//a == 97 
// s == 115
//d == 100
