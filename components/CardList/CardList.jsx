// // components/CardList/CardList.jsx
// import Card from "../Card/Card";

// export default function CardList({ elements = [], elementName, onToggleFavorite, favorites }) {
//   return (
//     <div>
//       <div>
//         {elements.map((element) => (
//           <Card
//             key={element.slug}
//             element={element}
//             elementName={elementName}
//             onToggleFavorite={onToggleFavorite} // <----- HIER WIRD SIE WEITERGEREICHT
//             isFavorite={favorites && favorites.some(fav => fav.slug === element.slug)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

import Card from "../Card/Card";

export default function CardList({ elements = [], elementName }) {
  return (
    <div>
      <div>
        {elements.map((element) => (
          <Card
            key={element.slug}
            element={element}
            elementName={elementName}
          />
        ))}
      </div>
    </div>
  );
};