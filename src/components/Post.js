import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="user-post border p-3">
        <div className="profile-picture mr-2">
          <img
            src={`${this.props.post.postedByUser.profilePictureUrl}`}
            alt="User of post"
          />
        </div>
        <div className="post-content">
          <div>
            <b>{this.props.post.postedByUser.userName}</b> @
            {this.props.post.postedByUser.userAlias}
          </div>
          <div>{this.props.post.content}</div>
          <div className="post-icons mt-3 d-flex justify-content-between">
            <i class="far fa-comment"></i>
            <i class="fas fa-redo"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-paper-plane"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
