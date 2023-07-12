let usuarios = [];

function obtenerDatosUsuario() {
    let sexo = prompt('Indique su sexo, una h para hombre o una m para mujer:', '');
    let altura = parseInt(prompt('Indique su altura en centímetros:', ''));
    let peso = parseInt(prompt('Indique su peso en kilógramos:', ''));

    let usuario = {
        sexo: sexo,
        altura: altura,
        peso: peso
    };

    usuarios.push(usuario);
}

function calcularIMC(usuario) {
    let altura = Math.round(usuario.altura) / 100;
    let peso = Math.round(usuario.peso);
    let indice = peso / Math.pow(altura, 2);
    let resultado = '';

    switch (usuario.sexo) {
        case 'm':
            if (indice < 20) {
                resultado = 'Tu peso es inferior al normal.';
            } else if (indice >= 20 && indice < 24) {
                resultado = 'Tu peso es normal.';
            } else if (indice >= 24 && indice < 29) {
                resultado = 'Tu peso es superior al normal.';
            } else {
                resultado = 'De acuerdo a tu IMC, poseés obesidad.';
            }
            break;
        case 'h':
            if (indice < 21) {
                resultado = 'Tu peso es inferior al normal.';
            } else if (indice >= 21 && indice < 25) {
                resultado = 'Tu peso es normal.';
            } else if (indice >= 25 && indice < 30) {
                resultado = 'Tu peso es superior al normal.';
            } else {
                resultado = 'De acuerdo a tu IMC, poseés obesidad.';
            }
            break;
        default:
            resultado = 'No se ha podido calcular. No ha indicado si m (mujer) u h (hombre).';
    }

    return {
        indice: indice.toFixed(2),
        resultado: resultado
    };
}

function mostrarResultadoIMC() {
    usuarios.forEach(function (usuario) {
        let resultado = calcularIMC(usuario);

        let mensaje = 'Sexo: ' + usuario.sexo + ', Altura: ' + usuario.altura + ' cm, Peso: ' + usuario.peso + ' kg\n\n';
        mensaje += 'IMC: ' + resultado.indice + ', Clasificación: ' + resultado.resultado;

        alert(mensaje);
    });
}

obtenerDatosUsuario();
mostrarResultadoIMC();