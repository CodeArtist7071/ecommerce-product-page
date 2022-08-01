function myfunction(){
    var x = document.getElementById("links");
    if(x.style.display === "block"){
        x.style.display = "none"
      
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
    if(i>0){
        --i;
    }
   
}

function popup(){
    var x = document.getElementById("valuetag");
    document.getElementById("addcart");
        if(x.style.display == "none"){
            x.style.display = "block"
          var y = document.getElementById("value").innerHTML;
          document.getElementById("valuetag").innerHTML = y + " products added to your cart"
           }else{
            x.style.display ="none"
        }
    }
    


