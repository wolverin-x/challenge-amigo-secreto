// Creacion de array
let amigos = [];
//Boton para el sorteo
const botonSortear = document.getElementById('sorteo');
const iconoSorteo = document.getElementById('iconoSorteo');

//FUNCIONES
//Funcion para agregar amigos
function agregarAmigo() {
    //Toma el valor del campo de entrada
    const input = document.getElementById('amigo');
    //Elimina espacios innecesarios
    const nombre = input.value.trim();

    //Valida del campo, si esta vacio alerta para
    //ingresar un nombre
    if (nombre === '') {
        alert('Debes ingresar el nombre de un amigo');
        return;
    }

    //Añade el nombre del amigo al array
    amigos.push(nombre);

    //Actualiza la lista
    actualizarLista();

    //Limpia el campo luego de añadido el nombre
    input.value = '';
}

//Funcion para actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    //Recorre el array de amigos y crea unelemento li
    //para cada uno
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

//Funcion para sortear amigo invisible
function sortearAmigo() {
    //Evaluacion del estado del boton sortear
    if (botonSortear.dataset.estado === "reiniciar") {
        reiniciarSorteo();
        return;
    }

    //Valida que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear, añade algunos');
        return;
    }

    //Gener un indice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtiene el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Muestra el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    //Cambia el texto del boton y actuliza su estado
    iconoSorteo.src = "assets/icono-reiniciar.png"
    botonSortear.innerHTML = "Reiniciar sorteo";
    botonSortear.dataset.estado = "reiniciar";
}

//Funcion para reiniciar el sorteo, agregando nuevos amigos
function reiniciarSorteo() {
    //Limpia el array de amigos
    amigos.length = 0;
    //Limpia la lista de resultados
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';

    //Restaurar nombre y estado del boton 
    iconoSorteo.src = "assets/play_circle_outline.png"
    botonSortear.innerHTML = "Sortear amigo";
    botonSortear.dataset.estado = "sortear";
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//alert('Bienvenido al juego "Amigo Secreto"');
//alert('creado por servytech');
