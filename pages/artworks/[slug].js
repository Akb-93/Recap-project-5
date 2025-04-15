import React from 'react';
import styled from 'styled-components';

const API_URL = "https://example-apis.vercel.app/api/art"; // Ersetze dies mit deiner API-URL!

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

    console.log("getStaticPaths - generated paths:", paths);

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

const ArtworkDetails = ({ artwork }) => {
  if (!artwork) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{artwork.name}</h1>
      <p>Artist: {artwork.artist}</p>
      <img src={artwork.imageSource} alt={artwork.name} />
      <p>{artwork.description}</p>
      
    </div>
  );
};

export default ArtworkDetails;