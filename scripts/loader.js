const mainLoader = document.querySelector(".main-loader");

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