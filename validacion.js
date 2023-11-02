
const form = document.getElementById('miFormulario');
  
  function validarFormulario() {
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
      const confirmEmailField = document.getElementById('confirmEmail').value; 

      if (email !== confirmEmailField) {
        
          alert('Los correos electrónicos no coinciden. Por favor, verifique.');
          return false; 
      }
          return true;
  };
  form.addEventListener('submit', function (event) {
    if (!validarFormulario()) {
       event.preventDefault(); 
    }
    else {
        alert ('El mensaje fue enviado correctamente');
        //event.preventDefault();
    }
  });

