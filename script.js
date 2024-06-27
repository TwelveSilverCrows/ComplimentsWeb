const compliments = [
  "Your smile is contagious!",
  "You have a fantastic sense of humor.",
  "You're incredibly creative.",
  "I admire your work ethic.",
  "You're a great listener.",
  "You're always so helpful.",
  "You have a bright future ahead of you.",
  "Your positivity is inspiring.",
  "You're a great problem-solver.",
  "You have a wonderful way with words.",
];
function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}
function choosing() {
  return compliments[(Math.floor(random(1, 11))) - 1]
}
function onButtonClick() {
  alert(choosing());
}
const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);
