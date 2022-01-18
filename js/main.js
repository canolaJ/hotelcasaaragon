const link__nav = document.querySelectorAll(".btn__nav");
const main = document.querySelectorAll(".main");
const elemento = document.getElementById('new__data');
const header = document.getElementById('header');
const name__user = document.getElementById('name');
const data_obj = [

    {
        title: 'Catedral De  Nuestra Señora Del Carmen' ,
        img : 'img/turismo/cartago/1.png',
        url : 'https://es.wikipedia.org/wiki/Catedral_de_Nuestra_Se%C3%B1ora_del_Carmen_(Cartago)'},

    {
        title: 'Iglesia De Santa Ana ' ,
        img : 'img/turismo/cartago/2.png',
        url : 'https://es.wikipedia.org/wiki/Archivo:Parroquia_San_Joaqu%C3%ADn_y_Santa_Ana._Cartago,_Valle,_Colombia.JPG'},

    {
        title: 'Iglesia De Guadalupe ' ,
        img : 'img/turismo/cartago/3.png',
        url : 'https://www.tripadvisor.co/Attraction_Review-g910883-d8681302-Reviews-Iglesia_de_Guadalupe-Cartago_Valle_del_Cauca_Department.html'},

    {
        title: 'Iglesia De San Jorge' ,
        img : 'img/turismo/cartago/4.png',
        url : 'https://www.cec.org.co/mapaeclesiastico/parroquia-san-jorge'},

    {
        title: 'Iglesia de San Francisco (Nuestra Señora de la Pobreza)' ,
        img : 'img/turismo/cartago/5.png',
        url : 'https://es.wikipedia.org/wiki/Archivo:Iglesia_de_Nuestra_Se%C3%B1ora_de_la_Pobreza_(Templo_de_San_Francisco)_%26_COTECNOVA._Cartago,_Valle,_Colombia.JPG'},

    {
        title: 'Parque Bolivar' ,
        img : 'img/turismo/cartago/6.png',
        url : 'https://www.ciudadregion.com/cultura/hoy-gran-apertura-del-parque-de-bolivar-de-cartago'},

    {
        title: 'Parque La Isleta' ,
        img : 'img/turismo/cartago/7.png',
        url : 'https://es.wikipedia.org/wiki/Parque_La_Isleta_(Cartago)'},

    {
        title: 'Parque Sueños de libertad ' ,
        img : 'img/turismo/cartago/8.png',
        url : 'http://www.goinn.co/Parque-sue%C3%B1os-de-libertad/'},

    {
        title: 'Parque Pedro Moral' ,
        img : 'img/turismo/cartago/9.png',
        url : 'http://luzmarinaquinteromoncada.blogspot.com/2019/10/cartago-y-sus-parques-y-monumentos.html'},

    {
        title: 'Casa del Virrey' ,
        img : 'img/turismo/cartago/10.png',
        url : 'https://es.wikipedia.org/wiki/Casa_del_Virrey_(Cartago)'},

    {
        title: 'La Ruta del Bordado' ,
        img : 'img/turismo/cartago/11.png',
        url : 'https://www.elpais.com.co/cultura/la-ruta-del-bordado-y-sus-pinceladas-de-arte-que-deslumbraron-en-cartago.html'},

    {
        title: 'Centro Comercial Santiago Plaza' ,
        img : 'img/turismo/cartago/12.png',
        url : 'https://santiagoplaza.co/cartago/'},

    {
        title: 'Casa de la Cultura' ,
        img : 'img/turismo/cartago/13.png',
        url : 'https://www.minube.com.co/rincon/casa-de-la-cultura-a4806'},

    {
        title: 'Parque de la salud' ,
        img : 'img/turismo/cartago/14.png',
        url : 'https://es.wikipedia.org/wiki/Parque_de_la_Salud_de_Cartago'},

    {
        title: 'Rio la Vieja' ,
        img : 'img/turismo/cartago/15.png',
        url : 'https://www.google.com/maps/dir/R%C3%ADo+La+Vieja/Cartago,+Valle+del+Cauca/@4.6424904,-75.9026298,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e3857346a5931f5:0xe06f1acf18d51579!2m2!1d-75.8702809!2d4.5466117!1m5!1m1!1s0x8e38701d1696dfd7:0x4e5a8917e065713a!2m2!1d-75.9116289!2d4.7472212!3e0'},

    {
        title: 'Pescalandia' ,
        img : 'img/turismo/cartago/16.png',
        url : 'https://www.facebook.com/PescalandiaCartago/'},

    {
        title: 'Centro Recreacional y Vacacional Villa del Sol' ,
        img : 'img/turismo/cartago/17.png',
        url : '#'},

    {
        title: 'Las Piramides' ,
        img : 'img/turismo/cartago/18.png',
        url : 'https://www.comfenalcovalle.com.co/personas/recreacion-y-deportes/nuestros-centros-recreacionales/'},

    {
        title: 'Centro Recreativo Comfandi' ,
        img : 'img/turismo/cartago/19.png',
        url : 'https://www.comfandi.com.co/persona/cali/recreacion-turismo-y-deporte/centros-recreativos-y-campestres/centro-recreativo-santa-ana-cartago'},

    {
        title: 'Hotel Campestre el Danubio' ,
        img : 'img/turismo/cartago/20.png',
        url : 'https://www.youtube.com/watch?v=YeT8ZsuNksc'},

];

