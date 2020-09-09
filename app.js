// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

const container = document.querySelector("#container")
console.log(container)

const h1 = document.createElement("h1")
console.log(h1)
h1.innerText = "Hogwarts"
container.appendChild(h1)

const h2 = document.createElement("h2")
console.log(h2)
h2.innerText = "Shavoya"
container.appendChild(h2)

const h3 = document.createElement("h3")
console.log(h3)
h3.innerText = "Slytherin"
container.appendChild(h3)

const pet = document.createElement("h4")
console.log(pet)
pet.innerText = "Amaya"
container.appendChild(pet)
pet.className = "cat";

const wand = document.createElement("h4")
console.log(wand)
wand.innerText = "Vine wood with a unicorn hair core, 13 ¾ and slightly yielding flexibility"
container.appendChild(wand)

var items = ["butter beer", "invisibility cloak", "magic map", "time turner", "leash", "Bertie Bott's Every Flavor [Jelly] Beans"];
var list = document.createElement("ul")
container.appendChild(list)
items.forEach(function(item){
    var li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});
list.setAttribute("storage", "trunk")

const magic = document.querySelectorAll("li")
magic[1].className = "secret"
magic[2].className = "secret"
magic[3].className = "secret"
magic[4].className = "cat"




