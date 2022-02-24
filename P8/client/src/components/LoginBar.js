
import { Button_styled } from './Button_styled';
import {useState} from 'react'

function LoginBar(){
    const [idInput, setIdInput] = useState("");
    return(
        <div >
            <div class='child float-child'> 
            <input
            value={idInput}
            onChange={(e) => setIdInput(e.target.value)}
            type="input"
            class="form__field"
            placeholder="please enter your userId"
            required
          /> 
            </div>
            <div class='child float-child'> 
                <Button_styled>Load Tasks</Button_styled>
            </div>
        </div>
    );
}
export default LoginBar;
    