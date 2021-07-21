import "../styles/globals.css";
import Layout from "../components/layout";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
