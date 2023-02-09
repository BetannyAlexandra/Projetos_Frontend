
const form = document.querySelector('#form'); //capturar o evento de javascript do formulario

form.addEventListener('submit', function (event) {
    event.preventDefault(); //impedir que a pagina atualize

    const inputPeso = event.target.querySelector('#peso').value;
    const inputAltura = event.target.querySelector('#altura').value; //receber as variáveis do html 

    const peso = Number(inputPeso); //tranformar pese e altura em number
    const altura = Number(inputAltura);

    if (!peso) {
        setResultado('peso invalido', false);
        return; //testar se peso e altura tem valores invalidos
    }
    if (!altura) {
        setResultado('altuura invalida', false);
        return;
    }


    console.log(peso, altura); //imprimir na tela peso e altura
    const imc = getIMC(peso, altura);
    const nivelIMC=getNivelImc(imc);
    const msg=`seu imc é ${imc} (${nivelIMC}).`;
    setResultado(msg,true);
    
     console.log(imc,nivelIMC);
    // if (imc < 18.5) {
    //     console.log("seu imc é",imc,"você está abaixo do peso");
    // }
}
);
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5]

    } if (imc >= 34.9) {
        return nivel[4];

    } if (imc >= 29.9) {
        return nivel[3];

    } if (imc >= 24.9) {
        return nivel[2];

    } if (imc >= 18.5) {
        return nivel[1];

    } if (imc < 18.5) {
         return nivel[0]; }
}
function getIMC(peso, altura) {
    const imc = peso / altura ** 2; //calcular o imc


    return imc.toFixed(2);
}


function criaP() {
    const p = document.createElement('p');
    return p; 
}

function setResultado(msg,isValid) {
    const Resultado = document.querySelector('#resultado');
    Resultado.innerHTML = '';
     const p = criaP();
    if (isValid) { p.classList.add('paragrafo-resultado') 
} else {
        p.classList.add('bad')
    }
   

    p.innerHTML = msg;
    Resultado.appendChild(p);

}

