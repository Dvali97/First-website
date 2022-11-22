import s from "./../Films.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img className={s.img} src={props.url} alt={props.alt} />
      <div className={s.description}>
        <span className={s.title}>{props.title}</span>
        <p>{props.genre}</p>
        <input className={s.button} type="button" value="Watch Now" />
      </div>
    </div>
  );
};

export default Post;
