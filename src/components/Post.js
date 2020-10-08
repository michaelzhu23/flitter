import React, { Component } from "react";

class Post extends Component {
  render() {
    const canEdit =
      this.props.post.postedByUser.userId === "1" ? (
        <div className="post-icons">
          <i class="fas fa-edit mx-2 text-primary edit-icon"></i>
          <i class="fas fa-trash-alt mx-2 text-danger delete-icon"></i>
        </div>
      ) : null;

    return (
      <div className="user-post border p-3">
        <div className="profile-picture mr-2">
          <img
            src={`${this.props.post.postedByUser.profilePictureUrl}`}
            alt="User of post"
          />
        </div>
        <div className="post-content">
          <div className="post-heading d-flex justify-content-between">
            <div className="post-user">
              <b>{this.props.post.postedByUser.userName}</b> @
              {this.props.post.postedByUser.userAlias}
            </div>
            {canEdit}
          </div>
          <div>{this.props.post.content}</div>
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
