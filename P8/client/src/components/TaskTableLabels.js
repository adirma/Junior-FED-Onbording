import TableRow from "./TableRow";
import "./css/TableRow.css";

function TaskTableLabels(props) {
  return (
    <table id="table">
      <tbody>
        <tr>
          <th class="cell_label">title</th>
          <th class="cell_label">update date</th>
          <th class="cell_label">expired date</th>
          <th class="cell_label">status</th>
          <th class="cell_label"></th>
        </tr>
        {props.tasks.map((task) => (
          <TableRow
            key={task.title}
            title={task.title}
            update_date={task.expiredDate}
            expired_date={task.updateDate}
            status={task.status}
            deleteFunction={props.deleteFunction}
            
          ></TableRow>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTableLabels;
