import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h3`
  margin-bottom: 0.25rem;
  font-size: 1.2rem;
`;

const Artist = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const ImageCard = ({ artwork }) => {
  if (!artwork) {
    console.warn("ImageCard received undefined artwork!");
    return null; 
  }

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
        <Title>{artwork.name}</Title>
        <Artist>Artist: {artwork.artist}</Artist>
      </div>
    </Card>
  );
};

export default ImageCard;