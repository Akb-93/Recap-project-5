

import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavouriteButton/FavouriteButton";

export default function Card({ element, elementName }) {

  //style
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '1rem',
    width: '300px', // Beispielbreite
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block', // Verhindert zusätzlichen Platz unter dem Bild
  };

  const textContainerStyle = {
    padding: '1rem',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#333',
  };

  const artistStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '0.75rem',
  };

  const buttonContainerStyle = {
    padding: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
  };

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