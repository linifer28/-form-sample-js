		let formUsuario = document.querySelectorAll('#formUsuario')
			formUsuario = formUsuario[0]

		let tpl = `
		<form id="formTpl">
			<input type="text" name="nombre" placeholder="Nombre y Apellido" id="nombre" class="field">
			<br>
			<input type="text" name="usuario" placeholder="Nombre de usuario" id="usuario" class="field">
			<br>
			<input type="password" name="password" placeholder="Clave" id="password" class="passw">
			<span id="campoOK"></span>
			<br>
			<input type="password" name="passwordRep" placeholder="Repetir clave" id="passwordRep" class="passwRep">
			<br>
			<button type="button" onclick="generarClave()">Generar clave</button>
			<br>
			<p class="claveGenerada"></p>
			<button type="button" onclick="guardarUsuario()">Guardar</button>
		</form> 
	` 			
	formUsuario.innerHTML = tpl

		let claveGenerada = document.querySelectorAll('.claveGenerada')
			claveGenerada = claveGenerada[0]

		let abc 	= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',1,2,3,4,5,6,7,8,9,0,'-',',','.',':',';','/','$','%','&','*','+','@','!','^','<','>','?','='];
		
		let validPassGen = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[%,$,#,@,!,*,^,<,>,?,/,.,,]){1})\S{8}$/;

		let generarClave = function () {
			var psw = ''
			for (let i = 0; i < 8; i++) {
				// Elegir un indice aleatorio del diccionario
				let rand = Math.floor( Math.random() * abc.length);
				// Concatenando la clave
				psw = psw + abc[rand]
			
				if (validPassGen.test(psw)){
					claveGenerada.innerText ="Clave generada: " + psw;
				}
				else { 
					claveGenerada.innerText ="Generar clave nuevamente"
				}
			}
		}


		let fields =  document.querySelectorAll('.field')
				
		let user = {}
		
		let inputs = document.querySelectorAll('input')
		
        let nombre = document.querySelectorAll ('#nombre')
        nombre = nombre[0]
       
        let usuario = document.querySelectorAll ('#usuario')
        usuario = usuario[0]
       
        let password = document.querySelectorAll ('#password')
        password = password[0]
       
        let passwordRep = document.querySelectorAll ('#passwordRep')
        passwordRep = passwordRep[0]
		
		let validPass = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[%,$,#,@,!,*,^,<,>,?,/,.,,]){1})\S{8,12}$/;

		document.getElementById('password')
		document.addEventListener ('input', function(evt) {
				
				const password = evt.target,
				valido =  document.getElementById('campoOK')
				valido.innerText = ""

				if (validPass.test(password.value)) {
					valido.innerText = "válido";
					return true
        		} 
        		else {
            		valido.innerText = "incorrecto";
            		return false
            	}

			})
		

		let guardarUsuario = function () {
				
			if ( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
				alert ("Debes rellenar el campo Nombre y Apellido")
			}
		
				else if( usuario.value == null || usuario.value.length == 0 || /^\s+$/.test(usuario.value) ) {
					alert ("Debes rellenar el campo Nombre de usuario")
				}

				else if( password.value == null || password.value.length == 0 || /^\s+$/.test(password.value) ) {
					alert ("Debes rellenar el campo Clave")
				}
			
				else if( passwordRep.value == null || passwordRep.length == 0 || /^\s+$/.test(passwordRep.value) ) {
					alert ("Debes rellenar el campo Repetir clave")
				}

				else if (password.value != passwordRep.value && password.value !="") {
					alert("Contraseñas deben coincidir")
				}

				else if (validPass.test(password.value) == false) {
					alert("Contraseña invalida, la contraseña debe tener entre 8 y 12 dígitos, y contener al menos una minúscula, una mayúscula, un número y un símbolo")
				}	

			else {
				for (let i = 0; i < inputs.length - 1; i++) {
					user[inputs[i].name] = inputs[i].value;				
				}
					let idAleatoria = ''

					if (user.value != "") {
						let num = [0,1,2,3,4,5,6,7,8,9]
						let guidN = 4
						//idAleatoria = ''
						for (var i = 0; i < guidN; i++) {
							for (let i = 0; i < 4; i++) {
								// Elegir un indice aleatorio del diccionario
								let rand = Math.floor( Math.random() * num.length );
								// Concatenando la clave
								idAleatoria = idAleatoria	 + num[rand]
							}
							if (i != guidN - 1){
								idAleatoria = idAleatoria + '-'
							}
						}						
							user.id = idAleatoria
							alert("El usuario se creó correctamente")
					}
				document.getElementById('formTpl').reset()
				valido =  document.getElementById('campoOK')
				valido.innerText = ""
				claveGenerada.innerText =""
				console.log("Usuario creado::", user)
			}
		}