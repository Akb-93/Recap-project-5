
import { useState, useEffect } from "react";

export default function FavoriteButton({ element }) {
  const [isLocallyFavorited, setIsLocallyFavorited] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsLocallyFavorited(savedFavorites.some(fav => fav.slug === element.slug));
  }, [element.slug]);

  const handleToggleFavorite = () => {
    setIsLocallyFavorited((prev) => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      let updatedFavorites;

      if (prev) {
        updatedFavorites = savedFavorites.filter(fav => fav.slug !== element.slug);
      } else {
        updatedFavorites = [...savedFavorites, element];
      }

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return !prev;
    });
  };

  return (
    <button onClick={handleToggleFavorite}>
      {isLocallyFavorited ? '★ Favorite' : '☆ Add to Favorites'}
    </button>
  );
}
