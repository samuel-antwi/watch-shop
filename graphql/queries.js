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
          category {
            name
          }
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
export const ALL_STRAPS = gql`
  query queryAllStraps($slug: String!, $pageSize: Int!) {
    __typename
    productsConnection(first: $pageSize, where: { category: { slug: $slug } }) {
      edges {
        cursor
        node {
          id
          name
          category {
            name
          }
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
      category {
        name
      }
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

export const GET_STRAP = gql`
  query getWatch($slug: String!) {
    __typename
    product(where: { slug: $slug }) {
      id
      images {
        url
        id
      }
      instock
      category {
        name
      }
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
  query relatedWatches($slug: String!, $size: Int, $name: String!) {
    __typename
    products(where: { slug_not: $slug, category: { name: $name } }, last: $size) {
      id
      images {
        url
      }
      category {
        name
      }
      name
      price
      slug
    }
  }
`;
export const GET_RELATED_STRAPS = gql`
  query relatedWatches($slug: String!, $size: Int, $name: String!) {
    __typename
    products(where: { slug_not: $slug, category: { name: $name } }, last: $size) {
      id
      images {
        url
      }
      category {
        name
      }
      name
      price
      slug
    }
  }
`;

export const SHOWCASE_WATCHES = gql`
  query showcaseWatches($slug: String!) {
    __typename
    products(where: { category: { slug: $slug } }, first: 4) {
      images {
        url
      }
      slug
      category {
        name
      }
    }
  }
`;
export const SHOWCASE_STRAPS = gql`
  query showcaseStraps($slug: String!) {
    __typename
    products(where: { category: { slug: $slug } }, first: 4) {
      images {
        url
      }
      slug
      price
      description {
        markdown
      }
      category {
        name
      }
    }
  }
`;
