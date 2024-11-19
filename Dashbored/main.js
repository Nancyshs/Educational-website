let spans = document.querySelectorAll(".prog span");
let data=document.querySelector(".data");
let show_list_b=document.getElementById("b-s-l");
let bars=document.querySelector(".show-bars i");
let main_page=document.querySelector(".main-page");
let nav_title =document.querySelector(".title");
let nav= document.querySelector(".nav")
let navbar=document.querySelector(".navbar1");
let nav_bars =document.querySelector(".nav-bars i");
show_list_b.onclick= function()
{
    data.classList.toggle("dis");
    show_list_b.classList.toggle("trans");
}
// nav_bars.onclick=function()
// {
//     console.log("ff")
//     navbar.classList.toggle("show-list");
// }
bars.onclick =function()
{
    if(window.outerWidth<767)
    {
        nav.classList.toggle("show-list");
    }
    else
    {
    main_page.classList.toggle("c-100");
    nav.classList.toggle("dis");
    bars.parentElement.classList.toggle("change");
    }
}
// spans.forEach(value=>{
    
//     let start =1;
//     let end=value.getAttribute("data-value");
//     let par=value.parentElement;
//     let count=setInterval(function(){
//     value.innerHTML=start ;
    
//     if(start==end)
//         clearInterval(count);
//     start+=1;
// },50)
// });
