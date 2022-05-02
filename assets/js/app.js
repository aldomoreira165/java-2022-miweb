var btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', function(){
    event.preventDefault();
    var nombre = document.getElementById('txtNombre');
    var apellido = document.getElementById('txtApellido');
    var email = document.getElementById('txtEmail');
    var mensaje = document.getElementById('txtMensaje')
    alert(`Buenos días ${nombre.value}. Su solicitud será procesada lo más pronto al correo ${email.value}.`);
});