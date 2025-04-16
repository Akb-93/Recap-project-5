import Image from "next/image";
import Link from "next/link";

export default function Card({ element, elementName }) {
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
        <p>
          {element.artist}
        </p>
      </a>
    </Link>
  );
}
