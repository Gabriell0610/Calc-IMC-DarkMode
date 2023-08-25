const modeIcon = document.getElementById('modeIcon')


modeIcon.addEventListener('click', () => {
    const form = document.getElementById('toggleMode')
    if(modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.remove('fa-moon')
        modeIcon.classList.add('fa-sun')

        form.classList.add('dark')
    }else {
        modeIcon.classList.add('fa-moon')
        modeIcon.classList.remove('fa-sun')

        form.classList.remove('dark')
    }
});

const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('result');

    if(nome!== '' && altura!== '' && peso!== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC < 18.5) {
            classificacao = 'abaixo do peso!'
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal!'
        }else if (valorIMC < 30) {
            classificacao = 'acima do peso!'
        }else {
            classificacao = 'com obesidade'
        }

        result.textContent = `Olá, ${nome}! Seu IMC é ${valorIMC} e você está ${classificacao}`


    }else {
        result.textContent = 'Preencha todos os campos!!'
    }

}


calcular.addEventListener('click', imc)

