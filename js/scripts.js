function mensaje() {
    alert('Hola mundo');
}

function validarFormulario() {
    ValidarRut();
}

function ValidarRut() {
    var rut = document.getElementById('txtRut').value;
    console.log('Rut:' + rut);
    var num = 3;
    var suma = 0;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index,index+1);
        console.log(caracter + 'x' + num);
        suma = suma + (caracter * num);
        num = num - 1;
        if (num == 1) {
            num = 7;
        }

    }
    console.log(suma);
    var resto = suma % 11;
    var dv = 11 - resto;
    if (dv > 9 ){
        if (dv == 10){
            dv ='K';
        }else{
            dv = 0;  
        }
    }
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario) {
        alert('rut incorrecto');
        return false;
    }
    console.log(dv);
    return true;
    
}