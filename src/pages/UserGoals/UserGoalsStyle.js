import styled, { css, keyframes } from "styled-components";
import createIcon from "../../images/createIcon.png";
import pig from "../../images/pig.png";
import babyPig from "../../images/formPig.png";
import expandIcon from "../../images/expandIcon.png";
import formBg from "../../images/formBg.svg";
import shortTerm from "../../images/shortTermBg.svg";
import mediumTerm from "../../images/mediumTermBg.svg";

const scaleUpRight = keyframes`
 0% {
    background-image: url(${formBg});
    background-color: black ;
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
  100% {
    min-width: 50%;
    //min-height: 500px ;
    z-index: 100;
    background-image: url(${formBg});
    background-color: black ;
    
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
            background-image: url(${formBg});
    background-color: black ;
  }
  100% {
    min-width: 50%;
    z-index: 100;
    background-image: url(${formBg});
    background-color: black ;
   
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
            background-image: url(${formBg});
    background-color: black ;
  }
  100% {
   min-width: 50%;
   max-width:50%;
   background-image: url(${formBg});
    background-color: black ;
   
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
    min-width: 200px;
    min-height: 50px;
   
    z-index: 200;
    
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    min-width: 66%;
   
    min-height: 386px;
    

    
    
    z-index: 200;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    
  }



`;

const scaleDownTop = keyframes`
0% { 
  min-width: 100%;
    min-height: 500px;
    
   
        z-index: 200;
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    max-width: 200px;
    max-height: 50px;
    
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  `;

const scaleUpTopInside = keyframes`
  

0% {
 min-width: 200px;
 min-height: 50px;
  
 z-index: 200;
 
 -webkit-transform: scale(1);
         transform: scale(1);
 -webkit-transform-origin: 50% 0%;
         transform-origin: 50% 0%;
}
100% {
 min-width: 66%;

 min-height: 386px;
 

 
 
 z-index: 200;
 -webkit-transform: scale(1);
 transform: scale(1);
 
 -webkit-transform-origin: 50% 0%;
         transform-origin: 50% 0%;
 
}



`;
const scaleDownTopInside = keyframes`
0% { 
  min-width: 100%;
    min-height: 500px;
    
   
        z-index: 200;
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    max-width: 200px;
    max-height: 50px;
    
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  `;

const scaleUpMediaAchiev = keyframes`
0% {

    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
  100% {
    max-width: 45%;
    min-width: 45%;
    min-height: 120px;
    max-height: 120px;
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }

`;

