const onboardCard = document.querySelector(".onboard-container");
const imgOnboard = document.querySelector("#img-onboard");

const showOnboadingCard = () => {
  onboardCard.style.display = "flex";
  gsap.from(onboardCard, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power3.inOut"
  });

  gsap.fromTo(imgOnboard, {
    y: -30, ease: "power4.out"
  }, {
    y: 20,
    duration: 2,
    yoyo: true,
    repeat: -1
  });

};


export {
  showOnboadingCard
};