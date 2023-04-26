import { FC, PropsWithChildren } from 'react';
import './PostsContainer.css';

interface IPostsContainerProps {
  getPostsError: string;
}

const PostsContainer: FC<PropsWithChildren<IPostsContainerProps>> = ({ getPostsError, children }) => {
  
  return (
    <div className="posts-container">
      {getPostsError ? getPostsError : children}
    </div>
  );
};

export default PostsContainer;