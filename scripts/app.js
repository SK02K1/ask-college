import { hideLoader, showLoader } from "./loader.js";
import { showOnboadingCard, hideOnboardingCard } from "./onboarding.js"
import {formUserInfo, btnAsk, btnCloseAsk, formAskQues, btnYourQueries, btnHelpOtherFolks, queriesContainer, btnCloseComment, formAddComment} from "./refs.js"
import { storeUserInfo } from "./userinfo.js";
import { getQueries, showMainContent, unsub, clearQueries} from "./mainContent.js";
import { showQuesBox, hideQuesBox, submitQues } from "./quesBox.js";
import { showCommentBox, hideCommentBox, addComment } from "./comments.js";

let id;

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

btnCloseAsk.addEventListener("click", () => {
    hideQuesBox();
});

formAskQues.addEventListener("submit", submitQues);


btnHelpOtherFolks.addEventListener("click", (e) => {
    unsub();
    clearQueries();
    getQueries("Help other folks", "!=")
});

btnYourQueries.addEventListener("click", (e) => {
    unsub();
    clearQueries();
    getQueries("Your queries", "==")
});

queriesContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-add-comment")){
         id = e.target.parentElement.parentElement.getAttribute("data-id");
        showCommentBox();
    }
});

btnCloseComment.addEventListener("click", () => {
    hideCommentBox();
});

formAddComment.addEventListener("submit", (e) => addComment(e, id));


