import styled, { css, keyframes } from "styled-components";
import createIcon from "../../images/createIcon.png";
import pig from "../../images/pig.png";

const scaleUpRight = keyframes`
 0% {
    
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
  100% {
    width: 1000px;
    z-index: 100;
    
    -webkit-transform: scale(2);
            transform: scale(2);
            
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
    
    
  }
  
  
`;

const scaleDownRight = keyframes`

0% {
    width: 1000px;
    z-index: 100;
    -webkit-transform: scale(2);
            transform: scale(2);
            
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
        
  
  }
  
  

`;

const scaleUpCenter = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    width: 1000px;
    z-index: 100;
    -webkit-transform: scale(2);
            transform: scale(2);
  }
`;

const scaleDownCenter = keyframes`
    0% {
        width: 1000px;
    z-index: 100;
    -webkit-transform: scale(2);
            transform: scale(2);
  }
  100% {
    
    -webkit-transform: scale(1);
            transform: scale(1);
  } `;

const scaleUpLeft = keyframes`

    0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
  }
  100% {
        width: 1000px;
    z-index: 100;
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
}


`;

const scaleDownLeft = keyframes`
0% {
    width: 1000px;
    z-index: 100;
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
  }


`;

export const UserGoalsDiv = styled.div`
  padding-top: 6vh;
  min-height: 94vh;
  display: flex;
  flex-direction: row;
  text-align: center;

  border-bottom: 1px solid gold;
  font-family: "Roboto";
  background-color: black;

  //background-repeat: no-repeat;
  //background-size: auto;
  background: linear-gradient(to right top, grey, grey 20%, black, black 80%);
  overflow-y: auto;
  //justify-content: space-around;
`;

export const UserGoalsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid white;
  max-width: 70%;
  width: 90%;
  min-height: 300px;
  max-height: 90%;
  margin: auto;
  padding: 5px;
`;

export const LongGoalExample = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  max-width: 100%;
  min-width: 25%;
  min-height: 300px;
  height: 100%;

  font-family: "Robot";
  box-shadow: 2px 2px 20px 1px white;
  -webkit-animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpRight} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animation === false
      ? "none"
      : css`
          ${scaleDownRight} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpRight} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownRight} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};
  :hover {
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
`;

export const MediumGoalExample = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  max-width: 100%;
  min-width: 25%;
  min-height: 300px;
  height: 100%;
  //border: 1px solid gold;
  font-family: "Robot";
  box-shadow: 2px 2px 20px 1px white;

  -webkit-animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpCenter} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownCenter} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpCenter} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownCenter} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};
  :hover {
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
`;
export const ShortGoalExample = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  max-width: 100%;
  min-width: 25%;
  min-height: 300px;
  height: 100%;
  background-image: url(${pig});
  background-size: cover;
  font-family: "Robot";
  box-shadow: 2px 2px 20px 1px white;

  -webkit-animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpLeft} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownLeft} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpLeft} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownLeft} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  :hover {
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
`;

export const GoalExampleTitle = styled.h1`
  padding-top: 8px;
  font-size: 25px;
  color: #51d289;

  //border: red 1px solid;
`;
export const GoalExampleContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80%;
  // border: 1px solid blue;
`;

export const GoalExampleDescription = styled.p`
  padding-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: gold;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "flex-end")};
  padding: 10px;
  padding-top: 0px;
  // background-color: red;
`;

export const CreateButton = styled.button`
  display: flex;

  background-color: transparent;
  width: 40px;
  height: 40px;
  border: none;
  color: white;
  background-image: url(${createIcon});
  background-size: cover;

  :hover {
    cursor: pointer;
    transform: scale(1.3);
    transform-origin: center;
    transition: 0.2s;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: red;
  width: 100%;
  min-height: 150px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const BackButton = styled.button`
  border: none;
  color: white;
  background-color: transparent;
  //text-decoration: underline;
  font-size: 8px;
  border: 1px solid white;
  padding: 2px;
  padding-left: 3px;
  padding-right: 3px;
  :hover {
    cursor: pointer;
  }
`;

export const AddButton = styled.button`
  margin: 5px;
  margin-top: 0px;
  font-family: "Roboto";
  width: fit-content;
  height: 17px;
  background-color: ${(props) =>
    props.disabled === "disabled" ? "grey" : "black"};
  padding: 2px 4px 2px 4px;
  box-shadow: 1px 1px gray;
  font-size: 8px;
  opacity: ${(props) => (props.disabled === "disabled" ? "0.5" : "1")};
  border: ${(props) =>
    props.disabled === "disabled"
      ? "1px solid white"
      : "2px solid gold"}; //2px solid gold;
  color: ${(props) => (props.disabled === "disabled" ? "white" : "gold")};
  :hover {
    cursor: ${(props) =>
      props.disabled === "disabled" ? "not-allowed" : "pointer"};
  }
`;
