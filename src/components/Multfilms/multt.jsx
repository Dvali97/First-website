import { useRef } from "react";

const Multt = (props) => {

  let newUrl = useRef();
  let newGenre = useRef();
  let newTitle = useRef();
  let newAlt = useRef();

  let addNewPost = () => {
    let urL = newUrl.current.value;
    let genrE = newGenre.current.value;
    let titlE = newTitle.current.value;
    let alT = newAlt.current.value;

    props.addPost(urL, genrE, titlE, alT);
  }

  return (
    <div>
      <div>
        მე მქვია {props.name} {props.surname} ვარ {props.age} წლის ვცხოვრობ{" "}
        {props.city}
      </div>
      <br />
      <br />
      <div>
        <span>შეიყვანე ფოტოს ლინკი </span>
        <input type="text" name="" ref={newUrl}/>
        <br />
        <br />
      </div>
      <div>
        <span>შეიყვანე ჟანრი </span>
        <input type="text" name="" ref={newGenre}/>
        <br />
        <br />
      </div>
      <div>
        <span>შეიყვანე სათაური </span>
        <input type="text" name="" ref={newTitle}/>
        <br />
        <br />
      </div>
      <div>
        <span>შეიყვანე Alt </span>
        <input type="text" name="" ref={newAlt}/>
      </div>
      <div>
        <br />
        <br />
        <button onClick={addNewPost}>ატვირთე</button>
      </div>
    </div>
  );
};

export default Multt;
