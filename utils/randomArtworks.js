export const getRandomArtwork = (artworks) => {
  if (!artworks || artworks.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * artworks.length);
  return artworks[randomIndex];
};