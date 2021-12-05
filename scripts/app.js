import { hideLoader, showLoader } from "./loader.js";
import { showOnboadingCard, hideOnboardingCard } from "./onboarding.js"
import {formUserInfo} from "./refs.js"
import { storeUserInfo } from "./userinfo.js";

if (localStorage.username && localStorage.college) {
    showLoader();
    console.log("welcome onboard");
} else {
    showLoader();
    setTimeout(() => {
        hideLoader();
        showOnboadingCard();
        formUserInfo.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = formUserInfo.username.value.trim();
            const college = formUserInfo.college.value.trim();
            storeUserInfo(username, college);
            showLoader();
            setTimeout(() => {
                hideOnboardingCard();
            }, 2000);
        });
    }, 3000);
}

