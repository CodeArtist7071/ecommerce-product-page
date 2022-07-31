function myfunction(){
    var x = document.getElementById("nav-bar");
    if(x.style.display === "block"){
        x.style.display = "none"
        x.style.transition = ".6sc ease-in-out"
    }else{
        x.style.display = "block"
    }
   
}
function addvalue(){
    var val = document.getElementById("value");
    var increament = document.getElementById("add");
    increament.onclick.val.add();
   
}
function subvalue(){
    var decreament = document.getElementById("subtract");
    decreament.onclick.val.subtract();
    
}
function subtract(){
    val--;
}

function add(){
    val++;
}