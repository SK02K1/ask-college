import {mainLoader} from  "./refs.js"

const hideLoader = () => {
    mainLoader.style.display = "none";
};

const showLoader = () => {
    mainLoader.style.display = "block";
};

export {
    hideLoader,
    showLoader
};