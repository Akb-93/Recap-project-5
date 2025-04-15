
export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function getRandomArtwork(artworks) {
  if (!artworks || artworks.length === 0) {
    return null;
  }
  const randomIndex = getRandomInt(0, artworks.length);
  console.log("Random Index:", randomIndex); 
  console.log("Selected Artwork:", artworks[randomIndex]);
  return artworks[randomIndex];
}