import { mainWrapper } from "./refs.js";
import { queriesContainer } from "./refs.js";


const showQuery = ({username, college, query, created_at}, id) => {
 queriesContainer.innerHTML += `
 <div class="query-card" data-id="${id}">
    <div class="user-info">
      <small class="highlight">${username}</small>
      <small>
        <span class="highlight">college: </span>${college}
      </small>
    </div>
    <div class="query">${query}</div>
    <small>
    ${dateFns.distanceInWordsToNow(new Date(created_at.toDate()), { addSuffix: true })}
    </small>
  </div>
 `;
};


const getQueries = () => {
  db.collection("queries").orderBy("created_at").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if(change.type === "added"){
        showQuery(change.doc.data(), change.doc.id);
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

export {showMainContent};