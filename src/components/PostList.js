import React, { Component } from "react";
import Post from "./Post";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
  {
    feed {
      postId
      content
      postedByUser {
        userAlias
        userName
        profilePictureUrl
      }
    }
  }
`;

class PostList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const postsToRender = data.feed;
          console.log(postsToRender);
          return (
            <div>
              {postsToRender.map((post) => (
                <Post key={post.postId} post={post} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PostList;
