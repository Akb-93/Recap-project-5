import Link from "next/link";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  { name: "Spotlight", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Favourite", href: "/favourite" },
];

export default function Footer() {
  const router = useRouter();

  return (
    <nav >
      <div>
        <div>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                ${
                  router.pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
