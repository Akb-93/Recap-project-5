import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href="/">Spotlight</Link>
      <Link href="/artworks">Gallery</Link>
    </nav>
  );
}

export default Navigation;