document.getElementById('enviarBtn').addEventListener('click', function() {
    var confirmacion = confirm('¿Desea enviar este mensaje?');
    
    if (confirmacion) {
      alert('Mensaje enviado correctamente.');
    } else {
      alert('Mensaje no enviado.');
    }
  });