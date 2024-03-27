import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import "react-horizontal-scrolling-menu/dist/styles.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout key={router.asPath}>
      <Component {...pageProps} />
    </Layout>
  );
}
