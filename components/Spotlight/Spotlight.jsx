import Card from "../Card/Card";
import FavoriteButton from "../FavouriteButton/FavouriteButton";

export default function Spotlight({ element, onToggleFavorite }) {
  return (
    <div>
      <div>
        <Card element={element} elementName={"gallery"} onToggleFavorite={onToggleFavorite} />
      </div>
    </div>
  );
}
