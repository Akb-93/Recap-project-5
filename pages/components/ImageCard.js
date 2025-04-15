import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Card = styled.div`

  border: 1px solid #ccc;
  
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  

  
`;

const ImageCard = ({artwork }) => {
    console.warn("ImageCard received undefined artwork!");
  return (
    <Card>
      <Link href={`/artworks/${artwork.slug}`}>
        
          <Image
            src={artwork.imageSource}
            alt={artwork.name}
            width={500}
            height={300}
            
          />
        
      </Link>
      <div> 
        <h3>{artwork.name}</h3> 
        <p>Artist: {artwork.artist}</p> 
      </div>
    </Card>
  );
};

export default ImageCard;