(function(){
  var Presentation = function(){

    $(document).on('click', '#board .space', function (e) {
      var spaceNum = $(e.currentTarget).index();
      console.log('You clicked on space #' + spaceNum);

      // Marks the space with the current player's name
      // TODO: Don't mark it unless the space is blank
      if(bl.gameOver){
        alert('The game is over! Refresh the page to play again.');
      }else{
        if(bl.spaces[spaceNum]){
          alert('That space is already taken!');
        }else{
          bl.spaces[spaceNum] = bl.currentPlayer;
          // Adds a class to elem so css can take care of the visuals
          $('#board .space:eq(' + spaceNum + ')').addClass(bl.currentPlayer);
          var result = bl.checkForWinner();
          if (result) {
            console.log('somebody won');
            $(document).trigger('game-win', bl.currentPlayer);
          }
          bl.setNextTurn();
        }
      }
    });

    $(document).on('game-win', function (e, winner) {
      // TODO: Alert who won the game
      alert('The winner is ' + winner + '!');
      bl.gameOver = true;
    });

    this.init = function() {
      var currentplayer = bl.setNextTurn();
      // console.log('what is current player', currentplayer);
      $('#turn-label').text(currentplayer);
    };

  };
  window.presentation = new Presentation();
  presentation.init();
})();
