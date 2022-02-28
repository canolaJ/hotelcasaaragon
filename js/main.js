const link__nav = document.querySelectorAll(".btn__nav");
const main = document.querySelectorAll(".main");
const elemento = document.getElementById('new__data');
const header = document.getElementById('header');
const dateIn = document.getElementById('dateIn');
const dateOut = document.getElementById('dateOut');
const dateIn__user = document.getElementById('dateIn__user');
const form__contact = document.getElementById('form__contact');
const form__inicio = document.getElementById('form__inicio');
let  res = "";

let errors = {
    name : true,
    email : true,
    phone : true,
    dateIn : true,
    dateOut : true,
    name__user : true,
    email__user : true,
    phone__user : true,
    dateIn__user : true,
    dateOut__user : true
}

const data_obj = [

    {
        title: 'Alcaldía Cartago' ,
        img : 'img/ultimas/alcaldia.jpg',
        url : 'https://es.wikipedia.org/wiki/Catedral_de_Nuestra_Se%C3%B1ora_del_Carmen_(Cartago)'},

    {
        title: 'Catedral De  Nuestra Señora Del Carmen' ,
        img : 'img/ultimas/catedral.jpg',
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
        img : 'img/ultimas/colors.jpg',
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

const galery__Room = [

    {
        img : 'img/habitaciones/1.jpg',
    },
    {
        img : 'img/habitaciones/2.jpg',
    },
    {
        img : 'img/habitaciones/3.jpg',
    },
    {
        img : 'img/habitaciones/4.jpg',
    },
    {
        img : 'img/habitaciones/5.jpg',
    },
    {
        img : 'img/habitaciones/6.jpg',
    },
    {
        img : 'img/habitaciones/7.jpg',
    },
    {
        img : 'img/habitaciones/8.jpg',
    },
    {
        img : 'img/habitaciones/9.jpg',
    },
    {
        img : 'img/habitaciones/10.jpg',
    },
    {
        img : 'img/habitaciones/11.jpg',
    }


];

const galery__Hotel = [

    {
        img : 'img/habitaciones/sala.jpg',
    },
    {
        img : 'img/carrusel/2.jpg',
    },
    {
        img : 'img/carrusel/3.jpg',
    },
    {
        img : 'img/carrusel/4.jpg',
    },
    {
        img : 'img/carrusel/frente.jpg',
    },
    {
        img : 'img/carrusel/OS2A2851p2.jpg',
    },
    {
        img : 'img/carrusel/OS2A2881.jpg',
    },
    {
        img : 'img/carrusel/portada.jpg',
    },
    {
        img : 'img/carrusel/OS2A2963.jpg',
    },
    

];

const galery__Cartago = [

    {
        img : 'img/ultimas/colors.jpg',
    },
    {
        img : 'img/ultimas/alcaldia.jpg',
    },
    {
        img : 'img/ultimas/catedral.jpg',
    },
    {
        img : 'img/ultimas/22256739_167987447086873_5292377217343555640_o.jpg',
    },
    {
        img : 'img/ultimas/29339634_211687646050186_1240371857706713088_n.jpg',
    },
    {
        img : 'img/ultimas/29872608_216975638854720_8151788073593769923_o.jpg',
    },
    {
        img : 'img/ultimas/31961899_226972537855030_7530093854855266304_n.jpg',
    },
    {
        img : 'img/ultimas/42095859_306912963194320_1674418147379118080_n.jpg',
    },
    {
        img : 'img/ultimas/42988611_311350749417208_5824144346806484992_n.jpg',
    },
    {
        img : 'img/ultimas/109681953_674093129809633_7380120457673621590_n.jpg',
    },
    {
        img : 'img/ultimas/117445277_691605618058384_8033625984925601783_n.jpg',
    },
    {
        img : 'img/ultimas/118398308_702557713629841_3107192814825061071_n.jpg',
    },
    {
        img : 'img/ultimas/120239329_724396021446010_1640901084148215703_n.jpg',
    },
    
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

const galeryRoom = () =>{
    elemento.innerHTML = ""
    header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">Galeria Habitaciones</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
    galery__Room.forEach(object => {
        elemento.innerHTML += `
            <div class="col-sm-12 galery__room">
                <img src="${object.img}" alt="...">
            <div>
        `;
    });
}

const galeryHotel = () =>{
    elemento.innerHTML = ""
    header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">Galeria Hotel</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
    galery__Hotel.forEach(object => {
        elemento.innerHTML += `
            <div class="col-sm-12 galery__room">
                <img src="${object.img}" alt="...">
            <div>
        `;
    });
}

const galeryCartago = () =>{
    elemento.innerHTML = ""
    header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">Galeria Cartago</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
    galery__Cartago.forEach(object => {
        elemento.innerHTML += `
            <div class="col-sm-12 galery__room">
                <img src="${object.img}" alt="...">
            <div>
        `;
    });
}

const reservarRoom =() =>{
    elemento.innerHTML = ""
    header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">Realizar Reserva</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
        elemento.innerHTML = `
        <form method="post" action="src/sendReserva.php" data-aos="flip-left" id='form__reserva'>
            <div class="row g-3">
                <div class="col-sm-12 col-md-4">
                    <input type="text" class="form-control" onkeyup="validaterFields(1,'name__user')" placeholder="Nombre Completo" name="name" id="name__user"  required>
                </div>
                <div class="col-sm-12 col-md-4">
                    <input type="email" class="form-control" onkeyup="validaterFields(2,'email__user')" placeholder="E-mail" name="email" id="email__user" >
                </div>
                <div class="col-sm-12 col-md-4">
                    <input type="text" class="form-control" onkeyup="validaterFields(3,'phone__user')" placeholder="Teléfono" name="phone" id="phone__user" required>
                </div>
                <div class="col-sm-12 col-md-4">
                    <select id="room__type__user" name="room__type" class="form-select">
                        <option selected>Sencilla 1 Persona - Ventilador</option>
                        <option >Sencilla 1 Persona - A/C</option>
                        <option>Sencilla 2 Persona - Ventilador</option>
                        <option>Sencilla 2 Persona  - A/C</option>
                        <option>Habitación Doble - Ventilador</option>
                        <option>Habitación Doble - A/C</option>
                        <option>Habitación Triple - Ventilador</option>
                        <option>Habitación Triple - A/C</option>
                    </select>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class=" input-group">
                        <span class="input-group-text">Check-in</span>
                        <input type="date" id="dateIn__user" name="dateIn" onblur="validaterFields(4,'dateIn__user')" class="form-control" aria-describedby="dateIn__user">
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class=" input-group">
                        <span class="input-group-text">Check-out</span>
                        <input type="date" id="dateOut__user" name="dateOut" onblur="validaterFields(4,'dateOut__user')" onchange="validaterFields(4,'dateOut__user')" class="form-control" aria-describedby="dateOut">
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 text-center btn__reserva__room">
                    <button class="btn btn-aragon btn__reserva" id="btn__reserva__user"><i class="fas fa-sign-in-alt"></i> Realizar Reserva</button>
                </div>
            </div>
        </form>
        `;
  
}

const hospedaje =() =>{
    elemento.innerHTML = ""
    header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">Reseña histórica</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
        elemento.innerHTML = `
            <div class="col-sm-12 container__resena">
                <img src="img/carrusel/frente.jpg"/>
            </div>
            <div class="col-sm-12 parrafo__resena">
                <p>El<strong> Hotel Casa Aragón</strong> lleva funcionando en la ciudad de Cartago desde 1998, surge por la inquietud de una familia de la región, que preocupados por el desarrollo y la belleza de sus alrededores tomaron la decisión un día de construir con gran esfuerzo y dedicación lo que  hoy se ha convertido en un sitio acogedor, cuyas instalaciones proporcionan un ambiente familiar para los turistas, ejecutivos y empresarios.
                Sus servicios y su diseño arquitectónico, armonizan con el paisaje cultural cafetero de ricas transcendencias regional nacional e internacional. Que bajo el respeto, valoración y estimaciones del medio ambiente, hacemos uso racional de los recursos naturales que evocan el enamoramiento constante de todo aquel que por sus causes, emblemas, sitios y comercio, transitan bajo la mirada coqueta y sanadora del astro rey.
                </p>
            </div>
        `;

}

const politicas =() =>{
    elemento.innerHTML = ""
    header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">Políticas de Sostenibilidad</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
        elemento.innerHTML = `
            <p> En Hotel Casa Aragón buscamos la integración de los valores y principios asociados al desarrollo sostenible en nuestros procesos de negocio y en la relación con todos nuestros grupos de Interés. Creemos que la sostenibilidad es el elemento clave que permitirá que sigamos siendo motor de la economía. Apostamos por la mejora continua para asegurar el futuro, Acogiendo las normas y demandas  constitucionales e institucionales. Queremos que esta forma de actuar sea lo que nos ayude a reforzar la relación con nuestros grupos de interés y que sea aquello que nos diferencie y nos convierta en una empresa más sostenible, más estable, segura y más atractiva para todos aquellos que se acercan a nosotros.
            Por lo tanto, el Hotel Casa Aragón establecerá y mantendrá programas de sostenibilidad, de seguridad y salud en el trabajo, de mejora continua, comprometida en lograr que colaboradores, huéspedes y visitantes entiendan y compartan los deberes, derechos frente a  la sostenibilidad  que permitan prevenir los impactos negativos ambientales, socio-culturales y económicos. De  igual manera, se compromete a implementar herramientas que nos ayuden a prevenir la explotación sexual comercial de niños, niñas, y adolescentes, tráfico de flora y fauna y bienes culturales. Por ello, el Hotel Casa Aragón se preocupa por el cumplimiento de la normatividad vigente aplicable a nuestra actividad comercial.</p>
            <a class="btn btn-aragon-danger btn__politicas shadow" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Ver Normatividad Vigente
            </a>
            <div class="collapse" id="collapseExample">
                <div class="card card text-dark bg-light" style="height: 100%;">
                    <div class="card-header">
                        <h5 class="text-dark">Normatividad Vigente</h5>
                    </div>
                    <div class="card-body">
                        <p> El HOTEL CASA ARAGON está sujeto al régimen de responsabilidad que establece la Ley 300 de 1996 y los Decretos 1075 de 1997.  Igualmente está comprometido con la implementación de la Norma NTS-TS002 y con el cumplimiento de los artículos 16 y 17 de la Ley 679 de 2001 que reglamentan la protección de los menores de edad contra la explotación y violencia sexual. La Ley 17 de 1981 sobre protección de flora y fauna; la Ley 397 de 1997 por la cual se fomenta la conservación de los monumentos arqueológicos y/o patrimonio cultural. Los requisitos exigidos en el Decreto 834 de 2013 Referente al Control de Extranjeros. La Ley 1335 de 2009 Antitabaco; Ley 1482 de 2011 con la no discriminación y exclusión de poblaciones vulnerables. Ley 599 de 2000, decreto 1608 de 1978 y Ley 1453 de 2011. Contra el tráfico de especies como flora y fauna silvestre. Y las exigencias especiales para la protección de datos personales de menores de edad (niños, niñas y adolescentes) y de los adultos que suministran sus datos personales que se encuentran incluidos en nuestras bases de datos, con fines turísticos u otros, preservando su protección, conservación y garantizando su uso responsable y seguro, procurando proteger el derecho a la privacidad y protección de su información personal y toda aquella que se suministra a través de los formatos de registro en el hotel y también en la página web antes y después de la vigencia del decreto y la ley. Le invitamos hacer parte de nuestro compromiso ambiental con el uso eficiente del agua y la energía, así como del manejo integral de residuos sólidos y el compromiso por su reducción, reutilización y reciclaje. IMPRIMA SOLO SI ES NECESARIO. DE HACERLO EN LO POSIBLE UTILICE PAPEL RECICLABLE. PROTEJAMOS EL PLANETA.</p>
                    </div>
                </div>
            </div>
        `;

}


const sendActive = () => {
    if(!errors.name && !errors.email && !errors.phone && !errors.dateIn && !errors.dateOut) {
        btn__reserva.classList.remove('btn__reserva');
        form__inicio.addEventListener('submit', () => {
            Swal.fire({
                title: 'Reserva realizada!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
        });
    }else{
        btn__reserva.classList.add('btn__reserva');
    }

    if(!errors.name__user && !errors.email__user && !errors.phone__user && !errors.dateIn__user && !errors.dateOut__user) {
        document.getElementById('btn__reserva__user').classList.remove('btn__reserva');
    }else{
        document.getElementById('btn__reserva__user').classList.add('btn__reserva');
    }
}

const isValidate = (res, input__campo)=>{
    if(res){
        document.getElementById(input__campo).classList.remove("is-invalid");
        document.getElementById(input__campo).classList.add("is-valid");
    }else{
        document.getElementById(input__campo).classList.remove("is-valid");
        document.getElementById(input__campo).classList.add("is-invalid");
    }
}


const validateName = (value) => {

    expresion = /[A-Za-záéíóúÁÉÍÓÚ]{6,15}$/;
    res = expresion.test(value);
    return (res) ? true : false;
}

const validateEmail = (value) => {
    expresion =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    res = expresion.test(value);
    return (res) ? true : false;
}

const validatePhone = (value) => {
    expresion =/^[0-9]{10,}$/,
    res = expresion.test(value);
    return (res) ? true : false;
}

const validateDescription = (value) => {

    expresion = /[A-Za-z áéíóúÁÉÍÓÚ0-9.,;\s]{0,30}$/;
    res = expresion.test(value);
    return (res) ? true : false;
}

const validaterFields = (option,input) => {
   try {
        const value = document.getElementById(input).value;
        switch (option) {
            case 1:

                res = validateName(value);
                isValidate(res,input);

                break;

            case 2:
                res = validateEmail(value);
                isValidate(res,input);

                break;

            case 3:
                res = validatePhone(value);
                isValidate(res,input);

                break;

            case 4:
                if(value){
                    res = true;
                    isValidate(res,input);
                }else{
                    res = false;
                    isValidate(res,input);
                }

                break;

            default:
                break;
        }
        (res) === true ? errors[input] = false : errors[input] = true;
        sendActive();

   } catch (error) {
        console.log("error");
   }

}

const validate__fields__contact = ()=> {
    try {
        const user = form__contact['name__contact'].value;
        const email = form__contact['email__contact'].value;
        const phone = form__contact['phone__contact'].value;
        const description = form__contact['description__contact'].value;

        if(user && email && phone && description){

            const res__user = validateName(user);
            const res__email = validateEmail(email);
            const res__phone = validatePhone(phone);
            const res__description = validateDescription(description);

            if(res__user && res__email && res__phone && res__description){
                form__contact.submit();
                Swal.fire({
                    title: 'Envío realizado!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
            }else{
                Swal.fire({
                    title: 'Algunos campos no estan bien',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                })
            }

        }else{
            Swal.fire({
                title: 'Faltan campos por llenar',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        }

    } catch (error) {
        console.log("error");
    }
}


document.getElementById('add__data').addEventListener('click',turismoCartago);
document.getElementById('add__data__cafetero').addEventListener('click',turismoCafetero);
document.getElementById('add__data__room').addEventListener('click',galeryRoom);
document.getElementById('add__data__hotel').addEventListener('click',galeryHotel);
document.getElementById('add__data__cartago').addEventListener('click',galeryCartago);
document.getElementById("inicio").addEventListener('click', () => activeBtn(0));
document.getElementById("habitaciones").addEventListener('click', () => activeBtn(1));
document.getElementById("contacto").addEventListener('click', () => activeBtn(2));
document.getElementById("galeria").addEventListener('click', () => activeBtn(3));
document.getElementById("turismo").addEventListener('click', () => activeBtn(4));
dateIn.addEventListener('blur', (e) => validaterFields(4,'dateIn'));
dateOut.addEventListener('blur', (e) => validaterFields(4,'dateOut'));
form__contact.addEventListener('submit', (event) => {
    event.preventDefault();
    validate__fields__contact();
});

