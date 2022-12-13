import React, { useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { OPERATOR, operatorMapping } from "./logic";
import { ActionButton } from "../style";
import "./index.css";

const { Title } = Typography;

const Calculator = () => {
  const [curInput, setCurInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [curAction, setCurAction] = useState("");
  const [toggleAction, setToggleAction] = useState("");
  const [displayValue, setDisplayValue] = useState(0);

  const overThresholdNumber = (value) => {
    const threshold = 10;
    if (value.length > threshold) {
      return true;
    }

    return false;
  };

  const resetInfo = () => {
    setPrevInput("");
    setCurInput("");
    setCurAction("");
    setToggleAction("");
  };

  const onClearClick = () => {
    setDisplayValue(0);
    resetInfo();
  };

  const onNumberClick = (value) => {
    const newInput = curInput + value;
    if (overThresholdNumber(newInput)) {
      return;
    }
    setCurInput(newInput);
    setDisplayValue(newInput);
  };

  const onOperatorClick = (action) => {
    setPrevInput(curInput);
    setCurInput("");
    setCurAction(action);
    setToggleAction(action);
  };

  const onDelClick = () => {
    const newInput = String(Math.trunc(Number(curInput) / 10));
    setCurInput(newInput);
    setDisplayValue(newInput);
  };

  const onCalculate = () => {
    if (curAction === "") {
      return;
    }
    const operator = operatorMapping[curAction];
    const displayValue = eval(`${prevInput}${operator}${curInput}`);
    setDisplayValue(displayValue);
    resetInfo();
  };

  return (
    <Card
      id="calculator"
      bodyStyle={{ border: "1px solid #6B5B95" }}
      headStyle={{ backgroundColor: "#6B5B95", color: "white" }}
      title="MY CALCULATOR"
    >
      <Title strong className="calculator-display">
        {displayValue}
      </Title>
      <Row align="middle" gutter={12}>
        <Col span={12} className="calculator-col">
          <ActionButton
            className="item action-item"
            onClick={() => onClearClick()}
          >
            AC
          </ActionButton>
        </Col>
        <Col span={6} className="calculator-col">
          <ActionButton
            className="item action-item"
            onClick={() => onDelClick()}
          >
            DEL
          </ActionButton>
        </Col>
        <Col span={6} className="calculator-col">
          <ActionButton
            className="item action-item"
            toggle={toggleAction === OPERATOR.DIVISION ? "true" : "false"}
            onClick={() => {
              onOperatorClick(OPERATOR.DIVISION);
            }}
          >
            /
          </ActionButton>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(7)}>
            7
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(8)}>
            8
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(9)}>
            9
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <ActionButton
            className="item action-item"
            toggle={toggleAction === OPERATOR.MULTIPLE ? "true" : "false"}
            onClick={() => {
              onOperatorClick(OPERATOR.MULTIPLE);
            }}
          >
            x
          </ActionButton>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(4)}>
            4
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(5)}>
            5
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(6)}>
            6
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <ActionButton
            className="item action-item"
            toggle={toggleAction === OPERATOR.MINUS ? "true" : "false"}
            onClick={() => {
              onOperatorClick(OPERATOR.MINUS);
            }}
          >
            -
          </ActionButton>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(1)}>
            1
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(2)}>
            2
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(3)}>
            3
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <ActionButton
            className="item action-item"
            toggle={toggleAction === OPERATOR.PLUS ? "true" : "false"}
            onClick={() => {
              onOperatorClick(OPERATOR.PLUS);
            }}
          >
            +
          </ActionButton>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(0)}>
            0
          </Button>
        </Col>
        <Col span={6} className="calculator-col">
          <Button className="item" onClick={() => onNumberClick(".")}>
            .
          </Button>
        </Col>
        <Col span={12} className="calculator-col">
          <ActionButton
            className="item action-item"
            onClick={() => onCalculate()}
          >
            =
          </ActionButton>
        </Col>
      </Row>
    </Card>
  );
};

export default Calculator;
