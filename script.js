// NAV //
document.getElementById("nav-btn").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.classList.toggle("h-[260px]");
});
// NAV //
// HEADER //
let text = document.querySelector(".text");
let words = ["Web Developer", "Responsive Expert"];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    text.textContent += words[wordIndex].charAt(charIndex++);
    setTimeout(type, 300);
  } else {
    setTimeout(eraze, 200);
  }
}
function eraze() {
  if (charIndex > 0) {
    text.textContent = words[wordIndex].substring(0, --charIndex);
    setTimeout(eraze, 100);
  } else {
    wordIndex++;
    setTimeout(type, 500);
    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}
type();
// HEADER //

// PROGRESS-BAR //
let progressbarContainer = document.querySelector(".bar");
let barData = [
  { h1: "Html/Css", h2: "100%" ,bg:"#fd1d1d"},
  { h1: "BootStrap", h2: "80%" ,bg:"#6b03b1"},
  { h1: "Tailwind", h2: "70%" ,bg:"#15b8d6"},
  { h1: "JavaScript", h2: "40%" ,bg:"#ded509"},
];
const progressRow = (item) => {
  return `
  <div class="flex justify-between">
    <p class="text-sm font-semibold">${item.h1}</p>
    <p>${item.h2}</p>
  </div>
  <div class="h-[10px] bg-gray-300 rounded-lg">
    <div class="h-full rounded-lg" style="width: ${item.h2};background-color:${item.bg};"></div>
  </div>
`;
};
// PROGRESS-BAR //
// SERVICES CARDS //
let servicesContainer = document.querySelector(".Services-cards");
let cardData = [
  {
    icon: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    head: "Html",
    p: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    head: "Css",
    p: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
    head: "BootStrap",
    p: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    head: "Tailwind",
    p: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    head: "JavaScript",
    p: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
  },
  {
    icon: "",
    head: "Dolori Architecto",
    p: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
  },
];
const servicesCard = (item) => {
  return `
    <div class=" shadow-lg shadow-gray-300/100 rounded-2xl flex flex-col gap-4 px-8 py-16 cursor-pointer">  
    <img src="${item.icon}" class="w-16 h-16" alt="">
    </span>
      <h2 class="text-2xl font-semibold mb-2">${item.head}</h2>
      <p class="text-gray-700">${item.p}</p>
  </div>`;
};
// SERVICES CARDS //
////////////////
let progressContainer = document.querySelector(".progress-sec");
let progressCards = [
  { num0: "232", num1: "Client" },
  { num0: "521", num1: "Project" },
  { num0: "1453", num1: "Hours Of Support" },
  { num0: "32", num1: "Awards" },
];
const progressCard = (item) => {
  return `
   <div>
      <h1 class="text-[48px]">${item.num0}</h1>
      <h1>${item.num1}</h1>
    </div>`;
};
////////////////
// MAIN FUNCATION //
const renderData = (data, container, fun) => {
  container.innerHTML = `${data.map(fun).join("")}`;};
// MAIN FUNCATION //
// FUNCATION CALL //
renderData(barData, progressbarContainer, progressRow);
renderData(cardData, servicesContainer, servicesCard);
renderData(progressCards, progressContainer, progressCard);
// FUNCATION CALL //

