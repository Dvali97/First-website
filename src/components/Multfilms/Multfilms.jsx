import Mult from "./Multfilm/Mult";
import { useRef } from 'react';

const Multfilms = (props) => {

  let nameAndSurname = props.multfilms.multfilm.map(
  (m) => <Mult name={m.name} />
  )

  let val = useRef();


  let addName = () => {
    props.addName();
  }

  let changeName = () => {
    let newWord = val.current.value;
    props.updateName(newWord);
  }

  return (
    <div>
      <h1>Multfilm</h1>
      {nameAndSurname}
      <div>
        <textarea onChange={changeName} ref={val} />
      </div>
      <div>
        <button onClick={addName}>Send</button>
      </div>
    </div>
  );
};

export default Multfilms;