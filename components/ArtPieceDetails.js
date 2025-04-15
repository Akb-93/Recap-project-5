import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailImage = styled(Image)`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const DetailInfo = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const BackButton = styled(Link)`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;

function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <DetailContainer>
      <DetailImage src={image} alt={title} width={800} height={500} style={{ objectFit: 'cover' }} />
      <DetailInfo>
        <h2>{title}</h2>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </DetailInfo>
      <BackButton href="/artworks">Back to Gallery</BackButton>
    </DetailContainer>
  );
}

export default ArtPieceDetails;