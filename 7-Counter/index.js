const maintitle=document.querySelector('#head');
const btnIncrement = document.getElementById('increment');
const btndecrement=document.querySelector('#decrement');
const btnreset=document.querySelector('#reset');
let counter = 0;

btnIncrement.addEventListener('click', () =>  {
    counter++;
    // console.log(counter);
    maintitle.textContent = counter;
});

btndecrement.addEventListener('click',()=>{
    counter-=1;
    
    maintitle.textContent = counter;
});

btnreset.addEventListener('click',()=>{
    counter=0;
    
    maintitle.textContent = counter;

});
