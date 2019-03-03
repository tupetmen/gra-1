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
 var gameOverContent = document.getElementsByClassName('content game-over');
var score = document.getElementById('score');
var maxWin;
var scoreHelp = [ " 0 ", " 1 " ];
var scoreHelp2;
var computerWinResult = " 0 : 1 ";
var thereIsNoWinnerResult = " 0 : 0 ";
var scoreList;
var scorePrint = [];
var buttonNewGame = document.getElementById('new-game');
var params = {
  playerWin: 0,
  aiWin: 0,
  round: 0,
  progress: {"runda":"0",
             "ruch gracza":"0",
             "ruch komputera":"0", 
             "wynik rundy":"0", 
             "wynik gry":"0"}
  
  
  
};
console.log(gameOverContent);
// console.log(scoreHelp);
//nasłuch na kliknięcie
buttonNewGame.addEventListener('click', function(){
//  gameContainer.classList.add("hide"); 
  maxWin = window.prompt('Do ilu wygranych chcesz grać?');
  resetScore();
  if(maxWin){
    maxWin = Number(maxWin);
    if(maxWin > 0){
//początek warunków jeżeli podał liczbe większą od 0      
      maxWinnerGames.querySelector('#max-games').innerHTML = maxWin;
      
      var buttons = document.getElementsByClassName('player-move');
      
      for(var i = 0; i < buttons.length; i++){
     //   console.log("test");
        //buttons.forEach(function(button, index){
        (function(){
          
          var button = buttons[i];
          var buttonName =  button.getAttribute('data-move');
          button.addEventListener('click',function(){
          playerMove(buttonName);
          })
         }());
      };
       
        //console.log(buttonsName, i);
      //  buttonsName = buttons[i].getAttribute('data-move');
      
      
      
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
});

//zmienna dla funkcji gry
var playerMove = function(buttonsName){
    // co wybrał user  
   // output.innerHTML = '';
// console.log(buttonsName);
    if(buttonsName == "paper"){outputHuman.innerHTML = '<br>User wybrał: <b>Papier</b>';}
    else if(buttonsName == "stone"){outputHuman.innerHTML = '<br>User wybrał: <b>Kamień</b>';}
    else if(buttonsName == "scissors"){outputHuman.innerHTML = '<br>User wybrał: <b>Nożyce</b>';}
    //co wybrał komputer
    var rand =  Math.floor(Math.random()*3+1);
    if(rand == 1){outputComputer.innerHTML = '<br>Komputer wybrał: <b>Papier</b>'; var randName = "paper";}
    else if(rand == 2){outputComputer.innerHTML = '<br>Komputer wybrał: <b>Kamień</b>'; var randName = "stone";}
    else if(rand == 3){outputComputer.innerHTML = '<br>Komputer wybrał: <b>Nożyce</b>'; var randName = "scissors";}
    //jaki jest wynik 
    if(buttonsName == "paper" && rand == 1){score.innerHTML ='<br>REMIS';
                                          params.round++;
                                         scoreHelp2 = scoreHelp[0] + " : " + scoreHelp[0];         
                                                }
    else if(buttonsName == "stone" && rand == 2){score.innerHTML ='<br>REMIS';
                                          params.round++;
                                          scoreHelp2 = scoreHelp[0] + " : " + scoreHelp[0];         
                                                }
    else if(buttonsName == "scissors" && rand == 3){score.innerHTML ='<br>REMIS';
                                          params.round++;
                                          scoreHelp2 = scoreHelp[0] + " : " + scoreHelp[0];            
                                                 }
    else if(buttonsName == "paper" && rand == 2){score.innerHTML ='<br>WYGRAŁEŚ';
                                         params.playerWin++;
                                         params.round++;  
                                         scoreHelp2 = scoreHelp[1] + " : " + scoreHelp[0];          
                                          result.querySelector('#wins').innerHTML = params.playerWin;}
    else if(buttonsName == "paper" && rand == 3){score.innerHTML = '<br>PRZEGRAŁEŚ';
                                          params.aiWin++;
                                          params.round++;
                                          scoreHelp2 = scoreHelp[0] + " : " + scoreHelp[1];         
                                          result.querySelector('#losses').innerHTML = params.aiWin;}
    else if(buttonsName == "stone" && rand == 1){score.innerHTML = '<br>PRZEGRAŁEŚ';
                                          params.aiWin++;
                                          params.round++;
                                          scoreHelp2 = scoreHelp[0] + " : " + scoreHelp[1];         
                                         result.querySelector('#losses').innerHTML = params.aiWin;}
    else if(buttonsName == "stone" && rand == 3){score.innerHTML = '<br>WYGRAŁEŚ';
                                          params.playerWin++;
                                          params.round++;
                                          scoreHelp2 = scoreHelp[1] + " : "  + scoreHelp[0];         
                                         result.querySelector('#wins').innerHTML = params.playerWin;}
    else if(buttonsName == "scissors" && rand == 1){score.innerHTML = '<br>WYGRAŁEŚ';
                                         params.playerWin++;
                                         params.round++;
                                          scoreHelp2 = scoreHelp[1] + " : " + scoreHelp[0];            
                                         result.querySelector('#wins').innerHTML = params.playerWin;
                                                   }
    else if(buttonsName == "scissors" && rand == 2){score.innerHTML = '<br>PRZEGRAŁEŚ';
                                          params.aiWin++;
                                          params.round++;
                                         scoreHelp2 = scoreHelp[0] + " : " + scoreHelp[1];            
                                         result.querySelector('#losses').innerHTML = params.aiWin;}
 // console.log(params.aiWin);
 // console.log(params.playerWin);

    
  scoreList = "<tr><td>" +  params.round + 
    "</td><td>" + buttonsName + 
    "</td><td>" + randName +
    "</td><td>" + params.playerWin +
    "</td><td>" + params.aiWin + 
    "</td><td>" + scoreHelp2 + "</td></tr>";
  
  scorePrint.push(scoreList);
  

  
  if(maxWin==params.playerWin || maxWin==params.aiWin){
    finishGame()
  }
};

  var scorePrint2 = function(){
    var watchingScores;
    for(var i = 0; i < scorePrint.length; i++){
		  watchingScores += scorePrint[i];
    };
    return "<table><thead><tr><th scope=\"col\">Runda</th><th scope=\"col\">Gracz</th><th scope=\"col\">Komputer</th><th scope=\"col\">Wynik gracza</th><th scope=\"col\">Wynik komputera</th><th scope=\"col\">Wynik tej rundy</th></tr></thead><tbody>"+watchingScores+"</tbody></table>";
    console.log(scorePrint[0]);
  };

function finishGame(){
// console.log(scorePrint);  
scorePrint2();
  console.log(scorePrint2());
  if(params.playerWin>params.aiWin){
    
    gameOver.innerHTML = ' Wygrałeś ze mną :(';
    gameOverContent[0].innerHTML = scorePrint2();
    document.querySelector('#modal-overlay').classList.add('show');
    modalWindows();
  }
  else{
    gameOver.innerHTML = 'Ha! Wiedziałem, że wygram :D';
    gameOverContent[0].innerHTML = scorePrint2();
    document.querySelector('#modal-overlay').classList.add('show');
    
    modalWindows();
  }
}

var modalWindows = (function(){ 
	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
    gameContainer.classList.add("hide");
	};
	var closeButtons = document.querySelectorAll('.modal .close');
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
  }

})(); 

var resetScore = function(){  
  gameOver.innerHTML = '';
  params.playerWin = 0;
  result.querySelector('#wins').innerHTML = params.playerWin;
  params.aiWin = 0;
  params.round = 0;
  result.querySelector('#losses').innerHTML = params.aiWin;
  outputComputer.innerHTML = '';
  outputHuman.innerHTML = '';
  score.innerHTML =''
  }