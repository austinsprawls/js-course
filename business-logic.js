(function(){

  var BusinessLogic = function(){

    this.spaces = [
      NaN, NaN, NaN,
      NaN, NaN, NaN,
      NaN, NaN, NaN
    ];

    this.player1 = 'veggies';
    this.player2 = 'junkfood';
    this.currentPlayer = null;
    this.gameOver = false;

    this.setNextTurn = function () {
      if (this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2;
      }
      else {
        this.currentPlayer = this.player1;
      }
      // $('#turn-label').text(this.currentPlayer);
      return this.currentPlayer;
    };

    this.checkForWinner = function () {
      // Because (NaN === NaN) is always false, we can safely assume
      // that if three spaces in a row are the same, all three spaces are
      // marked by a player, and not all empty.

      if ( this.spaces[0] === this.spaces[1] && this.spaces[1] === this.spaces[2]
        || this.spaces[3] === this.spaces[4] && this.spaces[4] === this.spaces[5]
        || this.spaces[6] === this.spaces[7] && this.spaces[7] === this.spaces[8]
        || this.spaces[0] === this.spaces[3] && this.spaces[3] === this.spaces[6]
        || this.spaces[1] === this.spaces[4] && this.spaces[4] === this.spaces[7]
        || this.spaces[2] === this.spaces[5] && this.spaces[5] === this.spaces[8]
        || this.spaces[0] === this.spaces[4] && this.spaces[4] === this.spaces[8]
        || this.spaces[6] === this.spaces[4] && this.spaces[4] === this.spaces[2]
        // TODO: Check for rest of game winning cases
      )
      {
        // TODO: Trigger 'game-win' event with the winning player as the event data
        // $(document).trigger('game-win', currentPlayer);
        return true;
      } else {
        return false;
      }
    };
  }

  window.bl = new BusinessLogic();
  

})();
