import React from 'react';
import useSWR from 'swr';
import Gallery from '../pages/components/Gallery'; 
import styled from 'styled-components';

const API_URL = "https://example-apis.vercel.app/api/art"; 
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Header = styled.h1`
  text-align: center;
  padding: 1rem 0;
  background-color: #f0f0f0;
  margin-bottom: 1rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #888;
`;

const ErrorContainer = styled(LoadingContainer)`
  color: red;
`;

export default function HomePage() {
  const { data: artworks, error, isLoading } = useSWR(API_URL, fetcher);

  if (isLoading) return <LoadingContainer>Loading...</LoadingContainer>;
  if (error) return <ErrorContainer>Error: {error.message}</ErrorContainer>;
  if (!artworks) return <LoadingContainer>No artworks found</LoadingContainer>;

  return (
    <div>
      <Header>ART GALLERY</Header>
      <Gallery artworks={artworks} />
    </div>
  );
}