var myform = $("form#contact_form");
myform.submit(function(event){
  event.preventDefault();

  var service_id = "gmail";
  var template_id = "cursos_inscripcion";

  myform.find("button").text("Enviando...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("¡Enviado! Nos pondremos en contacto contigo lo mas pronto posible");
       myform.find("button").text("Enviar");
    }, function(err) {
       alert("Upsss! Hubo un problema!\r\n Si persiste, comuniquenos este error:\n " + JSON.stringify(err));
       myform.find("button").text("Enviar");
    });
  return false;
});
