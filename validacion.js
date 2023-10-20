document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('miFormulario');

    form.addEventListener('submit', function (event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Evitar que el formulario se envíe si la validación falla
        }
    });

    function validarFormulario() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        const confirmEmailField = document.getElementById('confirmEmail').value; // Debes obtener el valor del campo confirmEmail

        // if (!nombre || !email || !mensaje) {
        //     alert('Por favor, completá todos los campos.');
        //     return false;
        // }

        if (email !== confirmEmailField) {
            alert('Los correos electrónicos no coinciden. Por favor, verifique.');
            return false; // Agrega un return false para evitar el envío del formulario
        }

        // Acá puedes agregar más lógica de validación cuando avances en el desarrollo del formulario

        return true;
    }
});
