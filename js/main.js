const link__nav = document.querySelectorAll(".btn__nav");
const main = document.querySelectorAll(".main");

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

document.getElementById("inicio").addEventListener('click', () => activeBtn(0));
document.getElementById("habitaciones").addEventListener('click', () => activeBtn(1));
document.getElementById("contacto").addEventListener('click', () => activeBtn(2));
document.getElementById("galeria").addEventListener('click', () => activeBtn(3));
document.getElementById("turismo").addEventListener('click', () => activeBtn(4));
