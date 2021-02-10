import { gql } from 'graphql-request';

export const ALL_WATCHES = gql`
  query queryAllWatches($slug: String!, $pageSize: Int!) {
    __typename
    productsConnection(first: $pageSize, where: { category: { slug: $slug } }) {
      edges {
        cursor
        node {
          id
          name
          slug
          price
          instock
          images {
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
      }
    }
  }
`;

export const GET_WATCH = gql`
  query getWatch($slug: String!) {
    __typename
    product(where: { slug: $slug }) {
      id
      images {
        url
        id
      }
      instock
      model
      name
      price
      slug
      description {
        markdown
      }
      reviews(orderBy: createdAt_DESC) {
        email
        id
        message
        name
        rating
        headline
      }
    }
  }
`;

export const GET_RELATED_WATCHES = gql`
  query relatedWatches($slug: String!, $size: Int) {
    __typename
    products(where: { slug_not: $slug }, last: $size) {
      id
      images {
        url
      }
      name
      price
      slug
    }
  }
`;
