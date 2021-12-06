import {hideLoader,showLoader} from "./loader.js";
import {formAddComment} from "./refs.js";


const showCommentBox = () => {
    formAddComment.parentElement.classList.remove("hide");
};

const hideCommentBox = () => {
    formAddComment.parentElement.classList.add("hide");
};

const addComment = (e, id) => {
    e.preventDefault();
    const comment = formAddComment.comment.value.trim();
    showLoader();
    db.collection("queries").doc(id).update({
        comments: firebase.firestore.FieldValue.arrayUnion({
            username: localStorage.username,
            college: localStorage.college,
            comment,
            commented_at: firebase.firestore.Timestamp.fromDate(new Date())
        })
    }).then(() => {
        e.target.reset();
        hideLoader();
        hideCommentBox();
    }).catch((error) => {
        console.log(error);
    });
};

export {
    showCommentBox,
    hideCommentBox,
    addComment
};