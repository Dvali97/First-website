import Multt from "./multt";

const Multfilms = (props) => {
  let multfilmElement = props.mult.map((m) => <Multt 
  age={m.age}
  name={m.name}
  surname={m.surname}
  city={m.city}
  addPost={props.addPost}
  />);



  return (
    <div>
      <h1>Multfilm</h1>
      {multfilmElement}
    </div>
  );
};

export default Multfilms;
