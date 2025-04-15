
import React from 'react';
import Gallery from '../components/Gallery';
import useSWR from 'swr';

const API_URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then(res => res.json());

function ArtworksPage() {
  const { data: artworks, error } = useSWR(API_URL, fetcher);

  if (error) return <div>Failed to load artworks.</div>;
  if (!artworks) return <div>Loading...</div>;

  return (
    <div>
      <h1>Gallery</h1>
      <Gallery artworks={artworks} />
    </div>
  );
}

export default ArtworksPage;