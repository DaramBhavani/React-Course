import styled from 'styled-components';

/********* Styled Button using styled components **********/

const StyledButton  = styled.button`

  background-color :${props => props.alt? 'red' : 'darkgreen'};
  border: 2px solid gray;
  cursor: pointer;
  fontSize: 15px;
  padding: 5px;
  color:white;
  margin-left:20px;

  &:hover {
    background-color : ${props => props.alt ? 'orangered' : 'green'};
    border : 2px solid darkgray;
  }
    
`;

export default StyledButton;