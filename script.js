const items = document.querySelectorAll(".item-content");
var titles = document.querySelectorAll(".item-title");

console.log(items);

for(let i = 0; i < items.length; i++){
  //items[i].classList.add("hidden");
  titles[i].addEventListener("click",function(event){
    console.log(event.target.parentElement.children[1].classList.toggle("hidden"));
  });
}
