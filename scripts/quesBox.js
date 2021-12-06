import { formAskQues } from "./refs.js";
import { hideLoader, showLoader } from "./loader.js";

const showQuesBox = () => {
    formAskQues.parentElement.classList.remove("hide");
};

const hideQuesBox = () => {
    formAskQues.parentElement.classList.add("hide");
};

const addQuery = async (username, college, query) => {

    const newQuery = {
        username,
        college,
        query,
        created_at: firebase.firestore.Timestamp.fromDate(new Date())
    };

    const response = await db.collection("queries").add(newQuery);
    return response;
};

const submitQues = (e) => {
    e.preventDefault();
    const query = formAskQues.query.value.trim();
    showLoader();
    setTimeout(() => {
        hideQuesBox();
        e.target.reset();
        setTimeout(() => {
            addQuery(localStorage.username, localStorage.college, query)
            .then(() => console.log("new query added"))
            .catch((error) => console.log(error))
            hideLoader();
        }, 800);
    }, 1000);
};

export {showQuesBox, hideQuesBox, submitQues};