const lugaresCafetero = [
    {
        title: 'Nevado del Ruiz' ,
        img : 'img/turismo/cafetero/1.png',  
        url : 'https://es.wikipedia.org/wiki/Nevado_del_Ruiz'},

    {
        title: 'Valle del Cócora ' ,
        img : 'img/turismo/cafetero/2.png',
        url : 'https://es.wikipedia.org/wiki/Valle_de_Cocora'},

    {
        title: 'Jardín Botánico Universidad Tecnológica de Pereira' ,
        img : 'img/turismo/cafetero/3.png',
        url : '#'},

    {
        title: 'Jardín Botánico del Quindío' ,
        img : 'img/turismo/cafetero/4.png',
        url : 'https://portafolioviceiie.utp.edu.co/jardin-botanico-de-la-universidad-tecnologica-de-pereira'},

    {
        title: 'Área del Santuario de fauna y flora' ,
        img : 'img/turismo/cafetero/5.png',
        url : 'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-andina/santuario-de-flora-y-fauna-otun-quimbaya/'},

    {
        title: 'Laguna de Otún Quimbaya' ,
        img : 'img/turismo/cafetero/6.png',
        url : 'http://www.colparques.net/OTUN'},

    {
        title: 'Recuca' ,
        img : 'img/turismo/cafetero/7.png',
        url : 'https://www.recuca.com/'},

    {
        title: 'La pequeña granja de mamá Lulú' ,
        img : 'img/turismo/cafetero/8.png',
        url : 'http://www.granjamamalulu.com/'},

    {
        title: 'Parque Arqueológico la tierra prometida' ,
        img : 'img/turismo/cafetero/9.png',
        url : 'https://www.viajaporcolombia.com/sitios-turisticos/quindio/parque-agroecologico-la-tierra-prometida_30/'},

];

const activeBtn = (valor) => {
    let dato = -1;
    link__nav.forEach( item => {
        item.classList.remove("active");
        dato++;
        if (dato === valor){
            item.classList.add("active");
            activeContent(valor);
        }
        document.getElementById('check').click();

    });
}


AOS.init();


const activeContent = (valor) =>{

    main.forEach(item => {
        item.classList.add("see__not");
    });
    const content = document.querySelectorAll(".main__"+valor);
    content.forEach(item => {
        item.classList.remove("see__not");
        item.classList.add("see");
    });
}

const turismoCartago = () =>{
    elemento.innerHTML = ""
    header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">TURISMO EN CARTAGO</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
    data_obj.forEach(object => {
        elemento.innerHTML += `
            <div class="col-sm-12 col-md-4 col__card__turismo">
                <div class="card">
                    <img src="${object.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${object.title}</h5>
                    <div class="text-center btn__url">
                        <a href="${object.url}" class="btn btn-aragon-danger" target="_blank">Conocer más <i class="fas fa-chevron-right"></i></a>
                    </div>
                    </div>
                </div>
            <div>
        `;
    });
}

const turismoCafetero = () =>{
    elemento.innerHTML = ""
    header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">TURISMO EN EL EJE CAFETERO</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
    lugaresCafetero.forEach(object => {
        elemento.innerHTML += `
            <div class="col-sm-12 col-md-4 col__card__turismo">
                <div class="card">
                    <img src="${object.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${object.title}</h5>
                    <div class="text-center btn__url">
                        <a href="${object.url}" class="btn btn-aragon-danger" target="_blank">Conocer más <i class="fas fa-chevron-right"></i></a>
                    </div>
                    </div>
                </div>
            <div>
        `;
    });
}

const validaterFields = (option,value) => {
    let expresion = ""
    switch (option) {
        case 1:
            expresion = /^[A-Za-z ]/;///^[A-Za-z0-9_]{1,15}$/
            res = expresion.test(value);
            console.log(res);
            
            break;
    
        default:
            break;
    }

}

document.getElementById('add__data').addEventListener('click',turismoCartago);
document.getElementById('add__data__cafetero').addEventListener('click',turismoCafetero);
document.getElementById("inicio").addEventListener('click', () => activeBtn(0));
document.getElementById("habitaciones").addEventListener('click', () => activeBtn(1));
document.getElementById("contacto").addEventListener('click', () => activeBtn(2));
document.getElementById("galeria").addEventListener('click', () => activeBtn(3));
document.getElementById("turismo").addEventListener('click', () => activeBtn(4));
name__user.addEventListener('change', (e) => {
    console.log(e.target.value);
    validaterFields(1,e.target.value)
});

