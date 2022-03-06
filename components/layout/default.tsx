import React from "react";
import { EASINGS, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";
import siteConfig from "../../config/site";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import { AnimatePresence } from "framer-motion";
import MotionBox from "../motion/box";
import Navbar from "../navbar";
import Footer from "../footer";

const PAGE_TRANSITION_VARIANTS = {
  initial: { opacity: 0, x: 0, y: -8 },
  enter: { duration: 0.2, ease: EASINGS.easeOut, opacity: 1, x: 0, y: 0 },
  exit: { duration: 0.1, ease: EASINGS.easeIn, opacity: 0, x: 0, y: 8 },
};

const DefaultLayout: React.FC = (props) => {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <DefaultSeo
        canonical={siteConfig.siteUrl + (router.asPath || "")}
        defaultTitle="Apsyadira"
        description="Software Engineer, Tech enthusiast, and happy to help people learn programing."
        openGraph={{
          type: "website",
          site_name: "apsyadira",
        }}
      />

      <SocialProfileJsonLd
        name="apsyadira"
        sameAs={[
          "https://www.facebook.com/muhamad.dira.1",
          "http://instagram.com/apsyadiraa",
          "https://www.linkedin.com/in/apsya-dira-8b498a179/",
        ]}
        type="person"
        url={siteConfig.siteUrl}
      />

      <Flex flexDir="column" minH="100vh">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <MotionBox
            key={router.route}
            animate="enter"
            exit="exit"
            flexGrow={1}
            initial="initial"
            variants={PAGE_TRANSITION_VARIANTS}
          >
            {children}
          </MotionBox>
        </AnimatePresence>
        <Footer />
      </Flex>
    </>
  );
};

export default DefaultLayout;
