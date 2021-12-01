const transpose = function(matrix) {
    //Empty array to hold the new transposed matrix
    let array = [];
    //For loops to iterate through the matrix
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        //if condition to ensure that array[j] = []; does not iterate more than once
        if (i === 0) {
          array[j] = [];
        }
        //Switches the value of the row and column
        array[j][i] = matrix[i][j];
      }
    }
    return array;
  };


  const wordSearch = (letters, word) => {
    const transposedLetters = transpose(letters);
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
      else for (l of verticalJoin) {
        if (l.includes(word)) return true;
      }
    }
    
    return false;
  };

module.exports = wordSearch