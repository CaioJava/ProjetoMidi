
/*
document.querySelector('.tecla_clap');
document.querySelector('.tecla_tim');
document.querySelector('.tecla_puff');
document.querySelector('.tecla_splash');
document.querySelector('.tecla_toim');
document.querySelector('.tecla_psh');
document.querySelector('.tecla_tic');
document.querySelector('.tecla_tom');   */ 

function tocaSom(seletorAudio){
    const element = document.querySelector(seletorAudio);

    if (element && element.localName === 'audio'){

        element.play();
    }
    else{
        alert("Elemento ão encontrado");
    }


}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(var contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`  //template string
   
    tecla.onclick = function () {

        tocaSom(idAudio);
    } 

    tecla.onkeydown = function(event){

        //console.log(event.code === 'Space' )

        if (event.code === 'Space' || event.code === "Enter"){

            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){

        tecla.classList.remove('ativa');
    }

}
//    OUTRA FORMA DE ESCREVER A REPETICAO*******************************
/*
let contador = 0;

while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`  //template string
   
    tecla.onclick = function () {

        tocaSom(idAudio);
    }
    contador++;

}*/
