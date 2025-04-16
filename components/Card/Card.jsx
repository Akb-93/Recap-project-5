import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavouriteButton/FavouriteButton";

export default function Card({ element, elementName, onToggleFavorite }) {
  return (
    <Link href={`/${elementName}/${element.slug}`} passHref legacyBehavior>
      <a>
        <div>
          <Image
            width={element.dimensions.width}
            height={element.dimensions.height}
            alt="Artwork image"
            src={element.imageSource}
          />
        </div>
        <h3>{element.name}</h3>
        <p>{element.artist}</p>
        <FavoriteButton element={element} onToggleFavorite={onToggleFavorite} />
      </a>
    </Link>
  );
}