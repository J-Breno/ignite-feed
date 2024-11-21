import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';

function App() {

  return (
    <>
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author="Breno"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus voluptate, veritatis inventore dignissimos ipsa et perspiciatis reprehenderit quis quos incidunt similique soluta voluptatum dolor? Sint sequi delectus nam atque dolorem."
        />
        <Post
          author="João"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus voluptate, veritatis inventore dignissimos."
        />
      </main>
     </div>
    </>
  )
}


export default App
