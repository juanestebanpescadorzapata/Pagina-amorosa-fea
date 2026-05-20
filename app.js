let com = confirm("me amas");
if(com==true){
    alert("yo tambien")
}
else{
    alert("lo sabia")
}

let saludo=function saludar(){
    return"hola";
}
console.log(saludo(ko))


const siBoton = document.getElementById('siBoton');
const noBoton = document.getElementById('noBoton');
const container = document.getElementById('container');
console.log(siBoton.constructor.name )
let clickCount = 0;

siBoton.addEventListener('click', () => {
    if (clickCount < 4) {
        moveButton();
        clickCount++;
    }

    if (clickCount === 4) {
        alert('YO TE AMO MAS');
    }
});

noBoton.addEventListener('click', () => {
    alert('listo, todo bien".');
});

function moveButton() {
    const maxX = container.clientWidth - siBoton.clientWidth;
    const maxY = container.clientHeight - siBoton.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    siBoton.style.position = 'absolute'; // Asegura que el botón se pueda mover
    siBoton.style.left = randomX + 'px';
    siBoton.style.top = randomY + 'px';
}