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

// CONTACT //
let ContactContainar = document.querySelector(".contact-us");
let ContactCards = [
  {
    i: "fa-location-dot",
    h1: "Address",
    p: "Railway Traffic Colony House No#227-B Naya Pull Hyderabad",
  },
  { i: "fa-phone", h1: "Call Us", p: "03493225710" },
  { i: "fa-envelope", h1: "Email Us", p: "hussainsaadain@gmail.com" },
];
const ContactCard = (item) => {
  return `  <div class="flex items-center gap-3 same group ">
  <a href="">
    <i class="fa-solid ${item.i} w-[56px] h-[56px] text-[20px] border flex items-center justify-center rounded-full text-blue-600 border-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"></i>
  </a>
  <div>
    <h1 class="text-xl font-semibold">${item.h1}</h1>
    <p>${item.p}</p>
  </div>
</div>`;
};
// CONTACT //



// MAIN FUNCATION //
const renderData = (data, container, fun) => {
  container.innerHTML = `${data.map(fun).join("")}`;
};
// MAIN FUNCATION //

// FUNCATION CALL //
renderData(barData, progressbarContainer, progressRow);
renderData(progressCards, progressContainer, progressCard);
renderData(ContactCards, ContactContainar, ContactCard);
// FUNCATION CALL //

