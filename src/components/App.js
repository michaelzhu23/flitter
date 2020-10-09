import React, { Component } from "react";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-heading border p-2">
          <h4 className="ml-2"><b>Latest Posts</b></h4>
        </div>
        <CreatePost />
        <hr className="divider"/>
        <PostList />
      </>
    );
  }
}

export default App;
