const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
	if (validador) {
		modal.style.display = "block";
	}
});

function checkInputs() {
	// trim remueve espacios vacios
	const nombreValue = nombre.value.trim();
	const apellidoValue = apellido.value.trim();
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (nombreValue === '') {
		setErrorFor(nombre, 'Es Obligatorio colocar sus NOMBRE');
		validador = false;
	} else {
		setSuccessFor(nombre);
		validador = true;
	}
	if (apellidoValue === '') {
		setErrorFor(apellido, 'Es Obligatorio colocar sus Apellidos ');
		validador = false;
	} else {
		setSuccessFor(apellido);
		validador = true;
	}

	if (usuarioValue === '') {
		setErrorFor(usuario, 'El nombre de usuario es Obligatorio');
		validador = false;
	} else {
		setSuccessFor(usuario);
		validador = true;
	}
	if (emailValue === '') {
		setErrorFor(email, 'El Email es de cracter obligatorio');
		validador = false;
	} else if (!validateEmail(email)) {
		setErrorFor(email, 'No ingreso un email válido');
		validador = false;
	} else {
		setSuccessFor(email);
		validador = true;
	}

	if (passwordValue === '') {
		validador = false;
		setErrorFor(password, 'La contraseña es de caracter obligatorio');

	} else {
		setSuccessFor(password);
		validador = true;
	}

	if (password2Value === '') {
		setErrorFor(password2, 'Debe repetir su Contraseñá');
		validador = false;
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coinciden');
		validador = false;
	} else {
		setSuccessFor(password2);
		validador = true;
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';

}

/*function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};*/

/*function isEmail(email) {
	var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
	return regex.test(email);
  }*/


  function validateEmail(inputText)
  {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
  
  document.form1.text1.focus();
  return true;
  }
  else
  {

  document.form1.text1.focus();
  return false;
  }
  }


//------------------------------------------------------------------------------

var modal = document.getElementById("miModal");


var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
