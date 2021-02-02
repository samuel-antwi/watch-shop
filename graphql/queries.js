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
