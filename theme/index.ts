import { extendTheme, theme as defaultTheme, ThemeOverride } from "@chakra-ui/react";

export default extendTheme(<ThemeOverride>{
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 800,
        letterSpacing: "tighter",
      },
    },
    Link: {
      variants: {
        link: {
          color: "purple.500",
          textDecorationLine: "underline",
          textUnderlineOffset: "4px",
        },
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bgColor: "gray.900",
        },
        overlay: {
          "@supports (backdrop-filter: blur(4px))": {
            backdropFilter: "blur(4px)",
          },
          "@supports (-webkit-backdrop-filter: blur(4px))": {
            WebkitBackdropFilter: "blur(4px)",
          },
        },
      },
    },
  },

  config: {
    initialColorMode: "dark",
  },

  fonts: {
    body: `'Lexend',${defaultTheme.fonts.body}`,
    heading: `'Lexend',${defaultTheme.fonts.heading}`,
  },

  styles: {
    global: {
      ":root": {
        colorScheme: "dark",
      },
      "::selection, ::-moz-selection": {
        bgColor: "whiteAlpha.400",
      },

      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "#111111",
        color: "whiteAlpha.900",
        cursor: "default",
        fontFamily: "body",
        lineHeight: "base",
        minH: "100vh",

        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      },
      "*::placeholder": {
        color: "whiteAlpha.400",
      },
      "*, *::before, &::after": {
        borderColor: "whiteAlpha.300",
        wordWrap: "break-word",
      },

      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        bgGradient: "linear(to-r, whiteAlpha.400, yellow.200)",
        h: "2px",
        left: 0,
        pos: "fixed",
        top: 0,
        w: "full",
        zIndex: 2000,
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "absolute",
      },
    },
  },
});
