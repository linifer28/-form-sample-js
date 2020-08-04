let inpDiv = document.querySelectorAll('#inpDiv')
	inpDiv = inpDiv[0]

let toDoList = document.querySelectorAll('#toDoList')
	toDoList = toDoList[0]	

let ul = document.querySelectorAll('ul')
	ul = ul[0]	




let tplInp = `
			<input type="text" name="item" ><button type="button" onclick="agregarItem()">Agregar</button>
	`	
	inpDiv.innerHTML = tplInp

let input = document.querySelectorAll('input')
input = input[0]

let isEdit = false
let idAleatoria = ''
	

let agregarItem = function() {
	let genList = document.querySelectorAll('li span')
	let duplicado 	= false
	
			for (let i = genList.length - 1; i >= 0; i--) {
				let itemLista = genList[i]

				if(itemLista.innerText == input.value){
					duplicado = true
					alert("Item ya existente")
					break
				}
			}
				
				if (!duplicado && input.value !="") {
					
					idAleatoria =  Math.floor( Math.random() * 100000 )
					let tplLi = `
						<li>
							<span>${input.value}</span>
							<button type="button" class="edit" onclick="editItem(${idAleatoria})">Editar</button>
							<button type="button" class="delete" onclick="deleteItem('${input.value}')">Eliminar</button>
						</li>	
			
					`
					ul.innerHTML += tplLi		
				}
				if (input.value == "") {
					alert("Debe ingresar texto") 
					return false
				}	

					
				let li = document.querySelectorAll('li')
				
				li.id = idAleatoria
			console.log("li.id::", li.id)
			console.log("itemID::", idAleatoria)
			console.log("span::", li.innerHTML)
				input.value = ''
			}
		
		

let editItem = function(idAleatoria) {
	let genList = document.querySelectorAll('li')
		console.log("lista::", genList)
		for (let i = genList.length - 1; i >= 0; i--) {
			let itemGen = genList[i];
			console.log("itemGen::", itemGen.id)
			
			if(itemGen.id == idAleatoria){
				console.log("itemGenText::", itemGen.firstElementChild.innerText)
				input.value = itemGen.firstElementChild.innerText
					isEdit = true
			}

		}
		console.log ("item a editar::", idAleatoria)
}
let deleteItem = function(item) {
	let genList = document.querySelectorAll('li')
		console.log("lista::", genList)
		for (let i = genList.length - 1; i >= 0; i--) {
			let itemGen = genList[i];
			console.log("itemGen::", itemGen)
			if(itemGen.firstElementChild.innerText == item){
					genList[i].outerHTML = ''
				}
		}
		console.log ("item a eliminar::", item)
}
