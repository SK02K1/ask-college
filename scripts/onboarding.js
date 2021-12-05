const onboardCard = document.querySelector(".onboard-container");
const mainLoader = document.querySelector(".main-loader");


const showOnboadingCard = () => {
  onboardCard.style.display = "flex";
  gsap.from(onboardCard, {
    opacity: 0, 
    y: 100, 
    duration: 1,
    ease: "power3.inOut"
  });   
};

const toggleLoadingState = () => {
  mainLoader.classList.toggle("hide");
};



toggleLoadingState();
setTimeout(() => {
toggleLoadingState();
showOnboadingCard();
}, 2000 );