const scaleDownMediaAchiev = keyframes`
 0% {
    -webkit-transform: scale(2);
            transform: scale(2);
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

const scaleUpMediaShortForm = keyframes`
0% {

-webkit-transform: scale(1);
        transform: scale(1);
-webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
}
100% {
  z-index: 250;
max-width: 50%;
min-width: 50%;
min-height: fit-content;
max-height: 50vh;
-webkit-transform: scale(2);
        transform: scale(2);
-webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
}
`;
const scaleDownMediaShortForm = keyframes`
  0% {
    z-index: 250;
max-width: 50%;
min-width: 50%;
min-height: fit-content;
max-height: 50vh;
    -webkit-transform: scale(2);
            transform: scale(2);
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

const scaleUpMediaMediumForm = keyframes`

0% {
    -webkit-transform: scale(1);
            transform:  scale(1);
            
  }
  100% {
    z-index: 250;
max-width: 50%;
min-width: 50%;
min-height: fit-content;
max-height: 50vh;
    -webkit-transform: scale(2);
            transform: scale(2);
  }

`;
const scaleDownMediaMediumForm = keyframes`
  0% {
    z-index: 250;
max-width: 50%;
min-width: 50%;
min-height: fit-content;
max-height: 50vh;
    -webkit-transform: scale(2);
            transform: scale(2);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }


`;

const scaleUpMediaLongForm = keyframes`
0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 50%;
           transform-origin: 50% 50%;
  }
  100% {
    z-index: 250;
max-width: 50%;
min-width: 50%;
min-height: fit-content;
max-height: 50vh;
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-transform-origin: 50% 100%;
          transform-origin: 50% 100%;
  }
`;

const scaleDownMediaLongForm = keyframes`

0% {
  z-index: 250;
max-width: 50%;
min-width: 50%;
min-height: fit-content;
max-height: 50vh;
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }

`;

export const GoalsExpandedDiv = styled.div`
  display: flex;
  padding: 5px;
  padding-top: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border-radius: 10px;
  min-height: 0%;
  min-height: 0%;
  width: 100%;
  height: 95%;
  z-index: 100; //min-height: 400px;
  //border: 1px solid red;
  :hover {
    cursor: auto;
  }
  -webkit-animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpTopInside} 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownTopInside} 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpTopInside} 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownTopInside} 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};
  @media (max-width: 800px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const GoalsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  min-width: ${(props) => (props.open === true ? "" : "200px")};
  max-width: ${(props) => (props.open === true ? "" : "200px")};
  min-height: ${(props) => (props.open === true ? "" : "50px")};
  max-height: ${(props) => (props.open === true ? "" : "50px")};

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
  transition: 0.4s ease-in-out;
  background-color: black;
  :hover {
    transition: 0.4s ease-in-out;
    box-shadow: 2px 2px 20px 2px white;
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
    //margin: auto;
    min-width: 47% ;
    max-width: 47%;
    min-height: 42px;
    max-height: 42px;
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
  }
 

`;

const scaleDownTopLeft = keyframes`

0% {
  min-width: 47% ;
    max-width: 47%;
    min-height: 42px;
    max-height: 42px;
    -webkit-transform: scale(2);
            transform: scale(2);
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

const TextFocus = keyframes`
0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }

`;

const TrackingInContract = keyframes`
0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
`;

//WRAPPER
export const UserContentWrapper = styled.div`
  max-width: 100%;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;

export const UserGoalsDiv = styled.div`
  padding-top: 6vh;
  min-height: 94vh;
  max-height: 94vh;
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
//MEIO
export const UserGoalsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //border: 1px solid gold;
  max-width: 70%;
  width: 70%;
  min-height: 45%;
  //background-color: blue;
  max-height: 45%;
  margin: auto;
  padding: 5px;
  @media (max-width: 1500px) {
    max-width: 90%;
    min-width: 90%;
  }
  @media (max-width: 800px) {
    min-width: 100%;
    max-width: 100%;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    min-height: fit-content;
    max-height: fit-content;
  }
`;

export const LongGoalExample = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${pig});
  background-size: cover;
  justify-content: space-between;
  border-radius: 10px;
  max-width: 100%;
  width: 300px;
  min-width: 250px;
  min-height: 280px;
  font-family: "Roboto";
  box-shadow: 2px 2px 20px 1px white;
  transition: 0.2s ease-in-out;
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

  @media (max-width: 1200px) {
    min-width: 200px;
    margin-right: 10px;
    margin-left: 10px;
    min-height: 230px;
    max-height: 230px;
  }
  @media (max-width: 800px) {
    min-width: 130px;
    margin-right: 10px;
    margin-left: 10px;
  }
  @media (max-width: 576px) {
    min-width: 300px;
    min-height: 250px;
    max-height: 250px;
    margin: 5px;

    -webkit-animation: none;
    animation: none;
  }
