// components/Spotlight.js
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link'; // Importiere Link

const Card = styled.div`
  border: none; // Entferne den Rahmen
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: default; // Entferne den Cursor

  &:hover {
    opacity: 1; // Entferne den Hover-Effekt
  }
`;

const Title = styled.h3`
  margin-bottom: 0.25rem;
  font-size: 1.5rem; // Größere Schriftgröße
  text-align: center; // Zentriere den Titel
`;

const Artist = styled.p`
  font-size: 1.1rem; // Größere Schriftgröße
  color: #666;
  text-align: center; // Zentriere den Künstlernamen
`;

function Spotlight({ artwork }) {
  if (!artwork) {
    return <p>Loading spotlight artwork...</p>;
  }

  return (
    <Card>
      
        <Image
          src={artwork.imageSource}
          alt={artwork.name}
          width={800} // Größeres Bild
          height={500} // Größeres Bild
          style={{ objectFit: 'cover' }}
          priority // Assuming this is the LCP image
        />
     
      <div>
        <Title>{artwork.name}</Title>
        <Artist>Artist: {artwork.artist}</Artist>
      </div>
    </Card>
  );
}

export default Spotlight;