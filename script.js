const parties = [
  { name: "Bij1", points: 0 },
  { name: "Pvv", points: 0 },
  { name: "fvd", points: 0 },
  { name: "vvd", points: 0 },
];

const questions = [
  { q: "woke en lhbt-propaganda tegengaan", a: [-1, 0, 1, 2] },
  { q: "economie & ondernemingen", a: [-1, 0, 1, 2] },
  { q: "anti-racisme en dekolonisatie", a: [-1, 0, 1, 2] },
  { q: "financiën omlaag voor burgers", a: [-1, 0, 1, 2] },
];

let currentQuestionIndex = 0;

function displayQuestion() {
  const { q, a } = questions[currentQuestionIndex];
  document.getElementById("ques").textContent = q;
  document.getElementById("opt").innerHTML = a.map((option, index) => `<input type="radio" name="options" value="${index + 1}" id="option${index + 1}"><label for="option${index + 1}">${option}</label><br>`).join('');
}

function checkAns() {
  const selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedOption) {
    const points = parseInt(selectedOption.value) - 1;
    parties.forEach((party, index) => (party.points += points * questions[currentQuestionIndex].a[index]));
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  } else {
    alert("Geef een optie voordat je door kan ");
  }
}

function showResult() {
  const winningParty = parties.reduce((max, party) => (party.points > max.points ? party : max), parties[0]);
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("score").textContent = `Your recommended party is: ${winningParty.name}`;
}

displayQuestion();