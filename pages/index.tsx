import * as React from "react";

import { Box, Container, Flex, Heading, Link, Text, Image } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import metaConfig from "../config/meta";

const HomePage: NextPage = (props) => {
  return (
    <>
      <NextSeo title="Apsyadira" />
      <Container maxW="4xl" p={[4, 8]} alignItems="center" h="auto">
        <Flex
          alignItems={["flex-start", "flex-start", "center"]}
          w="full"
          justifyContent="space-between"
          experimental_spaceX={3}
          h="full"
          pt={16}
          flexDir={["column", "column", "row"]}
        >
          <Box order={{ base: 2, md: 2 }} mt={{ base: 8, md: 0 }}>
            <Heading size="3xl" mb={4}>
              Apsyadira.
            </Heading>
            <Text>Fullstack Engineer at Jubelio</Text>
            <Text color="whiteAlpha.700" maxW="lg" mt={5}>
              Software Engineer, helping people to learn about web development, severless, and React/Next.js and making
              an impact on the world, bits by bytes.
            </Text>

            <Box h={8} />

            <Text pb={8}>
              Reach me via email at{" "}
              <Link href={`mailto:${metaConfig?.mailto as string}`} variant="link">
                {metaConfig?.mailto}
              </Link>
              , or Twitter at{" "}
              <Link href={`https://twitter.com/${metaConfig?.twitterAccount as string}`} isExternal variant="link">
                {metaConfig?.twitterAccount}
              </Link>
              .
            </Text>
          </Box>
          <NextLink href="about" passHref>
            <Box
              order={{ base: 1, md: 2 }}
              _hover={{ bgColor: "whiteAlpha.50" }}
              as="a"
              overflow="hidden"
              rounded="full"
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
                alt="Profile"
                w={{ base: "90px", md: "250px" }}
              />
            </Box>
          </NextLink>
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
