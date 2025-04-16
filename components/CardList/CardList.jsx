import Card from "../Card/Card";

export default function CardList({ elements = [], elementName }) {
  return (
    <div>
      <div>
        {elements.map((element) => {
          return (
            <Card
              key={element.slug}
              element={element}
              elementName={elementName}
            />
          );
        })}
      </div>
    </div>
  );
}
