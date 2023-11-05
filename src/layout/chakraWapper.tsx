"use client";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
// import theme from "./theme";

type Props = {
  children: React.ReactNode;
};

const theme = extendTheme({
  styles: {
    global: (props:any) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0d1117' : 'white', // Define background colors
      },
    }),
  },
});

const chakraWrapper = ({ children }: Props) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider resetCSS={true} theme={theme}>
        {children}
      </ChakraProvider>
    </>
  );
};

export default chakraWrapper;