export const getPendingsLocal = () => {
  let pendings = JSON.parse(window.localStorage.getItem('pendings'));
  if (pendings === null || pendings.length < 1) {
    pendings = [];
    window.localStorage.setItem('pendings', JSON.stringify(pendings));
  }
  return pendings;
};

export const addPendingLocal = pending => {
  let pendings = JSON.parse(window.localStorage.getItem('pendings'));
  if (pendings === null) {
    pendings = [];
  }
  pendings.push(pending);
  window.localStorage.setItem('pendings', JSON.stringify(pendings));
};

export const deletePendingLocal = id => {
  const pendings = JSON.parse(window.localStorage.getItem('pendings'));
  const newPendings = pendings.filter(pending => pending.id !== id);
  window.localStorage.setItem('pendings', JSON.stringify(newPendings));
};