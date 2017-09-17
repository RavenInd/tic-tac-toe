class TicTacToe {
    constructor() {
      this.field = [[null,null,null], [null,null,null], [null,null,null]];
      this.turn = 1;
    }

    getCurrentPlayerSymbol() {
      if (this.turn%2==0)
      {
        return "o"
      }
        else
      {
        return "x"
      }
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] == null)
      {
        if (this.turn%2==0)
        {
          this.field[rowIndex][columnIndex] = "o";
        }
          else
        {
          this.field[rowIndex][columnIndex] = "x";
        }
       ++this.turn;
      }

    }

    isFinished() {
      if(this.getWinner() || this.isDraw())
      {
        return true;
      }
      return false;
    }

    getWinner() {
      for (var i=0; i<3; i++)
      {
        if (this.field[i][0]==this.field[i][1]&&this.field[i][1]==this.field[i][2])
        {
          return this.field[i][0];
        }
        if (this.field[0][i]==this.field[1][i]&&this.field[1][i]==this.field[2][i])
        {
          return this.field[0][i];
        }
      }
        if (this.field[0][0]==this.field[1][1]&&this.field[1][1]==this.field[2][2])
        {
          return this.field[0][0];
        }
        if (this.field[2][0]==this.field[1][1]&&this.field[1][1]==this.field[0][2])
        {
          return this.field[2][0];
        }
        return null;
    }

    noMoreTurns()
    {
      if (this.turn>9)
      {
        return true;
      }
      return false;
    }

    isDraw() {
      if(this.noMoreTurns() && !this.getWinner())
      {
        return true;
      }
      else {
        return false;
      }

    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
