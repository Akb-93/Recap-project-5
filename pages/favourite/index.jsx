
import CardList from "@/components/CardList/CardList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Favourite() { 
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, [router.asPath]);

  return (
    <div>
      <h1>Your Favorite Art Pieces</h1>
      {favorites.length > 0 ? (
        <CardList
          elements={favorites}
          elementName="favorites"
        />
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}