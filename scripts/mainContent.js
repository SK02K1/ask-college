import { mainWrapper } from "./refs.js";

const showMainContent = () => {
    mainWrapper.style.display = "block";
    gsap.from(mainWrapper, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.inOut"
    });
};

export {showMainContent};