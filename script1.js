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

// FILTER Btn //
const btnContainer = document.querySelector(".gallery-control");
const btns = ["All", "App", "Product", "Branding", "Books"];
const btn = (item) => {
  return `<button class="hover:text-blue-700 transition duration-600 ${item == "All" && "text-blue-500"}" id="${item}">${item}</button>`;};

btnContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    for (let btn of btnContainer.children) {
      btn.classList.remove("text-blue-500");}
    e.target.classList.add("text-blue-500");
    filterImages("");
    setTimeout(() => filterImages(e.target.id), 100);}});

const filterImages = (cat) => {
  for (let pCard of PortfolioContainer.children) {
    pCard.classList[cat == pCard.id || cat == "All" ? "add" : "remove"]("active-image");}};
const openLightBox = (e) => {console.log(e);};
// FILTER Btn //

// Portfolio CARDS //
let PortfolioContainer = document.querySelector(".portrait-card");
const projects = [
  {
    cat: "App",
    data: [
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/app-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/app-2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/app-3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },],},
  {
    cat: "Product",
    data: [
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/product-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/product-2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/product-3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },],},
  {
    cat: "Branding",
    data: [
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/branding-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/branding-2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/branding-3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },],},
  {
    cat: "Books",
    data: [
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/books-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/books-2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },
      {
        img: "https://bootstrapmade.com/demo/templates/DevFolio/assets/img/portfolio/books-3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur!",
      },],},];

const PortfolioCards = projects.flatMap((project) =>
  project.data.map((item, idx) => ({
    ...item,
    title: `${project.cat} ${idx + 1}`,
    index: idx,
})));
const portfolioCard = (item) => {
  const cardCat = item.title.split(" ")[0];
  return `
      <div class="shadow-lg shadow-gray-300/100 portfolioCard" id="${cardCat}">
        <a href="#"><img src="${item.img}" alt="${item.title} image"></a>
        <div class="absolute bg-white bg-opacity-80 px-5 py-2 flex justify-between items-center ch bottom-0 left-3 right-3 transition-all duration-300 opacity-0">
          <div>
            <h4 class="font-semibold text-xl">${item.title}</h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
          <div class="icon flex gap-4">
            <button onclick="toggleLightBox('${cardCat}', ${item.index})"><i class="fa-solid fa-magnifying-glass-plus text-2xl"></i></button>
            <a href="#"><i class="fa-solid fa-share text-2xl"></i></a>
          </div>
        </div>
      </div>`;};

// Portfolio CARDS //

// lightBox //

let findSelectedObj;
let imgIndex = null;
let lightBox = document.querySelector(".lightBox");
const img = lightBox.querySelector("img");

const toggleLightBox = (cat, idx) => {
  if (cat && idx) {
    imgIndex = idx;
    findSelectedObj = projects.find((project) => project.cat == cat);
    img.src = findSelectedObj.data[imgIndex].img;
    handleSliderBtns(idx);
  } else {
    imgIndex = null;
  }
  document.body.classList.toggle("overflow-hidden");
  lightBox.querySelector(".imgBox").classList.toggle("active");
  lightBox.classList.toggle("active");
};

let [btn1, btn2] = document.querySelectorAll(".lightbox-btn");
const prevSlide = () => {
  imgIndex--;
  handleSliderBtns(imgIndex);
  img.src = findSelectedObj.data[imgIndex].img;
};

const nextSlide = () => {
  imgIndex++;
  handleSliderBtns(imgIndex);
  img.src = findSelectedObj.data[imgIndex].img;
};

const handleSliderBtns = (index) => {
  btn1.classList[index == 0 ? "add" : "remove"]("hidden");
  btn2.classList[index == findSelectedObj.data.length - 1 ? "add" : "remove"]("hidden");};

window.addEventListener("keyup", (e) => {
  if (imgIndex != null) {
    if (e.key == "ArrowLeft" && imgIndex > 0) {
      prevSlide();
    } else if (e.key == "ArrowRight" && imgIndex < findSelectedObj.data.length - 1) {nextSlide();}}});

// lightBox //

const pricingContainer = document.querySelector(".Pricing");
const pricingData = [
  {head:"Portrait Photography",price:"$160.00"},
  {head:"Fashion Photography",price:"$300.00"},
  {head:"Sports Photography",price:"$200.00"},
  {head:"Still Life Photography",price:"$120.00"},
  {head:"Wedding Photography",price:"$500.00"},
  {head:"Photojournalism",price:"$200.00"},
]
  const pricingCard = (item,i) =>{
        return `
           <div class="flex justify-between text-xl md:text-2xl border-b-2 border-gray-300 border-dashed pb-3">
          <h1>${item.head}</h1>
          <h1 class="text-xl text-blue-600">${item.price}</h1>
        </div>`}
// Faqs //
  const faqsContainer = document.querySelector(".faqs");
  const faqsData = [
    {
      title:"Non consectetur a erat nam at lectus urna duis?",
      desc:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectu.",
    },
    {
      title:"Non consectetur a erat nam at lectus urna duis?",
      desc:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
    },
    {
      title:"Non consectetur a erat nam at lectus urna duis?",
      desc:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
    },
    {
      title:"Non consectetur a erat nam at lectus urna duis?",
      desc:"Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
    },
  ]
    const faqCard = (item,i) =>{
        return `
        <div class="faqCard border flex flex-col gap-3 px-5 pt-3 ">
      <button class="${i == 0 && "text-blue-600"} duration-500 text-lg hover:text-blue-600 flex justify-between items-center gap-5 lg:gap-0 w-full" onclick="toggleFaq(this)">
        <h1>${i+1}. ${item.title}</h1>
        <i class="fa-solid fa-angle-right icon duration-500 ${i == 0 && "rotate-90"}"></i>
      </button>
      <div class="faqDiv overflow-y-auto  h-0 ${i == 0 && "h-[70px]"}  duration-500 " id="nav">
        ${item.desc}
      </div>
    </div>
        `
    }
    const toggleFaq = (e) => {
     e.classList.toggle("text-blue-600")
     e.children[1].classList.toggle("rotate-90")
     e.nextElementSibling.classList.toggle("h-[70px]")
    }
// Faqs//

// FOOTER ICON //
const footerContainer = document.querySelector(".footer-icons");
const footerIcons = [
  {
    path: "",
    icon: "fa-x-twitter",
  },
  {
    path: "https://www.facebook.com/saadainhussainarif.shaikh",
    icon: "fa-facebook",
  },
  {
    path: "https://www.instagram.com/",
    icon: "fa-instagram",
  },
  {
    path: "",
    icon: "fa-twitter",
  },
];
const icon = (item) => {
  return `<a href="${item.path}" class="border px-2 py-1 rounded-full text-xl  hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300"><i class="fa-brands ${item.icon}"></i></a>`;};
// FOOTER ICON //

    // FUNCATION CALL //
    renderData(cardData, servicesContainer, servicesCard);
    renderData(btns, btnContainer, btn);
    renderData(PortfolioCards, PortfolioContainer, portfolioCard);
    renderData(pricingData, pricingContainer, pricingCard);
    renderData(faqsData,faqsContainer,faqCard);
    renderData(footerIcons, footerContainer, icon);
    filterImages("All");
// FUNCATION CALL //
