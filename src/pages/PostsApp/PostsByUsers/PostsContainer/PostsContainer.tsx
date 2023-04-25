import { FC, PropsWithChildren } from 'react';
import './PostsContainer.css';

const PostsContainer: FC<PropsWithChildren> = ({ children }) => {
  
  return (
    <div className="posts-container">
      {children}
    </div>
  );
};

export default PostsContainer;