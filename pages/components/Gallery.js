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
  return (
    <GalleryContainer>
      {artworks && artworks.map((artwork) => (
        <ImageCard key={artwork.id} artwork={artwork} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;