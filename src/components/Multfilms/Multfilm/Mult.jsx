import s from "./mult.module.css";

let Mult = (props) => {
    return <div>
        <div className={s.box}>name: {props.name}</div>
    </div>
}

export default Mult;