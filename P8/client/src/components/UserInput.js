import styled from 'styled-components';

function UserInput(props){
    return (
        <div class="form__group" >
          <label for={props.for} class="form__label" > {props.label} : </label>
          <input type="input" class="form__field" placeholder={props.label} name={props.label} id={props.label} required />
        </div>
    );}

export default UserInput;