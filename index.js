let showBtn=document.querySelector('.showstyle');
//console.log(showBtn);
let hideBtn=document.querySelector('.hidestyle');
//console.log(hideBtn);
let slider=document.querySelector('.slidecontainer');
//console.log(slider)
let body=document.querySelector('body');
let loader=document.querySelector(' .load');
console.log(loader)
showBtn.onclick=show;
hideBtn.onclick=hide;
function show(){
slider.classList.add('show');
slider.classList.remove('hide');
body.classList.add('overlay');
loader.classList.add('loader');

}
function hide(){
    slider.classList.add('hide');
    slider.classList.remove('show');
    body.classList.remove('overlay');
    loader.classList.remove('loader');
    }
    