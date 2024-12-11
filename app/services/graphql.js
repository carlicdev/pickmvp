import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPicks = async () => {
  const query = gql`
      query Assets {
        picks (last: 50) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getLivePicks = async () => {
  const query = gql`
      query Assets {
        picks (where: {result: null}, last: 50) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getSettledPicks = async () => {
  const query = gql`
      query Assets {
        picks (where: {result_not: null}, last: 50) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getNbaPicks = async () => {
  const query = gql`
      query Assets {
        picks (where: {category: { title: "NBA" }}, last: 50) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getLiveNbaPicks = async () => {
  const query = gql`
      query Assets {
        picks (where: {category: { title: "NBA" }, result: null}, last: 50) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getSettledNbaPicks = async () => {
  const query = gql`
      query Assets {
        picks (last: 50, where: {category: { title: "NBA" }, result_not: null}) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getNflPicks = async () => {
  const query = gql`
      query Assets {
        picks (last: 50, where: {category: { title: "NFL" }}) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getLiveNflPicks = async () => {
  const query = gql`
      query Assets {
        picks (last: 50, where: {category: { title: "NFL" }, result: null}) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getSettledNflPicks = async () => {
  const query = gql`
      query Assets {
        picks (last: 50, where: {category: { title: "NFL" }, result_not: null}) {
            id
            match
            selection
            date
            result
            type
            stars
            odds
            author {
              name
            }
            category {
              title
            }
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.picks.reverse();
};

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection(last: 50) {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          id
          excerpt
          slug
          category {
            title
          }
          title
          featuredImage {
            url
          }
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges.reverse();
};

export const getNbaPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection (where: {category: { title: "NBA" }}){
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          id
          excerpt
          slug
          category {
            title
          }
          title
          featuredImage {
            url
          }
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges.reverse();
};

export const getNflPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection (last: 50, where: {category: { title: "NFL" }}){
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          id
          excerpt
          slug
          category {
            title
          }
          title
          featuredImage {
            url
          }
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges.reverse();
};

export const getPostDetails = async (slug) => {
    const query = gql`
    query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              excerpt
              slug
              title
              featuredImage {
                url
              }
              content{
                raw
              }
        }
      }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};