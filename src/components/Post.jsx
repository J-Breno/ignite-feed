import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";


export function Post({ author, publisedAt, content }) {

  const [comments, setComments] = useState(['post muito legal']);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormated = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publisedAt);

  function handleCreateNewComment() {
    event.preventDefault();


    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment) {

    const commentWithoutDeletedOne = comments.filter(commentToDelete => {
      return comment !== commentToDelete;
    })

    setComments(commentWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime="2024-11-25 12:20:00">
          {publishedDateFormated}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea onInvalid={handleNewCommentInvalid} required value={newCommentText} onChange={handleNewCommentChange} name="comment" placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => {
           return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          })
        }
      </div>
    </article>
  );
}
