//Нахождение НОД числа по алгоритму Евклида
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  export default gcd;
