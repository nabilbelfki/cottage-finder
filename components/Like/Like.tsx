import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.css';
import HeartIcon from '@/public/icons/like.svg';

interface Props {
    liked: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
}

export default function Like({ liked, toggle }: Props) {
    return (
        <button className={liked ? styles.liked : styles.unliked} onClick={() => toggle(!liked)}>
            <HeartIcon
                width={20}
                height={20}
                color={liked ? "#FF8989" : "#3D3D3D"}
                fillOpacity={liked ? 1 : 0.4}
            />
        </button>
    );
}