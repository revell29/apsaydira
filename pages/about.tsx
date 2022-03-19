/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";

import { baseComponents } from "../components/markdown";
import cms from "../lib/cms";
import { AboutPagePropsQuery } from "../lib/graphql";
import metaConfig from "../config/meta";
import { Box, Container, Link, List, ListItem, Stack, Text, Heading } from "@chakra-ui/react";
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
      name: "Twitter",
      href: "https://twitter.com/apsyadiraa",
    },
    {
      name: "Instagram",
      href: "https://instagram/apsyadiraa",
    },
  ];

  const experience = [
    {
      title: "Squad Lead at Jubelio (March 2022 - present)",
    },
    {
      title: "Fullstack Engineer at Jubelio (November 2020 - March 2022)",
    },
    {
      title: "Software Engineer at Veritlogic (April 2018 - November 2020)",
    },
    {
      title: "Web Developer at PT Koloni Timur (February 2017 - January 2018)",
    },
  ];

  return (
    <>
      <NextSeo {...pageMeta} />

      <Container maxW="4xl" p={[4, 8]}>
        <Box pb={8}>
          <Image data={data.about?.cover?.responsiveImage as ResponsiveImageType} />
        </Box>

        <Stack lineHeight="tall" pb={5} spacing={4}>
          <ReactMarkdown children={data.about?.preface as string} components={baseComponents} />
        </Stack>

        <Box h={8} />

        <Text pb={2}>
          You can reach out via email at ✉️ &nbsp;
          <Link href={`mailto:${metaConfig?.mailto as string}`} variant="link">
            {metaConfig?.mailto}
          </Link>
          , or via socials below:
        </Text>
        <List spacing={3} pb={8}>
          {socials.map(({ name, href }) => (
            <ListItem key={name}>
              {name} -{" "}
              <Link href={`${href}`} isExternal variant="link">
                {trimHttps(`${href}`)}
              </Link>
            </ListItem>
          ))}
        </List>

        <Heading mt={8} fontSize="2xl">
          Work Experience
        </Heading>
        <List spacing={3} py={4}>
          {experience.map(({ title }) => (
            <ListItem key={title}>{title}</ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default AboutPage;
