import "../styles/globals.css";
import Layout from "../components/layout";
import { ThemeProvider } from "next-themes";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
