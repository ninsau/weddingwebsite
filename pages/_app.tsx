import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import FooterComponent from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

export default MyApp;
