//esto fue extraido de la solucion de la solucion del certamen 2021-1

//Archivo para el manejo de los mensajes de respuestas 
exports.error_message =  {
    status: 500,
    message: "Hubo un error al procesar los datos, intente nuevamente"
}
exports.not_found_message = {
    status: 200,
    message: "No se encontró la compañía buscada"
}
exports.input_error = {
    status: 500,
    message: 'La entrada del parámetro presenta un error'
}