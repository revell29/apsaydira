import { GraphQLClient } from "graphql-request";
import { Scalars, projectStaticProps, aboutStatiscQuery } from "./graphql";

export function request(query: Scalars["String"], variable?: Scalars["JsonField"], preview?: Scalars["Boolean"]) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variable);
}

const cms = {
  getProjectStaticProps: () => {
    return request(projectStaticProps, { limit: 10 });
  },

  aboutStaticProps: () => {
    return request(aboutStatiscQuery);
  },
};

export default cms;
