import { Button_styled } from "./Button_styled";
import { markRow, SomeDeleteRowFunction } from "./script/index.js";
import {useState} from 'react';
function TableRow(props) {

const [markColor, setmarkColor] = useState('rgb(70, 70, 70)')
  
  function markClick(){
    markColor=='rgb(70, 70, 70)' ? setmarkColor('green'):setmarkColor('rgb(70, 70, 70)')
  } 


  return (
    <tr style={{backgroundColor: markColor}}>
      <td class="cell">{props.title}</td>
      <td class="cell">{props.update_date}</td>
      <td class="cell">{props.expired_date}</td>
      <td class="cell">{props.status}</td>
      <td class="cell">
        <Button_styled onClick={() => props.deleteFunction(props.title)}>Delete Row</Button_styled>
        <Button_styled onClick={() => markClick()}>mark Row</Button_styled>
      </td>
    </tr>
  );
}

export default TableRow;
