var socket = io();

//escuchar al conectarse
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar al desconectarse
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Michael',
    mensaje: 'Hola Mundo Sockets'
}, function(resp) {
    console.log('Respuesta server: ', resp.resp);
});

//escuhar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});