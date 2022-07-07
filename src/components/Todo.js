import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) 
{
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler()
    {
        setModalIsOpen(true);
    }

    function closeModalHandler()
    {
        setModalIsOpen(false);
    }

    return(
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
      { modalIsOpen ? <div><Backdrop onClick={closeModalHandler} /> <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> </div> : null}
    </div>
    );
}

export default Todo;