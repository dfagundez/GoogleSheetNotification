/*
  "Email Notification for Google Sheets"
  
  Script para enviar alerta por email en caso que la fecha en una fila coincida con la actual.
  - By Diego Fagundez
  
  Como utilizar:
  Ingresar el rango de celdas donde se encuentra la informacion a utilizar.
  Luego en fechaObtenida ingresar la columna donde se encuentra la fecha que
  vamos a comparar con la actual.
*/

function sendEmails() {
  // Obtengo el documento a utilizar por medio del ID
  var ss = SpreadsheetApp.openById("195aeC4ECKRgh0heC_MvnJreuySP-iRlOwvkpXQwy70U");
  
  // Guardo en una variable el rango que voy a utilizar y obtengo sus valores
  var rango = ss.getRange("A2:D30");
  var datos = rango.getValues();
  
  // Guardo la fecha actual en una variable
  var fechaActual = new Date();
  var fechaActual = (fechaActual.getDate()) + "/" + (fechaActual.getMonth() + 1) + "/" + (fechaActual.getFullYear());
  
  // Recorro la columna que tiene las fechas para ver que fila coincide con la fecha actual
  for (var i in datos) {
    var fila = datos[i]; // Obtengo fila
    
    // Guardo la fecha y la armo en otra variable
    var fechaObtenida = fila[0]; 
    var fechaObtenida = (fechaObtenida.getDate()) + "/" + (fechaObtenida.getMonth() + 1) + "/" + (fechaObtenida.getFullYear());
    
    // Verifico si la fecha coincide con la fila y de ser asi envio el email de notificacion
    if(fechaObtenida == fechaActual){
      // Obtengo el email de la fila
      var email = fila[1];
      
      // Verifico el funcionamiento en los logs
      Logger.log("La fecha " + fechaObtenida + " es igual a " + fechaActual + " el email es " + email);
      
      var asunto = 'Esto es una notificacion desde Google Spread Sheets';
      var mensaje = 'Usted recibio una notificacion de prueba';
      MailApp.sendEmail(email, asunto, mensaje);
      break;
    }
    else{
      continue;
    }
  }
}
