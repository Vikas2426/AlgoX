import styled from 'styled-components';

const StyledButton = styled.button`
padding: 0.7em 2.5em;
margin: 10px;
background: ${(props) => (props.disabled ? 'grey' : 'linear-gradient(to right, #00b4db, #0083b0)')};
color: white;
font-weight:700;
border: none;
&:hover{
    background: ${(props) => (props.disabled ? 'grey' : 'linear-gradient(to right, #00b4db, #0053b0)')}
}
`;

export default StyledButton;
