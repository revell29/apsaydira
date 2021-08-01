import * as React from "react";

import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import Image from "next/image";
import metaConfig from "../config/meta";

const HomePage: NextPage = (props) => {
  return (
    <>
      <NextSeo title="Apsyadira" />
      <Container maxW="4xl" p={[4, 8]}>
        <Stack align="center" spacing={4} textAlign="center">
          <NextLink href="about" passHref>
            <Box
              _hover={{ bgColor: "whiteAlpha.50" }}
              as="a"
              borderRadius="full"
              maxW="xs"
              overflow="hidden"
              sx={{
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                MozBackfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                MozTransform: "translate3d(0, 0, 0)",
                WebkitTransform: "translate3d(0, 0, 0)",
              }}
              transform="auto-gpu"
              transitionDuration="normal"
              transitionProperty="common"
              transitionTimingFunction="ease-out"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/19900349?v=4"
                height="400"
                width="400"
                alt="Profile"
              />
            </Box>
          </NextLink>

          <Heading size="3xl">Hi! I&apos;m Apsyadira.</Heading>

          <Text color="whiteAlpha.700" fontSize={["lg", "xl"]} maxW="1xl">
            {metaConfig?.description}
          </Text>

          <Box h={8} />

          <Text pb={8}>
            Reach me via email at{" "}
            <Link
              href={`mailto:${metaConfig?.mailto as string}`}
              variant="link"
            >
              {metaConfig?.mailto}
            </Link>
            , or Twitter at{" "}
            <Link
              href={`https://twitter.com/${
                metaConfig?.twitterAccount as string
              }`}
              isExternal
              variant="link"
            >
              {metaConfig?.twitterAccount}
            </Link>
            .
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
