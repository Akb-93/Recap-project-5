import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavouriteButton/FavouriteButton";

export default function DetailPage({ element, onToggleFavorite}) {
  const router = useRouter();
  return (
    <div>
      <div>
        <div>
          <Image
            width={element.dimensions.width}
            height={element.dimensions.height}
            alt="image of a beautiful artwork"
            src={element.imageSource}
            />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h2>{element.name}</h2>
          <p>{`Artist: ${element.artist}`}</p>
          <p>{`Year: ${element.year}`}</p>
          <p>{`Genre: ${element.genre}`}</p>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/favourite");
              }}>
              Back
            </button>
            <FavoriteButton element={element} onToggleFavorite={onToggleFavorite} />
           
          </div>
        </div>
      </div>
    </div>
  );
}
