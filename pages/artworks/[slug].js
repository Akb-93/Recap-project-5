import React from 'react';
import styled from 'styled-components';

const API_URL = "https://example-apis.vercel.app/api/art"; // Replace with your actual API endpoint!
const fetcher = (...args) => fetch(...args).then(res => res.json());

// getStaticPaths: Pre-renders specific pages based on data.
export async function getStaticPaths() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);  // Bessere Fehlerbehandlung
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
      params: { slug: artwork.slug.toString() },  // Sicherer Check ist eigentlich überflüssig, aber zur Sicherheit
    }));

    console.log("getStaticPaths - generated paths:", paths); // Debugging!

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
  // To-Do: Add error handling for API failures.
}

// getStaticProps: Fetches data for a specific page.
export async function getStaticProps({ params }) {
  try {
    const { slug } = params; // Get the 'slug' from the URL
    const response = await fetch(`${API_URL}/${slug}`); // Fetch specific artwork
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
      notFound: true, // Return notFound: true to show a 404 page
    };
  }
  // To-Do: Add more robust error handling.
}

const ArtworkDetails = ({ artwork }) => {
  // To-Do: Add a better loading state (e.g., a skeleton loader).
  if (!artwork) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{artwork.name}</h1>
      <p>Artist: {artwork.artist}</p>
      <img src={artwork.imageSource} alt={artwork.name} />
      <p>{artwork.description}</p>
      {/* To-Do: Display other artwork details (year, genre, colors). */}
      {/* To-Do: Add "Back to Gallery" button/link. */}
    </div>
  );
};

export default ArtworkDetails;