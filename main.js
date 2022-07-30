function myfunction(){
    var x = document.getElementById("nav-bar");
    if(x.style.display === "block"){
        x.style.display = "none"
        x.style.transition = ".6sc ease-in-out"
    }else{
        x.style.display = "block"
    }
   
}