`;

export const MediumGoalExample = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${mediumTerm});
  background-size: cover;
  border-radius: 10px;
  max-width: 100%;
  width: 300px;
  min-width: 250px;
  height: 280px;

  //border: 1px solid gold;
  font-family: "Roboto";
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
  transition: 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
  @media (max-width: 1200px) {
    min-width: 200px;
    margin-right: 10px;
    margin-left: 10px;
    min-height: 230px;
    max-height: 230px;
  }
  @media (max-width: 800px) {
    min-width: 130px;
    margin-right: 10px;
    margin-left: 10px;
  }
  @media (max-width: 576px) {
    min-width: 300px;
    min-height: 250px;
    max-height: 250px;
    margin: 5px;

    -webkit-animation: none;
    animation: none;
  }
`;
export const ShortGoalExample = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  max-width: 100%;
  width: 300px;
  min-width: 250px;
  height: 280px;

  background-image: url(${shortTerm});
  background-size: cover;
  font-family: "Roboto";
  box-shadow: 2px 2px 20px 1px white;
  transition: 0.2s ease-in-out;
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
  @media (max-width: 1200px) {
    min-width: 200px;
    margin-right: 10px;
    margin-left: 10px;
    min-height: 230px;
    max-height: 230px;
  }
  @media (max-width: 800px) {
    min-width: 130px;
    margin-right: 10px;
    margin-left: 10px;
  }
  @media (max-width: 576px) {
    min-width: 300px;
    min-height: 250px;
    max-height: 250px;
    margin: 5px;

    -webkit-animation: none;
    animation: none;
  }
`;

export const GoalExampleTitle = styled.h1`
  padding-top: 8px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  color: #51d289;
  font-family: "Roboto";
  height: fit-content;
  text-shadow: 1px 1px black;
  //background-color: red;

  @media (max-width: 450px) {
    font-size: ${(props) => (props.fontSize ? "12px" : "")};
  }
  //border: red 1px solid;
`;
export const GoalExampleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 80%;
  // border: 1px solid blue;
`;

export const GoalExampleDescription = styled.p`
  padding-top: 8px;
  font-size: 12px;
  font-weight: 600;
  text-shadow: 1px 1px black;
  color: gold;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "flex-end")};
  //padding: 10px;
  padding-top: 0px;
  //background-color: red;
`;
export const ButtonContainer = styled.div`
  display: flex;
  min-width: 33%;
  max-width: 33%;
  //padding-top: 0px;
  justify-content: ${(props) => props.justify};
  //border: 1px solid green;
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
  transition: 0.2s;
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
  margin: 5px;
  margin-top: 0px;
  font-family: "Roboto";
  width: fit-content;
  height: 17px;

  padding: 2px 4px 2px 4px;

  font-size: 8px;
  margin-right: 30px;

  border: none;
  color: white;
  background-color: black;
  //text-decoration: underline;
  font-size: 8px;
  border: 1px solid white;

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
//TOPO
export const GoalsInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 30px;
  margin: auto;
  width: 70%;
  min-height: 10%;
  max-height: fit-content;

  //border: 1px solid pink;
  //background-color: red;
  @media (max-width: 1500px) {
    max-width: 90%;
    min-width: 90%;
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
  }
  @media (max-width: 800px) {
    padding: 20px;
    min-height: fit-content;
    max-height: fit-content;
  }
`;

export const AchievementDiv = styled.div`
  display: ${(props) => (props.listIsOpen ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  border: 1px solid gold;
  border-radius: 10px;

  height: 35%;
  min-width: 200px;
  max-width: 200px;
  padding: 10px;
  box-shadow: 2px 2px 20px 1px gold;
  background-color: black;
  z-index: 50;

  -webkit-animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpTopLeft} 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownTopLeft} 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};

  animation: ${(props) =>
    props.open === true
      ? css`
          ${scaleUpTopLeft} 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
        `
      : props.animations === false
      ? "none"
      : css`
          ${scaleDownTopLeft} 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        `};
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }
  @media (max-width: 400px) {
    max-width: fit-content;
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (max-width: 800px) {
    align-items: flex-start;
    margin-bottom: 15px;
    -webkit-animation: ${(props) =>
      props.open === true
        ? css`
            ${scaleUpMediaAchiev} 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
          `
        : props.animations === false
        ? "none"
        : css`
            ${scaleDownMediaAchiev} 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
          `};

    animation: ${(props) =>
      props.open === true
        ? css`
            ${scaleUpMediaAchiev} 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
          `
        : props.animations === false
        ? "none"
        : css`
            ${scaleDownMediaAchiev} 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
          `};
  }
`;
export const SpinnerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AchievementTitle = styled.h1`
  color: gold;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 20px;
`;

