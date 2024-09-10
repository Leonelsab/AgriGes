function agregarPlanta() {
    var nombre = document.getElementById('nombre').value;
    var arie = document.getElementById('arie').value;
    var plaga = document.getElementById('plaga').value;
    var fertilidad = document.getElementById('fertilidad').value;
    var desempenio = document.getElementById('desempenio').value;

    var plantList = document.getElementById('plant-list');
    var nuevaPlanta = document.createElement('div');
    nuevaPlanta.className = 'planta';
    nuevaPlanta.innerHTML = '<strong>Nombre:</strong> ' + nombre + '<br>' +
                            '<strong>Aria de cultivo:</strong> ' + arie + '<br>' +
                            '<strong>Plaga:</strong> ' + plaga + '<br>' +
                            '<strong>Fertilidad:</strong> ' + fertilidad + '<br>' +
                            '<strong>Desempeño:</strong> ' + desempenio + '<br>' +
                            '<button onclick="eliminarPlanta(this)">Eliminar</button><hr>';

    plantList.appendChild(nuevaPlanta);

    // Limpiar los campos del formulario después de agregar la planta
    document.getElementById('nombre').value = '';
    document.getElementById('arie').value = '';
    document.getElementById('plaga').value = '';
    document.getElementById('fertilidad').value = '';
    document.getElementById('desempenio').value = 'bueno';
}

function eliminarPlanta(botonEliminar) {
    var planta = botonEliminar.parentNode;
    var plantList = document.getElementById('plant-list');
    plantList.removeChild(planta);
}
