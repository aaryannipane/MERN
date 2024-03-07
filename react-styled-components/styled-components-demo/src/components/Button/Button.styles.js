import styled, {keyframes} from "styled-components";

export const StyledButton = styled.button`
  /* display: inline-block; */
  color: ${(props)=>(props.variant==='outlined'? "green": "white")};
  background-color: ${(props)=>(props.variant==='outlined'? "white": "green")};
  padding: 15px 32px;
  font-size: 16px;
  border: 2px solid green;
  cursor: pointer;
  transition: all .5s ease;

  /* pseudo  classes*/
  &:hover{
    color: ${(props)=>(props.variant!=='outlined'? "green": "white")};
  background-color: ${(props)=>(props.variant!=='outlined'? "white": "green")};
  }
`;

// extending styles
export const FancyButton = styled(StyledButton)`

    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`

// Passed Props and Adding Attributes
export const SubmitButton = styled(StyledButton).attrs({type:"submit"})`
    box-shadow: 0 9px #999;
    &:active{
        background-color: ${(props)=>(props.variant!=='outlined'? "white": "green")};
        box-shadow: 0 5px #999;
        transform:translateY(4px);
    }
`

// Animations
const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const AnimatedLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 2s linear;
    aspect-ratio: 1/1;
`