import Card from "../Card/Card";

export default function Spotlight({ element }) {
  return (
    <div>
      <div>
        <Card element={element} elementName={"gallery"} />
      </div>
    </div>
  );
}
