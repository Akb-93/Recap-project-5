

import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavouriteButton/FavouriteButton";

export default function Card({ element, elementName }) {


  return (
    <div>
    <Link href={`/${elementName}/${element.slug}`}>
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
      
    </Link>
   <FavoriteButton element={element} /> {/* onToggleFavorite und isFavorite entfernt */}
    </div>
  );
}