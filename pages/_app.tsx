import { AnimatePresence } from "framer-motion";
import Chakra from "../components/Chakra/chakra";
import "../styles/global.css";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} key={router.route} />
    </Chakra>
  );
}

export default MyApp;
