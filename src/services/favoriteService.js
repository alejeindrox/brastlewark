export const getFavoritesLocal = () => {
  let favorites = JSON.parse(window.localStorage.getItem('favorites'));
  if (favorites === null || favorites.length < 1) {
    favorites = [];
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  return favorites;
};

export const addFavoriteLocal = favorite => {
  let favorites = JSON.parse(window.localStorage.getItem('favorites'));
  if (favorites === null) {
    favorites = [];
  }
  favorites.push(favorite);
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const deleteFavoriteLocal = id => {
  const favorites = JSON.parse(window.localStorage.getItem('favorites'));
  const newFavorites = favorites.filter(favorite => favorite.id !== id);
  window.localStorage.setItem('favorites', JSON.stringify(newFavorites));
};