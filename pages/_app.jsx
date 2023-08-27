import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout key={router.asPath}>
      <Component {...pageProps} />
    </Layout>
  );
}
