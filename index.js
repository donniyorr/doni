let text=document.getElementById("one")
let place=document.getElementById("place")
function myFunction(){
    let li=document.createElement("li")
    li.innerHTML=text.value;
    place.append(li)
    text.value="  ";
    
}