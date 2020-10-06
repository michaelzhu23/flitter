import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    const postsToRender = [
      {
        id: "1",
        content: "Testing post 1",
      },
      {
        id: "2",
        content: "Testing post 2",
      },
    ];

    return (
      <div>
        {postsToRender.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
