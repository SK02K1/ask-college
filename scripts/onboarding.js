import { onboardCard, imgOnboard } from "./refs.js";

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

const hideOnboardingCard = () => {
  gsap.to(onboardCard, 2, {
    opacity: 0,
    y: -100,
    duration: 1,
    display:"none",
    ease: "power3.inOut"
  });
  setTimeout(() => {
    onboardCard.style.display = none;
  },0);
};


export {
  showOnboadingCard,
  hideOnboardingCard
};