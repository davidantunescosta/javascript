var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
  console.log('É verdadeiro');
} else if(possuiDoutorado) {
  console.log('Possui doutorado');
} else {
  console.log('Não possui nada')
}

var nome = ''

if(nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

if(!possuiGraduacao) { //!transforma valor true em false
  console.log('Não possui graduação')
}