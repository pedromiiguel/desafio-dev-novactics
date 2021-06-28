const numero = require('numero-por-extenso');

// Conversão de kudos para pontos

const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
let arrKudos = [];

function getKudosForUser(points) {
  arrKudos = [];
  for (let i = 4; i >= 0; i--) {
    if (points >= KUDOS_TO_POINTS[i].value) {
      points = points - KUDOS_TO_POINTS[i].value;
      arrKudos.push(KUDOS_TO_POINTS[i].name);
      i = 4;
    }
  }
  return arrKudos;
}

/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function getKudosValueMessageForUser(kudos) {
  let value = 0;

  kudos.forEach((kudo) => {
    KUDOS_TO_REAL.forEach((real) => {
      if (kudo === real.name) {
        value = value + real.value;
      }
    });
  });

  let numExtenso = numero.porExtenso(value);
  return `Você recebeu ${numExtenso} reais em retorno aos kudos ${kudos.join(', ')}!`
}

getKudosValueMessageForUser(arrKudos);

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
