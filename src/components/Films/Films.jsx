import s from "./Films.module.css";
import Post from "./Post/Post";

const Films = (props) => {
  let postElements = props.posts.map((p) => (
    <Post url={p.url} title={p.title} alt={p.alt} genre={p.genre} />
  ));

  let postElementss = props.postss.map((p) => (
    <Post url={p.url} title={p.title} alt={p.alt} genre={p.genre} />
  ));

  let postElementsss = props.postsss.map((p) => (
    <Post url={p.url} title={p.title} alt={p.alt} genre={p.genre} />
  ));


  

  return (
    <div className={s.body}>
      <div className={s.postContainer}>
        {postElements}
      </div>
      <div className={s.postContainer}>
        {postElementss}
      </div>
      <div className={s.postContainer}>
        {postElementsss}
      </div>
    </div>
  );
};

export default Films;
