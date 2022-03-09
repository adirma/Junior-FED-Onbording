import { Button_styled } from "./Button_styled";
import { useState } from "react";
import taskImage from "./image/tasks.png";
import { useHistory } from "react-router-dom";

function AddNewTask(props) {
  const [titleInput, settitleInput] = useState("");
  const [dateInput, setdateInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 

  async function handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();
    props.insertFunction(titleInput,dateInput);
    setIsSubmitted(true)
  }
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  const renderForm = (
    <div className="form">
      <img class="Image" src={taskImage} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Task title </label>
          <input
            value={titleInput}
            onChange={(e) => settitleInput(e.target.value)}
            type="input"
            placeholder="Enter task title"
            name="title"
            id="title"
            required
          />
        </div>
        <div className="input-container">
          <label>Expired Data </label>
          <input
            value={dateInput}
            onChange={(e) => setdateInput(e.target.value)}
            type="input"
            placeholder="Enter expired Date"
            name="date"
            id="date "
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-form">
      <div className="title">Add New Task</div>
      {isSubmitted ?  routeChange() : renderForm}
    </div>
);
}
export default AddNewTask;
