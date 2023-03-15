import styled, { css, keyframes } from "styled-components";
import createIcon from "../../images/createIcon.png";
import pig from "../../images/pig.png";
import babyPig from "../../images/formPig.png";

const scaleUpRight = keyframes`
 0% {
    
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
  100% {
    min-width: 50%;
    //min-height: 500px ;
    z-index: 100;
    
    
    -webkit-transform: scale(2);
            transform: scale(2);
            
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
    
    
  }
  
  
`;

const scaleDownRight = keyframes`

0% {
  min-width: 50%;
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
    min-width: 50%;
    z-index: 100;
   
    -webkit-transform: scale(2);
            transform: scale(2);
  }
`;

const scaleDownCenter = keyframes`
    0% {
      min-width: 50%;
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
   min-width: 50%;
    
     //   width: 1000px;
    z-index: 100;
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
}


`;

const scaleDownLeft = keyframes`
0% {
  min-width: 50%;
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

const scaleUpTop = keyframes`
  

   0% {
    
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    
    height: 500px ;
    
    //max-height: 70vh;
    width: 100% ;
   
    
    z-index: 200;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }

`;

const scaleDownTop = keyframes`
0% { 
  height: 500px ;
    width: 100% ;
    
   
        z-index: 200;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  `;

const scaleUpTopLeft = keyframes`
0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
  100% {
    
    width: 50% ;
    height: 50% ;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }

`;

const scaleDownTopLeft = keyframes`

0% {
  width: 50% ;
    height: 50% ;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }

`;

export const UserContentWrapper = styled.div`
  width: 100%;
  min-height: 100%;
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
  width: 70%;
  min-height: 300px;
  max-height: 90%;
  margin: auto;
  padding: 5px;
`;

export const LongGoalExample = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${pig});
  background-size: cover;
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
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
`;

export const MediumGoalExample = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${babyPig});
  background-size: cover;
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
    cursor: pointer;
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
    cursor: pointer;
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

export const GoalsInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 35px;
  margin: auto;
  width: 70%;
  height: 25%;
  border: 1px solid white;
`;

export const AchievementDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gold;
  border-radius: 10px;
  width: 15%;
  height: 35%;
  box-shadow: 2px 2px 20px 1px gold;
  background-color: black;

  -webkit-animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpTopLeft} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownTopLeft} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpTopLeft} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownTopLeft} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }
`;

export const AchievementTitle = styled.h1`
  color: gold;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 25px;
`;

export const GoalsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border-bottom: 2px solid white;
  border-radius: 10px;
  width: 20%;
  height: 35%;
  border: none;

  -webkit-animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpTop} 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownTop} 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpTop} 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownTop} 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  //box-shadow: 2px 2px 20px 2px white;
  // -webkit-animation: ${scaleUpTop} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  // animation: ${scaleUpTop} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  background-color: black;
  :hover {
    cursor: pointer;

    transition: 0.4s ease-in-out;
    box-shadow: 2px 2px 20px 2px white;
  }
`;

export const GoalListTitle = styled.h1`
  color: white;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 25px;

  :hover {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }
`;

export const AllocatedMoneyDiv = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  // border: 1px solid white;
  border-radius: 10px;
  width: fit-content;
  height: 35%;
  //border: none;
  //box-shadow: 2px 2px 20px 2px white;
  :hover {
    cursor: pointer;

    transition: 0.4s ease-in-out;
    box-shadow: 0px 2px 10px 2px #51d289;
  }
`;
export const AllocatedMoneyTitle = styled.h1`
  display: flex;
  flex-direction: column;
  color: #51d289;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 16px;
  margin-right: 15px;
  //background-color: red;
`;

export const SpanMoneyTitle = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 3px;
`;

export const GoalListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  //border: 1px solid red;
  max-width: 85%;
  min-width: 85%;
  min-height: 300px;
  max-height: 30%;
  overflow-y: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;

export const GoalsExpandedDiv = styled.div`
  display: flex;
  padding: 5px;
  padding-top: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  min-height: 400px;
  :hover {
    cursor: auto;
  }
`;
