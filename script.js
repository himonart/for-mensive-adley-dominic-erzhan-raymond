const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const letter = document.getElementById("love-letter");

const letterText = `As we celebrate our first mensiversarry, I find myself reflecting on the incredible journey we've shared. From our very first date to the countless moments of laughter and joy, every experience has woven a beautiful tapestry of memories that I will cherish forever.

This past month has been a whirlwind of love and growth. We’ve faced challenges, but each one has only strengthened our bond. Your unwavering support and love have been my anchor, guiding me through every storm. I am endlessly grateful for your patience and understanding, especially during the tough times.

I cherish the little things—the way your smile lights up a room, the sound of your laughter, and the warmth of your embrace. Each day with you has been a new adventure, and I can't wait to see where our journey takes us next. Together, we've created a life filled with love, trust, and joy.

Thank you for being my love, my confidant, and my greatest supporter. I am excited for all the memories yet to come, for the dreams we will chase together, and for the love that will only grow deeper with each passing month.

Here's to us, to the laughter we’ve shared, the challenges we've overcome, and the love that continues to bloom. Happy Mensiversarry, my love! I look forward to many more months and more years of happiness by your side.

With all my love.`;

let words = letterText.split(" ");
let index = 0;

function nextSlide() {
  slide1.classList.remove("active");
  slide2.classList.add("active");
  typeLetter();
}

function typeLetter() {
  if (index < words.length) {
    letter.innerHTML += words[index] + " ";
    index++;
    setTimeout(typeLetter, 120);
  }
}

function spawnEmoticon() {
  const emoji = document.createElement("div");
  emoji.className = "flying";
  emoji.innerText = "❤️‍🔥";
  emoji.style.left = Math.random() * 90 + "vw";
  emoji.style.top = "80vh";
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 2000);
}

window.onload = () => {
  document.getElementById("backsound").play();
};