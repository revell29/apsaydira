import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import { ResponsiveImageType } from "react-datocms";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents `true` or `false` values. */
  BooleanType: any;
  CustomData: any;
  /** A ISO 8601 compliant date value */
  Date: any;
  /** A ISO 8601 compliant datetime value */
  DateTime: any;
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: any;
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
};

export type ProjectFragment = {
  allProjects1s: Array<ShowCaseFragment>;
};

export type ResponsiveImage = {
  alt: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["FloatType"];
  base64: Maybe<Scalars["String"]>;
  bgColor: Maybe<Scalars["String"]>;
  height: Scalars["IntType"];
  sizes: Scalars["String"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  title: Maybe<Scalars["String"]>;
  webpSrcSet: Scalars["String"];
  width: Scalars["IntType"];
};

export type FileField = {
  _createdAt: Scalars["DateTime"];
  _updatedAt: Scalars["DateTime"];
  alt: Maybe<Scalars["String"]>;
  author: Maybe<Scalars["String"]>;
  basename: Scalars["String"];
  blurUpThumb: Maybe<Scalars["String"]>;
  blurhash: Maybe<Scalars["String"]>;
  copyright: Maybe<Scalars["String"]>;
  customData: Maybe<Scalars["CustomData"]>;
  exifInfo: Maybe<Scalars["CustomData"]>;
  filename: Scalars["String"];
  format: Scalars["String"];
  height: Maybe<Scalars["IntType"]>;
  id: Scalars["UploadId"];
  md5: Scalars["String"];
  mimeType: Scalars["String"];
  notes: Maybe<Scalars["String"]>;
  responsiveImage: Maybe<ResponsiveImage>;
  size: Scalars["IntType"];
  smartTags: Array<Maybe<Scalars["String"]>>;
  tags: Array<Maybe<Scalars["String"]>>;
  title: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  width: Maybe<Scalars["IntType"]>;
};

export type ShowCaseFragment = Pick<
  ProjectRecord,
  "id" | "title" | "description" | "updatedAt" | "createdAt" | "image" | "url"
> & { image: Maybe<{ responsiveImage: Maybe<ResponsiveImageFieldsFragment> }>; tags: Array<Scalars["String"]> };

export type ResponsiveImageFieldsFragment = Pick<
  ResponsiveImage,
  "alt" | "aspectRatio" | "base64" | "height" | "sizes" | "src" | "srcSet" | "title" | "webpSrcSet" | "width"
>;

export type AboutPagePropsQuery = {
  about: Maybe<
    Pick<AboutRecord, "preface" | "updatedAt"> & {
      cover: Maybe<{ responsiveImage: Maybe<ResponsiveImageFieldsFragment> }>;
    }
  >;
};

export type AboutRecord = {
  preface: Scalars["String"];
  cover: Maybe<FileField>;
  updatedAt: Scalars["DateTime"];
};

export const ResponsiveImageFieldsFragmentDoc = /*#__PURE__*/ `
  fragment ResponsiveImageFields on ResponsiveImage {
    alt
    aspectRatio
    base64
    height
    sizes
    src
    srcSet
    title
    webpSrcSet
    width
  }
`;

export type ProjectRecord = {
  url: Scalars["String"];
  title: Scalars["String"];
  tags: Maybe<FileField>;
  id: Scalars["ID"];
  description: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  image: Maybe<ShowCaseFragment>;
};

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

export type ProjectsStaticPropsQueryVariables = Exact<{ [key: string]: never }>;

export const projectStaticProps = `
query projectsProps {
  allProjects1s(orderBy: _createdAt_ASC) {
    title
    id
    url
    tags
    description
    image {
      responsiveImage {
        ...ResponsiveImageFields
      }
    }
  }
}
${ResponsiveImageFieldsFragmentDoc}
`;

export const aboutStatiscQuery = `
query AboutQuery {
  about {
    preface
    cover{
      responsiveImage {
        ...ResponsiveImageFields
      }
    }
  }
}
${ResponsiveImageFieldsFragmentDoc}
`;
