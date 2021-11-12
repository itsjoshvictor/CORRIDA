const calcular = document.getElementById('calcular');


function pace () {
    const nome = document.getElementById('nome').value;
    const distancia = document.getElementById('distancia').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    const tempo = document.getElementById('tempo');

    if (nome !== '' && distancia !== '' && peso !== '' && tempo !== '' ) {



      const  tempo_corte = tempo.split(':');
      const  horas = parceInt(tempo_corte[0]);
      const  minutos = parceInt(tempo_corte[1]);
      const  segundos = parceInt(tempo_corte[2]);
      const tempo_horas = horas + minutos/60 + segundos/3600;
      const tempo_minutos = tempo_horas*60;
      const velocidade = (distancia/(tempo_horas)).toFixed(2);
      const pace = ((60/velocidade)).toFixed(2);
      const calorias = (velocidade*peso*0.0175(tempo_minutos)).toFixed(2);
      


       
    }

}
calcular.addEventListener('click', pace);
