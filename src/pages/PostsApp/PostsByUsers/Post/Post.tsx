import { FC } from 'react';
import { getUser } from '../../../../services/getData';
import { TPost } from '../../PostsApp';
import './Post.css';

export type User = {
    name: string;
    address: string;
    email: string;
    phone: string;
}

interface IPostProps {
    post: TPost;
    setOpen: (value: boolean) => void;
    setUserModal: (value: User | null) => void;
    setIsModalLoading: (value: boolean) => void;
}

const Post: FC<IPostProps> = ({ post, setOpen, setUserModal, setIsModalLoading }) => {

    const openAuthorModal = () => {
        setIsModalLoading(true);
        setOpen(true);
        getUser(post.userId).then(user => {
            setUserModal({
                name: user.name,
                address: `${user.address.city}, ${user.address.street}, ${user.address.suite}`,
                email: user.email,
                phone: user.phone
            });
            setIsModalLoading(false);
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