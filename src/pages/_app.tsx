import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#0a0657",
    200: '#ececec',
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
