/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let chessPiece = "BiSHOP";


switch(chessPiece.toLowerCase()){
  case 'king':
    console.log("only one square in any direction");
    break;

  case 'queen':
    console.log("moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.");
    break;
    
  case 'rook':
    console.log("moves any number of vacant squares forwards, backwards, left, or right in a straight line. It also takes part, along with the king, in a special move called castling");
    break;

  case 'bishop':
    console.log("moves any number of vacant squares diagonally in a straight line.");
    break;

  case 'knight':
    console.log("moves on an extended diagonal from one corner of any two-by-three rectangle of squares to the farthest opposite corner.");
    break;
  
  case 'pawn':
    console.log("moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board.");
    break;

  default:
    console.log('ERROR!!!')
  }