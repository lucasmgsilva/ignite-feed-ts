import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://scontent.fsjp8-1.fna.fbcdn.net/v/t39.30808-6/241318847_3629242633845418_8967739168686586527_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=pNrVJIlxEz0AX9aK_1m&_nc_ht=scontent.fsjp8-1.fna&oh=00_AT_yi6ghsRBhHDkqd2vfzBF4rsWLXPolgUKg5tFB0nuR1g&oe=62CA0C81" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Matheus</strong>

                            <time dateTime="2022-05-11 08:13:30" title="11 de Maio às 08:13h">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}