//indexof()
let Message = "Welcome Nagappan, I am Nagappan";
console.log(Message.indexOf("Nagappan"));// JavaScript counts positions from the zero

//lastIndexOf()
console.log(Message.lastIndexOf("Nagappan"));
/*window.addEventListener('load', function()
{
    console.log(Message);
    document.getElementById("Name").innerHTML =  Message;
}); */
console.log(Message.search("Naga"));
console.log(Message.match(/Naga/g));
console.log(Message.includes("Naga"));//Returns True
