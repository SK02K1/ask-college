import { hideLoader, showLoader } from "./loader.js";
import { showOnboadingCard, hideOnboardingCard } from "./onboarding.js"
import {formUserInfo, btnAsk, btnClose, formAskQues} from "./refs.js"
import { storeUserInfo } from "./userinfo.js";
import { showMainContent } from "./mainContent.js";
import { showQuesBox, hideQuesBox, submitQues } from "./quesBox.js";



if (localStorage.username && localStorage.college) {
    showLoader();
    setTimeout(() => {
        hideLoader();
        setTimeout(() => {
            showMainContent();
        }, 0);
    },1200);
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
                setTimeout(() => {
                    hideLoader();
                    setTimeout(() => {
                        showMainContent();
                    }, 2200);
                }, 0)
            }, 1200);
        });
    }, 3000);
}


btnAsk.addEventListener("click", () => {
    showQuesBox()
});

btnClose.addEventListener("click", () => {
    hideQuesBox();
});

formAskQues.addEventListener("submit", submitQues);



