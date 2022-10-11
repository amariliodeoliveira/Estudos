// *********************** //
// School Grade Calculator //
// *********************** //
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

// ********************** //
// Family Spending System //
// ********************** //
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

// ********************* //
// Temperature Converter //
// ********************* //
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error(
      'Whoops, something got wrong! Only digit the temperature number plus "C" for (Celsius) or "F" for (Fahrenheit).'
    );
  }

  // Fahrenheit to Celsius
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "°C";

  // Celsius to Fahrenheit
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "°F";
  }

  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree("10C"));
  console.log(transformDegree("50F"));
  transformDegree("50Z");
} catch (error) {
  console.log(error.message);
}

// ********************** //
// Fetching Data in Array //
// ********************** //
const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os Segredos da Mente Milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O Homem Mais Rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai Rico, Pai Pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como Enfrentar o Mal do Século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 Hábitos das Pessoas Altamente Eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;
