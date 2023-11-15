// generating Random Color 

const randomColor = function () {

    const hex= '0123456789ABCDEF';
    let color='#';
    for(let i=0 ; i<6 ;  i++){
        color += hex[Math.floor(Math.random()*16)];
       
    }
    console.log(color);
    return color;
};

//console.log(Math.floor(Math.random()*16));
let intervalId;
 const startChangingColor=function(){
    if (!intervalId) {
        intervalId = setInterval(bgChnager, 1000);
      }
   function bgChnager() {
    document.body.style.backgroundColor = randomColor();
   }

 }
 const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId = null;
 }

 const textChnage=function (){
    // setTimeout(()=>{},2000)
    document.querySelector('h1').innerHTML ="BackGround Is Changing";
 }

//  const textColorChnage=function (){
//     // setTimeout(()=>{},2000)
//     document.querySelector('h1').textContent.color=randomColor();
//  }
 

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);

setTimeout(textChnage,3000);
//setTimeout(textColorChnage,3000);
