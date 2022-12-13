import { Button } from "antd";
import styled from "styled-components";

const ActionButton = styled(Button)`
  color: white;
  background-color: ${(props) =>
    props.toggle === "true" ? "#6B5B95" : "#88B04B"};
  &:hover {
    color: white;
    border: none;
  }
`;

export { ActionButton };
