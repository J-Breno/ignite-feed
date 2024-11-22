import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/J-Breno.png",
      name: "Breno",
      role: "Web Developer | Front-end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-11-21 16:05:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/J-Breno.png",
      name: "João",
      role: "Web Developer | Back end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-11-11 16:05:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
