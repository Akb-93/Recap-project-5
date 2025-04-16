import { useState } from "react";

export default function FavoriteButton({ element, onToggleFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(element);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        color: isFavorite ? 'red' : 'gray',
      }}
    >
      {isFavorite ? '★ Favorite' : '☆ Add to Favorites'}
    </button>
  );
}