window.onload=function(){
    document.querySelector(".loading").setAttribute("style","display:none;");
    
}
let list = document.getElementById('list');
let links = list.getElementsByClassName('link')


for(var i=0;i < links.length;i++){
    links[i].addEventListener("click",function(){
    var current = document.getElementsByClassName('active');
    current[0].className=current[0].className.replace(" active","");
    this.className += " active";
    });
}






