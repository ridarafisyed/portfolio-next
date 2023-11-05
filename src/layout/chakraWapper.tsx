"use client";

import React from "react";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
// import theme from "./theme";

type Props = {
  children: React.ReactNode;
};

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