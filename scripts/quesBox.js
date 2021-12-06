import { formAskQues } from "./refs.js";

const showQuesBox = () => {
    formAskQues.parentElement.classList.remove("hide");
};

const hideQuesBox = () => {
    formAskQues.parentElement.classList.add("hide");
};

export {showQuesBox, hideQuesBox};