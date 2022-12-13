import { Button } from "antd";
import styled from "styled-components";

const ActionButton = styled(Button)`
  color: white;
  background-color: ${(props) =>
    props.toggle === "true" ? "#6B5B95" : "#88B04B"};
  transition: none;
  &:hover {
    color: white;
    border: none;
  }
  &:hover > span {
    color: white;
    border: none;
  }
  &:focus > span {
    color: white;
    border: none;
  }
`;

export { ActionButton };
