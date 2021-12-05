import {hideLoader, showLoader} from "./loader.js";
import {showOnboadingCard} from "./onboarding.js"

showLoader();
setTimeout(() => {

    hideLoader();
    showOnboadingCard();

}, 3000);