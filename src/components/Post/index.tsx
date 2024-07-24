import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl= 'https://th.bing.com/th/id/OIP.4W6Lk1pIO5kGixBF0iwe7wHaFj?rs=1&pid=ImgDetMain'} />
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;