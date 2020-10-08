import gql from "graphql-tag";

export const FEED_QUERY = gql`
  {
    feed {
      postId
      content
      postedByUser {
        userId
        userAlias
        userName
        profilePictureUrl
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($content: String!) {
    createPost(content: $content) {
      postId
      content
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($postId: ID!) {
    deletePost(postId: $postId) {
      postId
      content
    }
  }
`;
