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
        } }
    
function one(){

     var b = document.getElementById("project-img");
     b.src = "images/image-product-1.jpg"
     }
     function two(){
    
        var b =document.getElementById("project-img");
        b.src = "images/image-product-2.jpg"

     }
     function three(){
        var b =document.getElementById("project-img");
        b.src = "images/image-product-3.jpg"
     }
     function four(){
        var b =document.getElementById("project-img");
        b.src = "images/image-product-4.jpg"
     }

    const navslide=()=>{
        const ham =document.querySelector('.ham');
        const nav =document.querySelector('.links');
        ham.addEventListener('click',()=>{
           ham.classList.toggle('hames');
           nav.classList.toggle('nav-links');
        })
    }
    navslide();
    


