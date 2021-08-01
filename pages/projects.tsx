import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import * as React from "react";
import cms from "../lib/cms";
import { ProjectFragment } from "../lib/graphql";
import { NextPage } from "../shared/lib/next";
import { Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ShowcaseItem from "../components/showcase-item";

interface ProjectsPageProps {
  data: ProjectFragment;
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
  const data = await cms.getProjectStaticProps();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

const ProjectsPage: NextPage<ProjectsPageProps> = (props) => {
  const { data } = props;

  const pageMeta = {
    title: `Creations and projects`,
    description: `Here are some of my past works from personal projects and open source ones.`,
  };

  return (
    <>
      <NextSeo {...pageMeta} />

      <Container maxW="4xl" p={[4, 8]}>
        <Stack align="center" spacing={4} textAlign="center">
          <Heading>{pageMeta.title}</Heading>
          <Text pb={8}>{pageMeta.description}</Text>

          <SimpleGrid columns={[1, 1, 2]} gap={4}>
            {data.allProjects1s.map((s) => (
              <ShowcaseItem key={s.id as string} data={s} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
};

export default ProjectsPage;
