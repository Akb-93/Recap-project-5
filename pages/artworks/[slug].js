// pages/artworks/[slug].js
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

const ArtPieceDetails = ({ image, title, artist, year, genre }) => {
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
};

const API_URL = "https://example-apis.vercel.app/api/art";

export async function getStaticPaths() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const artworks = await response.json();

    if (!Array.isArray(artworks)) {
      console.error("API response is not an array:", artworks);
      return {
        paths: [],
        fallback: false,
      };
    }

    const validArtworks = artworks.filter(artwork => {
      if (!artwork || typeof artwork !== 'object') {
        console.warn("Invalid artwork (null/undefined/not an object):", artwork);
        return false;
      }
      if (typeof artwork.slug !== 'string' || !artwork.slug) {
        console.warn("Artwork missing or invalid slug:", artwork);
        return false;
      }
      return true;
    });

    const paths = validArtworks.map(artwork => ({
      params: { slug: artwork.slug.toString() },
    }));

    console.log("getStaticPaths - generated paths:", paths); // Debugging

    return {
      paths,
      fallback: false,
    };

  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const response = await fetch(`${API_URL}/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const artwork = await response.json();

    return {
      props: {
        artwork,
      },
    };
  } catch (error) {
    console.error(`Error fetching artwork ${params.slug}:`, error);
    return {
      notFound: true,
    };
  }
}

const ArtworkDetailPage = ({ artwork }) => {
  if (!artwork) {
    return <div>Loading...</div>;
  }

  return (
    <ArtPieceDetails
      image={artwork.imageSource}
      title={artwork.name}
      artist={artwork.artist}
      year={artwork.year}
      genre={artwork.genre}
    />
  );
};

export default ArtworkDetailPage;