import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/J-Breno.png" />
          <div className={styles.authorInfo}>
            <strong>Breno</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="12 de Novembro às 12:20h" dateTime="2024-11-25 12:20:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário">

        </textarea>
        <footer><button type="submit">Publicar</button></footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
