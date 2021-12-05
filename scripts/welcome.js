import { body } from "./refs.js";

const showWelcomeMsg = (name) => {
    const h2 = document.createElement("h2");
    h2.textContent = `Welcome ${name}`;
    h2.classList.add("header-secondary");
    body.append(h2);
};

export { showWelcomeMsg };