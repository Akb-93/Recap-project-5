import React from 'react';
import ImageCard from './ImageCard';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const Gallery = ({ artworks }) => {
  // Filtere ungültige Artworks heraus
  const validArtworks = artworks ? artworks.filter(artwork => artwork && artwork.slug && artwork.imageSource && artwork.name && artwork.artist) : [];

  return (
    <GalleryContainer>
      {validArtworks.map((artwork) => (
        <ImageCard key={artwork.slug} artwork={artwork} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;