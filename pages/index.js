import React from 'react';
import Spotlight from './Spotlight';
import { getRandomArtwork } from '../utils/randomArtworks';

const API_URL = "https://example-apis.vercel.app/api/art";

export async function getServerSideProps() {
  try {
    const response = await fetch(API_URL);
    console.log("API Response Status:", response.status); // Debugging-Log
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const artworks = await response.json();
    console.log("API Response Data:", artworks); // Debugging-Log
    const validArtworks = artworks.filter(artwork => artwork && artwork.slug && artwork.imageSource && artwork.name && artwork.artist);
    const spotlightArtwork = getRandomArtwork(validArtworks);
    console.log("Spotlight Artwork:", spotlightArtwork); // Debugging-Log
    return {
      props: {
        spotlightArtwork,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        spotlightArtwork: null,
      },
    };
  }
}

export default function HomePage({ spotlightArtwork }) {
  console.log("spotlightArtwork prop:", spotlightArtwork); // Debugging-Log
  if (!spotlightArtwork) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Spotlight artwork={spotlightArtwork} />
    </div>
  );
}