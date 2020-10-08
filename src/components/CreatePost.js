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
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={content}
            onChange={(e) => this.setState({ content: e.target.value })}
            type="text"
            placeholder="What's going on?"
          />
        </div>
        <Mutation
          mutation={CREATE_POST_MUTATION}
          variables={{ content }}
          refetchQueries={[{ query: FEED_QUERY }]}
        >
          {(createPostMutation) => (
            <button
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
    );
  }
}

export default CreatePost;
