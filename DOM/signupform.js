const sign = document.querySelector(".sign");
console.log(sign.textContent);
sign.textContent="changed";
console.log(sign.textContent);


// innerHTML
const subbox2 = document.querySelector(".subbox2");
console.log(subbox2.innerHTML);
subbox2.innerHTML="<h1>I have vanished everything</>";
subbox2.innerHTML +="<button class=\"btn\">get back</>";

// add through innerHTML
const subbox2 = document.querySelector(".subbox2");
console.log(subbox2);
subbox2.innerHTML +="<p class=\"btnlink\"> I have added this successfully</p>";


// add through createElement and append
const underButton = document.createElement("button");
underButton.textContent="more";
const subbox2 = document.querySelector(".subbox2");
subbox2.append(underButton);


// creating a button under signup button
const underButton = document.createElement("button");
underButton.textContent="more";
const subbox2 = document.querySelector(".subbox2 .btn");
subbox2.after(underButton);


// clone node
const underButton = document.createElement("button");
underButton.textContent="more";
const subbox2 = document.querySelector(".subbox2");
const underButton2 = underButton.cloneNode(true);
subbox2.append(underButton);
subbox2.prepend(underButton2);


// getAtrribute
const subbox1 = document.querySelector("input");
console.log(subbox1.getAttribute("type"));


// event
const button = document.querySelector(".btn");
button.addEventListener("click", ()=>{
  alert("clicked successfully");
})


