function menu(){
   const nav =  document.getElementById("navlinks");
   var icon = document.getElementById('icon');

   if(nav.style.display == "none"){
        icon.setAttribute("class","fa-solid fa-bars-staggered menuico");
        nav.style.display = "block";
   }else{
        nav.style.display = "none";
        icon.setAttribute("class","fa-solid fa-bars menuico");
   }
}

myID = document.getElementById("topbtn");

var myScrollFunc = function() {
  var y = window.scrollY;
  console.log(y);
  if (y >= 800) {
    myID.style.display = "block";
  } else {
    myID.style.display = "none";
  }
};

window.addEventListener("scroll", myScrollFunc);