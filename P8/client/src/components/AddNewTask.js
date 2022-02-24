import { Button_styled } from "./Button_styled";
import { useState } from "react";

function AddNewTask(props) {
  const [titleInput, settitleInput] = useState("");
  const [dateInput, setdateInput] = useState("");

  return (
    <div class="parent">
              <div class="child float-child">
                  Add New Task
              </div>
      <div class="child float-child">
        <div class="form__group">
          <input
            value={titleInput}
            onChange={(e) => settitleInput(e.target.value)}
            type="input"
            class="form__field"
            placeholder="Enter task title"
            name="title"
            id="title"
            required
          />
        </div>
      </div>

      <div class="child float-child">
        <div class="form__group">
          <input
            value={dateInput}
            onChange={(e) => setdateInput(e.target.value)}
            type="input"
            class="form__field"
            placeholder="Enter expired Date"
            name="date"
            id="date "
            required
          />
        </div>
      </div>
      <div class="child float-child">
        <Button_styled
          class="child float-child"
          onClick={() => props.insertFunction(titleInput, dateInput)}
        >
          add Task
        </Button_styled>
      </div>
    </div>
  );
}
export default AddNewTask;
