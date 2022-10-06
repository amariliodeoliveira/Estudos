// Calculadora
// de Notas
// Escolares
function getScore(score) {
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score < 90 && score >= 80;
  let scoreC = score < 80 && score >= 70;
  let scoreD = score < 70 && score >= 60;
  let scoreE = score < 60 && score >= 50;
  let scoreF = score < 50 && score >= 0;

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreE) {
    scoreFinal = "E";
  } else if (scoreF) {
    scoreFinal = "F";
  } else {
    scoreFinal = "Invalid score! Must be between 0 and 100.";
  }

  return scoreFinal;
}

console.log(getScore(101));
console.log(getScore(90));
console.log(getScore(45));
console.log(getScore(61));
console.log(getScore(50));
console.log(getScore(39));
console.log(getScore(-002));

// Sistema de
// Gastos
// Familiares
let family = {
  incomes: [2500, 1850, 235.9, 37.52],
  expenses: [92.52, 100, 87.9, 5000],
};

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;

  const itsOk = total >= 0;

  let balanceText = "negativo";

  if (itsOk) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo de R$ ${total.toFixed(2)} é ${balanceText}.`);
}

calculateBalance();

// Conversor
// de Celcius
// para Fahrenheit
