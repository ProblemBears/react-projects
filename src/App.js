import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <Todo text="Learn React"/>
      <Todo text="MAster React"/>
      <Todo text="Explore the full react course"/>

      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;