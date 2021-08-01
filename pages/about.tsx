/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";

import { baseComponents } from "../components/markdown";
import cms from "../lib/cms";
import { AboutPagePropsQuery } from "../lib/graphql";
import metaConfig from "../config/meta";
import { Box, Container, Heading, Link, List, ListItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import trimHttps from "../shared/utils/trim-https";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Image, ResponsiveImageType } from "react-datocms";
import ReactMarkdown from "react-markdown";
import { NextPage } from "next";

interface AboutPageProps {
  data: AboutPagePropsQuery;
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const data = await cms.aboutStaticProps();
  return {
    props: {
      data,
    },
  };
};

const AboutPage: NextPage<AboutPageProps> = (props) => {
  const { data } = props;

  const pageMeta = {
    title: `About me`,
    description: `Get to know more about myself`,
  };

  const socials = [
    {
      name: "Github",
      href: "https://github.com/revell29",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/apsyadiraa",
    },
    {
      name: "Instagram",
      href: "https://instagram/apsyadiraa",
    },
  ];

  return (
    <>
      <NextSeo {...pageMeta} />

      <Container maxW="4xl" p={[4, 8]}>
        <Box pb={8}>
          <Image data={data.about?.cover?.responsiveImage as ResponsiveImageType} />
        </Box>

        <Stack lineHeight="tall" pb={8} spacing={4}>
          <ReactMarkdown children={data.about?.preface as string} components={baseComponents} />
        </Stack>

        {/* <SimpleGrid columns={[2, 3, 4]} gap={4}>
          {data.about?.knowledgeBases?.map(
            (kb) =>
              kb && (
                <Box key={kb.title}>
                  <Heading pb={4} size="md">
                    {kb.title}
                  </Heading>
                  <List fontSize="sm" spacing={1}>
                    {kb.entries?.split(", ").map((e, i) => (
                      <ListItem key={i}>{e.trim()}</ListItem>
                    ))}
                  </List>
                </Box>
              )
          )}
        </SimpleGrid> */}

        <Box h={8} />

        <Text pb={2}>
          You can reach out via email at{" "}
          <Link href={`mailto:${metaConfig?.mailto as string}`} variant="link">
            {metaConfig?.mailto}
          </Link>
          , or via socials below:
        </Text>
        <List spacing={1}>
          {socials.map(({ name, href }) => (
            <ListItem key={name}>
              {name} -{" "}
              <Link href={`${href}`} isExternal variant="link">
                {trimHttps(`${href}`)}
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default AboutPage;
