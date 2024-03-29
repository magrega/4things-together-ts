import LoadingButton from '@mui/lab/LoadingButton';
import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState, useCallback, FC } from 'react';
import { IUser } from './PostApp.interfaces';
import AuthorModal from './PostsByUsers/AuthorModal/AuthorModal';
import Post from "./PostsByUsers/Post/Post";
import PostsContainer from './PostsByUsers/PostsContainer/PostsContainer';
import { getPosts } from '../../services/getData';
import './PostApp.css';

export type TPost = {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const PostsApp: FC = () => {
  const [loading, setLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [userModal, setUserModal] = useState<IUser | undefined>(undefined);
  const [posts, setPosts] = useState<TPost[] | undefined>();
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [getPostsError, setGetPostsError] = useState('');
  const [getUserError, setGetUserError] = useState('');


  const updatePostsFromServer = useCallback(() => {
    getPosts(page)
      .then(posts => {
        setTotalCount(Number(posts.headers.get('x-total-count')));
        return posts.json() as Promise<TPost[]>;
      })
      .then(newPosts => {
        setPosts(prevState => [...(prevState ?? []), ...newPosts]);
        setLoading(false);
        setIsButtonLoading(false);
      }).catch(e => {
        setGetPostsError(e.message);
        setLoading(false);
        setIsButtonLoading(false);
      })
  }, [page]);

  const showMore = () => {
    setIsButtonLoading(true);
    setPage(prevValue => prevValue + 1);
  }

  useEffect(() => { updatePostsFromServer() }, [page, updatePostsFromServer]);

  if (loading) {
    return <div className='initial-spinner'><CircularProgress color="success" /></div>;
  }

  return (
    <>
      <Box className="posts-app">
        <PostsContainer getPostsError={getPostsError}>
          {
            posts?.map((post) => {
              return <Post
                key={Number(post.id)}
                post={post}
                setOpen={setOpenModal}
                setUserModal={setUserModal}
                setIsModalLoading={setIsModalLoading}
                setGetUserError={setGetUserError}
              />
            })
          }
        </PostsContainer>

        {(posts) && posts?.length < totalCount && <LoadingButton
          color="error"
          onClick={showMore}
          loading={isButtonLoading}
          variant="contained"
        >
          <span>Show More</span>
        </LoadingButton>}
      </Box>

      <AuthorModal open={openModal} setOpen={setOpenModal} userModal={userModal} isModalLoading={isModalLoading} getUserError={getUserError}/>
    </>
  );
}

export default PostsApp;