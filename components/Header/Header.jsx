import { useRouter } from "next/router";

const TITLE_MAP = {
  "/": "Spotlight",
  "/gallery": "Gallery",
  "/favorites": "Favorites",
};

export default function Header() {
  const router = useRouter();
  const title = TITLE_MAP[router.pathname] || "Art Gallery";

  return (
    <header>
      <div>
        <h1 >{title}</h1>
      </div>
    </header>
  );
}
