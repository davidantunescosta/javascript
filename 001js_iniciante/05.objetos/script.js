var pessoa = {
  nome: 'David',
  idade: 25,
}

var menu = {
  width: 800,
  heigth: 50,
  backgroundColor: '#84E',
}


//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem!
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,

  latir(pessoa){
    if(pessoa === 'homem') {
      return 'Latir'
    } else {
      return 'Nada'
    }
  }
}