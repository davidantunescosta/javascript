function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); //15.7
console.log(total)

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Está é minha cor favorita';
  } else if (cor === 'verde') {
    return 'É minha cor';
  } else {
    return 'Não gostei de nenhuma';
  }
}

function mostrarConsole() {
  console.log('Oi')
}

addEventListener('click', mostrarConsole);


var profissao = 'Designer'

function dados() {
  var nome = 'David';
  var idade = 28;
  function outroDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outroDados();
}
console.log(dados())
 //Retorna 'David, 29, Rio de Janeiro, Designer'
 //retornar um erro