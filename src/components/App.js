import React, { Component } from "react";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CreatePost />
        <hr className="divider"/>
        <PostList />
      </>
    );
  }
}

export default App;