export const ExpandButton = styled.button`
  margin-left: 20px;
  align-self: center;
  justify-self: flex-end;
  width: 20px;
  height: 20px;
  background-color: transparent;
  background-image: url(${expandIcon});
  background-size: cover;
  border: none;
  transition: 0.4s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: 0.4s ease-in-out;
  }
`;

export const GoalListTitle = styled.h1`
  color: white;
  font-family: "Roboto";
  font-weight: 600;
  font-size: 20px;
`;

export const AllocatedMoneyDiv = styled.div`
  display: ${(props) => (props.listIsOpen ? "none" : "flex")};

  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  border-radius: 10px;
  min-width: 200px;
  max-width: 200px;
  min-height: 50px;
  max-height: 50px;
  //border: none;
  //box-shadow: 2px 2px 20px 2px white;
  transition: 0.4s ease-in-out;
  :hover {
    //cursor: pointer;

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
  font-size: 12px;
  margin-right: 15px;
  //background-color: red;
`;

export const SpanMoneyTitle = styled.span`
  color: white;
  font-size: 12px;
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
  min-height: 80%;
  max-height: 80%;
  margin-bottom: 5px;
  overflow-y: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
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
  @media (max-width: 800px) {
    padding-right: 2px;
    padding-left: 2px;
    min-width: 100%;
    max-width: 100%;
    max-height: 300px;
    min-height: 300px;
  }
`;

export const AchievementsExpandedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  height: 90%;
  color: gold;
`;

export const AchievementWarning = styled.h1`
  color: gold;
  font-size: 10px;

  -webkit-animation: ${TextFocus} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: ${TextFocus} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;

export const ExpandedTitle = styled.h1`
  font-size: 7px;
  color: gold;
  padding-bottom: 1px;

  -webkit-animation: ${TextFocus} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: ${TextFocus} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @media (max-width: 800px) {
    font-size: 7px;
    padding-top: 2px;
    padding-bottom: 5px;
  }
`;

export const FirstTextContent = styled.p`
  color: white;
  font-size: 6px;
  -webkit-animation: ${TextFocus} 1.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: ${TextFocus} 1.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @media (max-width: 800px) {
    font-size: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
`;
export const SecondTextContent = styled.p`
  color: white;
  font-size: 6px;
  -webkit-animation: ${TextFocus} 2.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: ${TextFocus} 2.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @media (max-width: 800px) {
    font-size: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
`;
export const ThirdTextContent = styled.p`
  color: white;
  font-size: 6px;
  -webkit-animation: ${TextFocus} 3.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: ${TextFocus} 3.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @media (max-width: 800px) {
    font-size: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
`;

export const SpanText = styled.span`
  color: #51d289;
  font-size: 6px;
  font-weight: 600;
`;
//BAIXO
export const AdvicesContainer = styled.div`
  //background-color: black;
  //opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  //border: 1px solid white;
  min-width: 70%;
  max-width: 70%;
  min-height: 40%;

  @media (max-width: 1500px) {
    max-width: 90%;
    min-width: 90%;
    padding-bottom: 10px;
  }
  @media (max-width: 800px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const AdvicesContent = styled.div`
  display: flex;
  box-shadow: 2px 2px 20px 1px white;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #252525;
  border-radius: 10px;
  //border: 1px solid gold;
  max-width: 90%;
  max-height: 40%;
  margin-top: 30px;
  overflow-y: auto;

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

export const AdvicesTitle = styled.div`
  margin-right: auto;
  margin-left: auto;

  max-width: 90%;
  min-width: 90%;
  text-align: start;
  font-size: 22px;
  color: #51d289;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const StyledParagraph = styled.p`
  margin: 5px;
  text-indent: 20px;
  margin-right: auto;
  margin-left: auto;
  max-width: 90%;
  min-width: 90%;
  text-align: justify;
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
