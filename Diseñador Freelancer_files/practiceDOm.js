//seleccion general
console.log(document.body);
console.log(document.head);
console.log(document.domain);


//seleccion de elementos
let form = document.querySelector('form');
console.log(form);
console.log(form.attributes[1]);

console.log(form.attributes[2]);

console.log(form.attributes[0]);


//modificacion de texto
let navegation = document.querySelector('.contenedor_nav');
console.log(navegation);

//celestito bg y color azul(style)

navegation.firstElementChild.style.color = 'midnightblue';
navegation.firstElementChild.style.backgroundColor = 'lightblue';
navegation.firstElementChild.textContent = 'Presentacion';

//cambiando la imgn del background-image del css3 
 let imagen = document.querySelector('.heroe');
 console.log(imagen);

 imagen.style.backgroundImage = 'url(imgns/estudiando.jpg)';


//agreguemos una clase para hacer una transicion
//1.- desaparecer el texto
let servicios = document.querySelector('.services');
console.log(servicios);

console.log(servicios.firstElementChild.children[1]);
console.log(servicios.firstElementChild.children[1].firstElementChild);

console.log(servicios.firstElementChild.children[1]);
console.log(servicios.children[1].children[1]);
console.log(servicios.children[2].children[1]);


servicios.firstElementChild.children[1].addEventListener('click',eventFirst);
servicios.children[1].children[1].addEventListener('click',eventoSecond);
servicios.children[2].children[1].addEventListener('click',eventThree);

console.log(servicios.children[1].lastElementChild);
console.log(servicios.children[2].lastElementChild);

function eventFirst() {
    // console.log('haz clickado!!');
    
    if (servicios.firstElementChild.lastElementChild.classList.contains('activs')) {

        servicios.firstElementChild.lastElementChild.classList.remove('activs');
        servicios.firstElementChild.children[1].firstElementChild.style.animation = 'alternaColor 2s infinite';

    } else {
        servicios.firstElementChild.lastElementChild.classList.add('activs');
        servicios.firstElementChild.children[1].firstElementChild.style.animation = 'none';
    }
}

function eventoSecond() {
    // console.log('haz clickado!!');
    if (servicios.children[1].lastElementChild.classList.contains('activs')) {

        servicios.children[1].lastElementChild.classList.remove('activs');
        // servicios.firstElementChild.children[1].firstElementChild.style.animation = 'alternaColor 2s infinite';
        servicios.children[1].children[1].firstElementChild.style.animation = 'alternaColor 2s infinite';

    } else {
        servicios.children[1].lastElementChild.classList.add('activs');
        servicios.children[1].children[1].firstElementChild.style.animation = 'none';
    }
}

function eventThree() {
    // console.log('haz clickado!!');
    if (servicios.children[2].lastElementChild.classList.contains('activs')) {

        servicios.children[2].lastElementChild.classList.remove('activs');
        servicios.children[2].children[1].firstElementChild.style.animation = 'alternaColor 2s infinite';

    } else {

        servicios.children[2].lastElementChild.classList.add('activs');
        servicios.children[2].children[1].firstElementChild.style.animation = 'none';
    }
}
//------------------------------------------------------------
// practice traversing
//cambie contacto por contacteme!!
let nvg = document.querySelector('.contenedor_nav');
console.log(nvg);
nvg.lastElementChild.textContent='Contacteme!!';
//del hijo al padre
console.log(nvg.parentNode); 
//entre hermanos
// nvg.firstElementChild.nextElementSibling.textContent = 'Sobre mi';
//----------------------------------
//generacion de elements HTML 
//agregr en el formulario DNI y que vaya primero...

//crear un label
let etiqueta = document.createElement('label');
etiqueta.textContent = 'DNI';
//crear un input con sus clases
let entrada = document.createElement('input');
entrada.classList.add('input-text');
entrada.type = 'number';
console.log(entrada);
entrada.placeholder = 'ingrese DNI';
//crear un nuevo contenedor de clase campo

let containForm = document.createElement('div');
containForm.classList.add('campos');

//--insertando
containForm.appendChild(etiqueta);
containForm.appendChild(entrada);
console.log(containForm);
//asignar al contenedor principal

let mainContent = document.querySelector('.contenedor-campos');
mainContent.insertBefore(containForm,mainContent.children[0]);
//_---------queremos remover---------------------
 let dni = document.querySelector('.campos');
 console.log(dni);
 dni.remove();