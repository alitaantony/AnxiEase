let isBreathing = false;
let timer = 30;
let interval;
let badgeEarned = false;
let earnedBadges = JSON.parse(localStorage.getItem('earnedBadges')) || [];
let questions = [
  "What are 3 things you can see around you right now?",
  "Name 5 things you're grateful for today.",
  "What is something you’ve done recently that you’re proud of?",
  "Can you think of a happy memory from childhood?",
  "What are 4 things that make you feel calm?",
  "What’s one thing you can do to take care of yourself today?",
  "Describe 3 things in your environment that make you feel safe.",
  "What are 2 things that make you laugh?",
  "What is a place where you feel completely at peace?",
  "Name 3 things that remind you of a moment of joy.",
  "What’s one thing you can do right now to improve your mood?",
  "Think of 5 things you love about your surroundings.",
  "What’s a positive affirmation you can repeat to yourself?",
  "List 3 things you’ve achieved recently that made you feel proud.",
  "What are 4 things you can smell right now?",
  "Name 2 people who make you feel supported and cared for.",
  "What is a simple activity that helps you feel relaxed?",
  "Think of 5 things that make you feel safe and comforted.",
  "What is something you’ve done today that you’re grateful for?",
  "Describe 3 things that help you feel grounded."
];
let currentQuestionIndex = 0;

document.getElementById('toggleButton').addEventListener('click', toggleMode);
document.getElementById('submitBtn').addEventListener('click', submitResponse);

loadEarnedBadges();

function toggleMode() {
  isBreathing = !isBreathing;
  if (isBreathing) {
    document.getElementById('toggleButton').innerText = "Switch to Questions";
    startBreathingTimer();
  } else {
    document.getElementById('toggleButton').innerText = "Switch to Breathing";
    stopBreathingTimer();
    document.getElementById('timerArea').style.display = "none";
    document.getElementById('questionArea').style.display = "block";
    document.getElementById('submitBtn').style.display = "block";
  }
}

function startBreathingTimer() {
  document.getElementById('timerArea').style.display = "block";
  document.getElementById('questionArea').style.display = "none";
  document.getElementById('submitBtn').style.display = "none";
  interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById('timeLeft').innerText = timer;
    } else {
      clearInterval(interval);
      if (!badgeEarned) {
        showBadge('tranquil.png');
      }
    }
  }, 1000);
}

function stopBreathingTimer() {
  clearInterval(interval);
  timer = 30;
  document.getElementById('timeLeft').innerText = timer;
}

function submitResponse() {
  if (!isBreathing) {
    let response = document.getElementById('responseField').value;
    if (response.trim() !== "") {
      showBadge('tranquil.png');
      currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
      document.getElementById('question').innerText = questions[currentQuestionIndex];
      document.getElementById('responseField').value = '';
    } else {
      alert("Please type a response.");
    }
  }
}

function showBadge(badgeImage) {
  const badgeToShow = 'tranquil.png';
  document.getElementById('badgeImage').src = `icons/${badgeToShow}`;
  document.getElementById('badgeArea').style.display = "block";
  earnedBadges.push(badgeToShow);
  localStorage.setItem('earnedBadges', JSON.stringify(earnedBadges));
  loadEarnedBadges();
  setTimeout(() => {
    document.getElementById('badgeArea').style.display = "none";
  }, 3000);
}

function loadEarnedBadges() {
  const badgeDisplay = document.getElementById('badgeDisplay');
  badgeDisplay.innerHTML = '';
  earnedBadges.forEach(badge => {
    const badgeElement = document.createElement('img');
    badgeElement.src = `icons/${badge}`;
    badgeElement.alt = "Earned Badge";
    badgeElement.width = 50;
    badgeElement.height = 50;
    badgeDisplay.appendChild(badgeElement);
  });
}
