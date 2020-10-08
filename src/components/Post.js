import React, { Component } from "react";
import { Mutation } from "react-apollo";
import {
  FEED_QUERY,
  DELETE_POST_MUTATION,
  UPDATE_POST_MUTATION,
} from "../Queries";

class Post extends Component {
  state = {
    content: this.props.post.content,
    editing: false,
  };

  togglePostEditing = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { content } = this.state;

    const canEdit =
      this.props.post.postedByUser.userId === "1" ? (
        <div className="post-icons">
          <i
            className="fas fa-edit mx-2 text-primary edit-icon"
            onClick={this.togglePostEditing}
          ></i>
          <Mutation
            mutation={DELETE_POST_MUTATION}
            variables={{ postId: this.props.post.postId }}
            refetchQueries={[{ query: FEED_QUERY }]}
          >
            {(deletePostMutation) => (
              <i
                className="fas fa-trash-alt mx-2 text-danger delete-icon"
                onClick={deletePostMutation}
              ></i>
            )}
          </Mutation>
        </div>
      ) : null;

    const postContent = this.state.editing ? (
      <>
        <input
          className="mb-2"
          value={content}
          onChange={(e) => this.setState({ content: e.target.value })}
          type="text"
          size="60"
        />
        <div className="edit-buttons">
          <Mutation
            mutation={UPDATE_POST_MUTATION}
            variables={{ postId: this.props.post.postId, content }}
            refetchQueries={[{ query: FEED_QUERY }]}
          >
            {(updatePostMutation) => (
              <button
                type="button"
                className="btn btn-outline-primary btn-sm mr-2"
                onClick={() => {
                  updatePostMutation();
                  this.togglePostEditing();
                }}
              >
                Submit
              </button>
            )}
          </Mutation>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={this.togglePostEditing}
          >
            Cancel
          </button>
        </div>
      </>
    ) : (
      <div className="post-content mt-1">{this.props.post.content}</div>
    );

    return (
      <div className="user-post border p-3">
        <div className="profile-picture mr-2">
          <img
            src={`${this.props.post.postedByUser.profilePictureUrl}`}
            alt="User of post"
          />
        </div>
        <div className="post-main">
          <div className="post-heading d-flex justify-content-between">
            <div className="post-user">
              <b>{this.props.post.postedByUser.userName}</b> @
              {this.props.post.postedByUser.userAlias}
            </div>
            {canEdit}
          </div>
          {postContent}
          <div className="post-icons mt-3 d-flex justify-content-between">
            <i className="far fa-comment"></i>
            <i className="fas fa-redo"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-paper-plane"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
