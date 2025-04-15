import React from 'react';
import styled from 'styled-components';

const API_URL = "https://example-apis.vercel.app/api/art"; // Replace with your actual API endpoint!
const fetcher = (...args) => fetch(...args).then(res => res.json());

export async function getStaticPaths() {
  try {
    const response = await fetch(API_URL);
    const artworks = await response.json();

    const paths = artworks.map((artwork) => ({
      params: { id: artwork.id.toString() }, 
    }));

    return {
      paths,
      fallback: false, 
    };
  } catch (error) {
    console.error("Error fetching artworks for getStaticPaths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const { id } = params; 
    const response = await fetch(`${API_URL}/${id}`); 
    const artwork = await response.json();

    return {
      props: {
        artwork,
      },
    };
  } catch (error) {
    console.error(`Error fetching artwork ${params.id}:`, error);
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
      <h1>{artwork.title}</h1>
      <p>Artist: {artwork.artist}</p>
      <img src={artwork.image_url} alt={artwork.title} />
      <p>{artwork.description}</p>
    </div>
  );
};

export default ArtworkDetails;