const heading1=document.querySelector(".h1");
const heading2=document.querySelector(".h2");
const heading3=document.querySelector(".h3");

// setTimeout(()=>{heading1.textContent="red";
// setTimeout(()=>{heading2.textContent="green"},1000)
// }
// ,2000);
function func(element, text,delay ){
 setTimeout(()=>{
  element.textContent=text;
 },delay)
}
func(heading1,"red",1000);
func(heading2,"green",2000);
func(heading3,"green",3000);



