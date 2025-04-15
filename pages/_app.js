import GlobalStyle from "../styles"; // Adjust path if needed

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}