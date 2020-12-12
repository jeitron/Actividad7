
/* js para validar que se ha ingresado un numero en el campo telefono y limpiar el formulario al enviar */

function formulario() {

    var tel = document.getElementById('telefono').value;
    var telf = document.getElementById('telefono');
    var con = document.getElementById('consulta');
    var nom = document.getElementById('nombre');
    var det = document.getElementById('detalle');



    if (con.value.length <= 0) {
        alert("Error en el campo de tipo de consulta. ");

    }

    else if (nom.value.length <= 0) {
        alert("Error en el nombre ingresado. ");

    }


    else if (isNaN(tel) == true || telf.value.length <= 0 ) {
        alert("Error en el numero ingresado. ");

    }


    else if (det.value.length <= 0) {
        alert("Error en detalle de la consulta. ");
    }

    else {

        swal("Consulta enviada!", "Esperamos responder pronto a tu consulta!", "success");
        document.getElementById('formulario').reset();

    }


}