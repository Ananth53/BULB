function changeImage()
{
   var pic=document.getElementById("BULB");
   if(pic.src.match("ON")) {
    console.log("ON");
    pic.src ="BULB OFF.jpeg";
   }
   else{
    console.log("OFF");
    pic.src="BULB ON.jpeg";
   }
}
