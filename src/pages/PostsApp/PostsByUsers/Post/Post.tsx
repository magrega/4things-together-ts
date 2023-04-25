import { FC } from 'react';
import { getUser } from '../../../../services/getData';
import { IUser } from '../../PostApp.interfaces';
import { TPost } from '../../PostsApp';
import './Post.css';

interface IPostProps {
    post: TPost;
    setOpen: (value: boolean) => void;
    setUserModal: (value: IUser | undefined) => void;
    setIsModalLoading: (value: boolean) => void;
    setError: (value: boolean) => void;
}

const Post: FC<IPostProps> = ({ post, setOpen, setUserModal, setIsModalLoading, setError }) => {

    const openAuthorModal = () => {
        setIsModalLoading(true);
        setOpen(true);
        getUser(post.userId).then(user => {
            setUserModal(user);
            setIsModalLoading(false);
        }).catch(e => {
            setError(true);
            setIsModalLoading(false);
            console.log(e);
        });
    }

    return (
        <div onClick={openAuthorModal} className='post'>
            <p>{post.id}</p>
            <p className='post__title'>{post.title}</p>
            <p className='post__body'>{post.body}</p>
            <p className='post__author'>Click card for author info</p>
        </div>
    );
};

export default Post;