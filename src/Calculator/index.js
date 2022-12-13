import React, { useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import usePrevious from "../hooks/usePrevious";
import { OPERATOR, operatorMapping } from "./logic";
import { ActionButton } from "../style";
import "./index.css";

const { Title } = Typography;

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [curNumber, setCurNumber] = useState(0);
  const [curAction, setCurAction] = useState("");
  const [toggleAction, setToggleAction] = useState("");
  const [isDecimalMode, setIsDecimalMode] = useState(false);
  const prevNumber = usePrevious(curNumber);

  const onClearClick = () => {
    setCurNumber(0);
    setDisplayValue(0);
    setCurAction("");
    setToggleAction("");
  };

  const onNumberClick = (number) => {
    if (curAction !== "") {
      setCurNumber(number);
      setDisplayValue(number);
      return;
    }
    if (isDecimalMode) {
      const newNumber = Number(curNumber + "." + number);
      setCurNumber(newNumber);
      setDisplayValue(newNumber);
      setIsDecimalMode(false);
      return;
    }
    const newNumber = Number(curNumber + "" + number);
    setCurNumber(newNumber);
    setDisplayValue(newNumber);
    setToggleAction("");
  };

  const onOperatorClick = (action) => {
    setCurNumber(displayValue);
    setCurAction(action);
    setToggleAction(action);
  };

  const onDelClick = () => {
    const newNumber = Math.trunc(curNumber / 10);
    setCurNumber(newNumber);
    setDisplayValue(newNumber);
  };

  const onCalculate = () => {
    if (curAction === "") {
      return;
    }
    const operator = operatorMapping[curAction];
    const displayValue = eval(`${prevNumber} ${operator} ${curNumber}`);
    setDisplayValue(displayValue);
    setCurAction("");
    setToggleAction("");
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
          <Button className="item" onClick={() => setIsDecimalMode(true)}>
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
