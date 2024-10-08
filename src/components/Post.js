import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import {
  FEED_QUERY,
  DELETE_POST_MUTATION,
  UPDATE_POST_MUTATION,
} from '../Queries';

const Post = ({ post, post: { postedByUser } }) => {
  const [content, setContent] = useState(post.content);
  const [isEditing, setIsEditing] = useState(false);

  const togglePostEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='user-post border p-3'>
      <div className='profile-picture mr-2'>
        <img src={`${postedByUser.profilePictureUrl}`} alt='User of post' />
      </div>
      <div className='post-main'>
        <div className='post-heading d-flex justify-content-between'>
          <div className='post-user'>
            <b>{postedByUser.userName}</b>{' '}
            <i class='fas fa-check-circle text-info'></i> @
            {postedByUser.userAlias}
          </div>
          {postedByUser.userId === '1' && (
            <div className='post-icons w-25 text-right'>
              <i
                className='fas fa-edit mx-2 text-primary edit-icon'
                onClick={togglePostEditing}
              ></i>
              <Mutation
                mutation={DELETE_POST_MUTATION}
                variables={{ postId: post.postId }}
                refetchQueries={[{ query: FEED_QUERY }]}
              >
                {(deletePostMutation) => (
                  <i
                    className='fas fa-trash-alt mx-2 text-danger delete-icon'
                    onClick={deletePostMutation}
                  ></i>
                )}
              </Mutation>
            </div>
          )}
        </div>
        {isEditing ? (
          <>
            <input
              className='mb-2'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type='text'
              size='60'
            />
            <div className='edit-buttons'>
              <Mutation
                mutation={UPDATE_POST_MUTATION}
                variables={{ postId: post.postId, content }}
                refetchQueries={[{ query: FEED_QUERY }]}
              >
                {(updatePostMutation) => (
                  <button
                    type='button'
                    className='btn btn-outline-primary btn-sm mr-2'
                    onClick={() => {
                      updatePostMutation();
                      togglePostEditing();
                    }}
                  >
                    Update
                  </button>
                )}
              </Mutation>
              <button
                type='button'
                className='btn btn-outline-danger btn-sm'
                onClick={togglePostEditing}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className='post-content mt-1'>{post.content}</div>
        )}
        <div className='post-icons mt-3 d-flex justify-content-between'>
          <i className='far fa-comment'></i>
          <i className='fas fa-redo'></i>
          <i className='far fa-heart'></i>
          <i className='far fa-paper-plane'></i>
        </div>
      </div>
    </div>
  );
};

export default Post;
