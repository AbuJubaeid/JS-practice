const button = document.querySelector(".subbox2");
// const body = document.body;

const newButton = document.createElement("button");
newButton.textContent = "Change Background";
button.after(newButton);

const body = document.body;


function randomColorGenerator(){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  randomColor=`rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}
newButton.addEventListener("click", ()=>{
   const randomColor = randomColorGenerator();
   console.log(randomColor);
   body.style.backgroundColor = randomColor;
})