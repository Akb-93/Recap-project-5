// import CardList from "@/components/CardList/CardList";
// import fetchArtPieces from "../../scripts/APIClient";

// export default function Favourite() {
//   const { data, error, isLoading } = fetchArtPieces();

//   if (error) return <div>Failed to load art pieces.</div>;
//   if (isLoading || !data.length) return <div>Loading...</div>;

//   return <CardList elements={data} elementName={"favorites"} />;
// }


// 

import CardList from "@/components/CardList/CardList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Favourite() { // Achte auf den korrekten Komponentennamen (mit großem Anfangsbuchstaben)
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