import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <Avatar src="https://scontent.fsjp8-1.fna.fbcdn.net/v/t39.30808-6/241318847_3629242633845418_8967739168686586527_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=pNrVJIlxEz0AX9aK_1m&_nc_ht=scontent.fsjp8-1.fna&oh=00_AT_yi6ghsRBhHDkqd2vfzBF4rsWLXPolgUKg5tFB0nuR1g&oe=62CA0C81"/>
                <strong>Lucas Matheus</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}