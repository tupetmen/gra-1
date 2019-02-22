'use strict';
var buttonNewGame = document.getElementById('new-game');
var maxWinnerGames = document.getElementById('maxWinnerGames');
var result = document.getElementById('result');
var error = document.getElementById('error-message');
var output = document.getElementById('output');
var outputHuman = document.getElementById('human');
var outputComputer = document.getElementById('computer');
var gameContainer = document.getElementById('game');
var gameOver = document.getElementById('game-over');
var score = document.getElementById('score');
var playerWin = 0;
var aiWin = 0;

function finishGame(){
  console.log("finish game dzialasss"); 
  gameContainer.classList.add("hide");
  if(playerWin>aiWin){
    gameOver.innerHTML = ' Wygrałeś ze mną :(';
  }
  else{
    gameOver.innerHTML = 'Ha! Wiedziałem, że wygram :D';
  }
  gameOver.classList.remove("hide");
  playerWin = 0;
  result.querySelector('#wins').innerHTML = playerWin;
  aiWin = 0;
  result.querySelector('#losses').innerHTML = aiWin;
  outputComputer.innerHTML = '';
  outputHuman.innerHTML = '';
  score.innerHTML =''
}
buttonNewGame.addEventListener('click', function(){
//  gameContainer.classList.add("hide"); 
  maxWin = window.prompt('Do ilu wygranych chcesz grać?');
  gameOver.innerHTML = '';
  if(maxWin){
    maxWin = Number(maxWin);
    if(maxWin > 0){
 //początek warunków jeżeli podał liczbe większą od 0      
      maxWinnerGames.querySelector('#max-games').innerHTML = maxWin;
      button1.addEventListener('click', playerMove);
      button2.addEventListener('click', playerMove);
      button3.addEventListener('click', playerMove);
//koniec warunków jeżeli podał liczbe większą od 0  
      error.querySelector('#test-message').innerHTML = '';
      gameContainer.classList.remove("hide");  
    }
    else if(maxWin <= 0){
      error.querySelector('#test-message').innerHTML = 'musi być większe od 0'; 
      }
    else{
      error.querySelector('#test-message').innerHTML = 'to nie liczba';
    }
  }
  else{
    error.querySelector('#test-message').innerHTML = 'wpisz cos';
  }  
}                              
);
var playerMove = function(event){
    // co wybrał user  
   // output.innerHTML = '';
    if(this == button1){outputHuman.innerHTML = '<br>User wybrał: <b>Papier</b>';}
    else if(this == button2){outputHuman.innerHTML = '<br>User wybrał: <b>Kamień</b>';}
    else if(this == button3){outputHuman.innerHTML = '<br>User wybrał: <b>Nożyce</b>';}
    //co wybrał komputer
    var rand =  Math.floor(Math.random()*3+1);
    if(rand == 1){outputComputer.innerHTML = '<br>Komputer wybrał: <b>Papier</b>';}
    else if(rand == 2){outputComputer.innerHTML = '<br>Komputer wybrał: <b>Kamień</b>';}
    else if(rand == 3){outputComputer.innerHTML = '<br>Komputer wybrał: <b>Nożyce</b>';}
    //jaki jest wynik 
    if(this == button1 && rand == 1){score.innerHTML ='<br>REMIS';}
    else if(this == button2 && rand == 2){score.innerHTML ='<br>REMIS';}
    else if(this == button3 && rand == 3){score.innerHTML ='<br>REMIS';}
    else if(this == button1 && rand == 2){score.innerHTML ='<br>WYGRAŁEŚ';
                                         playerWin++;
                                          result.querySelector('#wins').innerHTML = playerWin;}
    else if(this == button1 && rand == 3){score.innerHTML = '<br>PRZEGRAŁEŚ';
                                          aiWin++;
                                          result.querySelector('#losses').innerHTML = aiWin;}
    else if(this == button2 && rand == 1){score.innerHTML = '<br>PRZEGRAŁEŚ';
                                          aiWin++;
                                         result.querySelector('#losses').innerHTML = aiWin;}
    else if(this == button2 && rand == 3){score.innerHTML = '<br>WYGRAŁEŚ';
                                          playerWin++;
                                         result.querySelector('#wins').innerHTML = playerWin;}
    else if(this == button3 && rand == 1){score.innerHTML = '<br>WYGRAŁEŚ';
                                         playerWin++;
                                         result.querySelector('#wins').innerHTML = playerWin;}
    else if(this == button3 && rand == 2){score.innerHTML = '<br>PRZEGRAŁEŚ';
                                          aiWin++;
                                         result.querySelector('#losses').innerHTML = aiWin;}
  if(maxWin==playerWin || maxWin==aiWin){
    finishGame()
  }  
};
//przypisanie zmiennych do buttonow
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
//przypisanie akcji do buttonow