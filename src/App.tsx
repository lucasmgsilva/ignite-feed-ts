import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://scontent.fsjp8-1.fna.fbcdn.net/v/t39.30808-6/241318847_3629242633845418_8967739168686586527_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=pNrVJIlxEz0AX9aK_1m&_nc_ht=scontent.fsjp8-1.fna&oh=00_AT_yi6ghsRBhHDkqd2vfzBF4rsWLXPolgUKg5tFB0nuR1g&oe=62CA0C81',
      name: 'Lucas Matheus',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
          })}
        </main>
      </div>
    </div>
  )
}

export default App