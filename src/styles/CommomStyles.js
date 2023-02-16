import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: auto;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  /*justify-content: center;
  align-items: center;*/
`;

export const StyledMessage = styled.p`
  text-align: end;
  padding-right: 10px;
  margin: ${(props) => `${props.margin}px`};
  padding-left: ${(props) => `${props.paddingLeft}px`};
  padding-top: ${(props) => `${props.paddingTop}px`};
  font-size: 10px;
  font-weight: ${(props) => `${props.fontWeight}`};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.cursor ? "pointer" : "unset")};
  text-decoration: ${(props) => (props.underline ? "underline white" : "none")};
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => `${props.fontWeight}`};
  cursor: pointer;
`;
