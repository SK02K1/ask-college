import { hideLoader } from "./loader.js";
import { mainWrapper, queriesContainer, mainHeader } from "./refs.js";

let unsub;

const showQuery = ({username, college, query, created_at, comments}, id) => {
 queriesContainer.innerHTML += `
 <div class="query-card" data-id="${id}">
    <div class="user-info">
      <small class="highlight">${username}</small>
      <small>
        <span class="highlight">college: </span>${college}
      </small>
    </div>
    <div class="query text-primary">${query}</div>
    <div class="query-details">
    <small>
    ${dateFns.distanceInWordsToNow(new Date(created_at.toDate()), { addSuffix: true })}
    </small>
    <span class="btn-add-comment">💬</span>
    </div>
    <div class="comments-container">
    <small class="highlight">${ (comments !== undefined && comments.length > 0 ) ? "comments 👇" : ""}</small >
      ${(comments !== undefined && comments.length > 0) ? comments.map(({username, college, comment, commented_at}) => {
        return `
        <div class="comment-card">
          <div class="user-info">
            <small class="highlight">${username}</small>
            <small><span class="highlight">college: </span>${college}</small>
          </div>
          <div class="comment text-primary">${comment}</div>
            <small>${dateFns.distanceInWordsToNow(new Date(commented_at.toDate()), { addSuffix: true })}</small>
          </div>
        `;
      }).join("") : ""}
    </div>
  </div>
 `;
};

const updateComments = (data, id) => {
  const {username, college, comment, commented_at} = data.comments[data.comments.length - 1];
  const queries = document.querySelectorAll(".query-card");
  queries.forEach((queryCard) => {
    const dataID = queryCard.getAttribute("data-id");
    if(dataID === id){
      const comments = queryCard.children[3];
      comments.innerHTML += `
      <div class="comment-card">
        <div class="user-info">
          <small class="highlight">${username}</small>
          <small><span class="highlight">college: </span>${college}</small>
        </div>
        <div class="comment text-primary">${comment}</div>
        <small>${dateFns.distanceInWordsToNow(new Date(commented_at.toDate()), { addSuffix: true })}</small>
      </div>
      `;
    }
  });
};

const clearQueries = () => {
  queriesContainer.innerHTML = "";
}

const getQueries = (heading="Your queries", check="==") => {
  mainHeader.textContent = heading;
  unsub = db.collection("queries").where("username", check, localStorage.username).onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if(change.type === "added"){
        showQuery(change.doc.data(), change.doc.id);
      }else if(change.type === "modified"){
        setTimeout(() => {
          hideLoader();
          updateComments(change.doc.data(), change.doc.id);
        }, 1200);
      }
    });
  });
};

const showMainContent = () => {
  mainWrapper.style.display = "block";
  gsap.from(mainWrapper, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.inOut"
  });
  setTimeout(() => {
    getQueries();
  }, 0);
};

export {showMainContent, getQueries, unsub, clearQueries};