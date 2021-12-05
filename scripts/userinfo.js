const storeUserInfo = (username, college) => {
    localStorage.username = username;
    localStorage.college = college;
};

export {storeUserInfo};