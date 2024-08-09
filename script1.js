
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
        <div href="#"><img src="${item.img}" alt="${item.title} image"></div>
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
// pricingContainer //
const pricingContainer = document.querySelector(".Pricing");
const pricingData = [
  {head:"Portrait Photography",price:"$160.00"},
  {head:"Fashion Photography",price:"$300.00"},
  {head:"Sports Photography",price:"$200.00"},
  {head:"Still Life Photography",price:"$120.00"},
  {head:"Wedding Photography",price:"$500.00"},
  {head:"Photojournalism",price:"$200.00"},]
  const pricingCard = (item,i) =>{
        return `
           <div class="flex justify-between text-xl md:text-2xl border-b-2 border-gray-300 border-dashed pb-3">
          <h1>${item.head}</h1>
          <h1 class="text-xl text-blue-600">${item.price}</h1>
        </div>`}
// pricingContainer //
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
        <div class="faqCard border flex flex-col gap-3 px-1 md:px-3 pt-3 ">
      <button class="${i == 0 && "text-blue-600"} duration-500 text-[11px] sm:text-md lg:text-lg hover:text-blue-600 flex justify-between items-center gap-5 lg:gap-0 w-full" onclick="toggleFaq(this)">
        <h1>${i+1}. ${item.title}</h1>
        <i class="fa-solid fa-angle-right icon duration-500 ${i == 0 && "rotate-90"}"></i>
      </button>
      <div class="faqDiv overflow-y-auto  h-0 ${i == 0 && "h-[75px]"}  duration-500 text-[11px] md:text-md lg:text-lg" id="nav">
        ${item.desc}
      </div>
    </div>`}
    const toggleFaq = (e) => {
     e.classList.toggle("text-blue-600")
     e.children[1].classList.toggle("rotate-90")
     e.nextElementSibling.classList.toggle("h-[75px]")
    }
// Faqs//
// Testimonials 
const testimonals = [
  {
name:"Saadain Shaikh",
work:"Developer",
desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consequuntur. Alias quasi enim placeat natus! Dolores debitis architecto similique consequatur.",
img:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
},
  {
name:"Babar Shaikh",
work:"Engineer",
desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consequuntur. Alias quasi enim placeat natus! Dolores debitis architecto similique consequatur.",
img:"https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
},
  {
name:"Alina Shaikh",
work:"Developer",
desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, consequuntur. Alias quasi enim placeat natus! Dolores debitis architecto similique consequatur.",
img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
},]

const testimonalsContainer = document.querySelector(".slider");
const testimonalSlideCard = (item) => {
  return `  
    <div class="slide w-full h-full flex justify-center items-center shrink-0 ">
        <div class="slider-card w-full md:w-[70%] flex justify-center items-center flex-col gap-3 md:gap-5 px-5 text-center text-white">
          <div class="w-20 h-20 object-cover rounded-full overflow-hidden">
            <img src="${item.img}" alt="">
        </div>
        <div>
          <h1 class="text-2xl">${item.name}</h1>
          <h1 class="text-xl">${item.work}</h1>
        </div>
        <div class="icon text-yellow-300">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p>${item.desc}</p>
      </div>
    </div> `}
const buletsContainer = document.querySelector(".bulets");
const buletCard = (_,i) =>{
  return `<button class="w-4  h-4 rounded-full bg-white/50" onclick="activeSlide(${i})"></div>`}
  const activeSlide = (idx) => {
    testimonalsContainer.classList.add(`-translate-x-[${idx}00%]`)
    console.log(testimonalsContainer);}
    // Testimonials 

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
    renderData(btns, btnContainer, btn);
    renderData(PortfolioCards, PortfolioContainer, portfolioCard);
    renderData(pricingData, pricingContainer, pricingCard);
    renderData(faqsData,faqsContainer,faqCard);
    renderData(testimonals, testimonalsContainer, testimonalSlideCard);
    renderData(testimonals, buletsContainer, buletCard);
    renderData(ContactCards, ContactContainar, ContactCard);
    renderData(footerIcons, footerContainer, icon);
    filterImages("All");
// FUNCATION CALL //
