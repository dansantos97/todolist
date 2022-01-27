import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/listAction";
import { FaPlus } from "react-icons/fa";

function TodoForm(props) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItemEvent(event) {
    event.preventDefault();
    if (text) {
      dispatch(addItem(text))
      setText('');
      props.onHideModal();
    }
  }

  return (<form>
    <input onChange={handleChange} type="text" ref={input => input && input.focus()} value={text}></input>
    <button className="button" onClick={addItemEvent}><FaPlus /></button>
  </form>)
}

export default TodoForm;
