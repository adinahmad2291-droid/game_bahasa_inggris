async function generateQuestions() {

  const theme = document.getElementById('theme').value;
  const amount = parseInt(document.getElementById('amount').value);
  const difficulty = document.getElementById('difficulty').value;

  const response = await fetch('questions.json');
  const database = await response.json();

  let questions = database[theme] || [];

  questions = questions.sort(() => Math.random() - 0.5);

  let result = questions.slice(0, amount);

  result.forEach(item => {
    item.options.sort(() => Math.random() - 0.5);
  });

  document.getElementById('result').value = JSON.stringify(result, null, 2);
}
