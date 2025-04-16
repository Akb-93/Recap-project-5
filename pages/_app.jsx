import Navbar from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";


export default function App({ Component, pageProps }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      
      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <Navbar />
      </footer>
    </div>
  );
}
