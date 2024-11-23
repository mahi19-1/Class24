// classname
//idname
//tag
//queryselectorall
//queryselector

//const title = Document.getElementsByClassName('bondhu)
//for (const ti of title){
// console.log(ti)
//}



const title = Document.querySelectorAll('.bondhu')


const first = document.getElementsById('first')
first.innerText = "tui change. next"


first.style.backgroundColor="blue"
first.style.color="white"
first.style.borderRadius="20px"
first.style.padding="50px"



const container = document.getElementsById('container')
container.setAttribute('class','ridoy')
container.classList.add('shanto','desh')
container.classList.add('bangladesh')
container.classlist.remove('desh')


console.log(container)
//console.log(container.childnodes[0].nextSibling.innerText)

//const lorem = document.getElementById('lorem)
//lorem.setAttribute('class','ridoy')
//const classDiyeGetKorbo = document.getElementsByClassName('ridoy')
//lorem.removeAttribute('id')
//console.log(classDiyeGetKorbo[0])


const select = document.getElementById('select')
const h2 = document.createElement('h2')
h2.innerText = "amar shonar bangla"

select.appendChild(h2)


const ul = document.createElement('ul')
const li = document.createElement('li')
li.innerText = "akash batash"
console.log(li)
ul.appendChild(li)
select.appendChild(ul)

li.setAttribute('id','jatio')
const jation = document.getElementById('jatio')
jation.style.color="red"
