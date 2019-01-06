export const getRecentsLocal = () => {
  let recents = JSON.parse(window.localStorage.getItem('recents'));
  if (recents === null || recents.length < 1) {
    recents = [];
    window.localStorage.setItem('recents', JSON.stringify(recents));
  }
  return recents;
};

export const addRecentLocal = recent => {
  let recents = JSON.parse(window.localStorage.getItem('recents'));
  if (recents === null) {
    recents = [];
  }
  const recentExist = recents.findIndex(r => r.id === recent.id);
  if (recentExist !== -1) {
    recents.splice(recentExist, 1);
  }
  if (recents.length === 10) {
    recents.pop();
  }
  recents.unshift(recent);
  window.localStorage.setItem('recents', JSON.stringify(recents));
};