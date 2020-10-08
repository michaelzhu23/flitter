import React, { Component } from "react";
import PostList from "./PostList";
import CreatePost from "./CreatePost";

class App extends Component {
  render() {
    return (
      <>
        <CreatePost />
        <PostList />
      </>
    );
  }
}

export default App;
