function myfunction(){
    var x = document.getElementById("nav-bar");
    if(x.style.display === "block"){
        x.style.display = "none"
        x.style.transition = ".6sc ease-in-out"
    }else{
        x.style.display = "block"
    }
   
}
i = 0;
function incrementvalue(){
   document.getElementById("value").innerHTML = i;
    i++;
}
function changevalue(){
    incrementvalue();
    decrementvalue();
}
function decrementvalue(){
    document.getElementById("value").innerHTML = i;
    --i;
}

function popup(){
    var x = document.getElementById("div");
    document.getElementById("add2cart");
        if(x.style.display == "none"){
            x.style.display = "block"
          var y = document.getElementById("value").innerHTML;
          document.getElementById("valuetag").innerHTML = y + " products added to your cart"
           }else{
            x.style.display ="none"
        }
    }
    


