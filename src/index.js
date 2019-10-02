module.exports = function zeros(expression) {
   expression = expression.split("*");
   let fives = 0;
   let twos = 0;
   for (let i = 0; i < expression.length; i++) {
     if (expression[i][expression[i].length - 1] == "!" &&
      expression[i][expression[i].length - 2] == "!") {
        let number = +expression[i].substring(0, expression[i].length - 2);
        for (let j = number; j > 0; j -= 2) {
          let k = j;
          while (k % 5 == 0) {
            k /= 5;
            fives++;
          }
          while (k % 2 == 0) {
            k /= 2;
            twos++;
          }
        }
      } else {
        let number = +expression[i].substring(0, expression[i].length - 1);
        for (let j = number; j > 0; j--) {
          let k = j;
          while (k % 5 == 0) {
            k /= 5;
            fives++;
          }
          while (k % 2 == 0) {
            k /= 2;
            twos++;
          }
        }
      }
   }
   if (twos > fives) {
     return fives;
   } else return twos;
}
