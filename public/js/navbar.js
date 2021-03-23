var togglebutton= document.getElementById('navbutton');
var navilist = document.getElementById('mytopnav');
if(togglebutton){
togglebutton.addEventListener("click", ()=>{
    navilist.classList.toggle("active")
})
}

var ctbtn = document.getElementById('chtbtn');
var ctnav = document.getElementById('chatnavbar');
var ctcnt = document.getElementById('chtcontainer')

if(ctbtn){
    ctbtn.addEventListener("click",()=>{
        ctnav.classList.toggle("ChatDisplay")
        ctcnt.classList.toggle("ChatDisplay")
    })
}




