import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/J-Breno.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Breno</strong>

              <time
                title="12 de Novembro às 12:20h"
                dateTime="2024-11-25 12:20:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário"><Trash size={24}/></button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
            Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
