import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { FEED_QUERY, CREATE_POST_MUTATION } from "../Queries";

class CreatePost extends Component {
  state = {
    content: "",
  };

  render() {
    const { content } = this.state;
    return (
      <div className="create-post p-3 border">
        <div className="profile-picture mr-2">
          <img
            src="./images/michael-zhu.jpg"
            alt="User of post"
          />
        </div>
        <div>
          <input
            className="my-2 border-0"
            value={content}
            onChange={(e) => this.setState({ content: e.target.value })}
            type="text"
            placeholder="What's going on?"
            size="60"
          />
          <hr className="my-2"/>
          <div className="text-right">
            <Mutation
          mutation={CREATE_POST_MUTATION}
          variables={{ content }}
          refetchQueries={[{ query: FEED_QUERY }]}
        >
          {(createPostMutation) => (
            <button
              type="button"
              className="btn btn-info"
              onClick={() => {
                createPostMutation();
                this.setState({ content: "" });
              }}
            >
              <b>Post</b>
            </button>
          )}
        </Mutation>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
