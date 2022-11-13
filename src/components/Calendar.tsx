import React from "react";
import { useNavigate } from "react-router-dom";
import nth from "../lib/nth";
import { Card, Row } from "react-bootstrap";
import { pages } from "../pages";
import Wrapper from "./Wrapper";
import Title from "./Title";

const Calendar = ({}) => {
  const navigate = useNavigate();
  const today = new Date();
  const month = today.getMonth();
  const theDay = today.getDate();

  // NOTE: Month 11 = December, JavaScript month starts at 0
  const testMode = localStorage.getItem(`advent_test`) == "1" || month != 11;

  const canOpen = (day: number) => {
    return testMode || day <= theDay;
  };

  const openDay = (day: number) => {
    if (canOpen(day)) {
      localStorage.setItem(`advent${day}`, String(day));
      navigate(`/day/${day}`);
    }
  };

  const getDayStyle = (day: number): React.CSSProperties => {
    const hasOpened = localStorage.getItem(`advent${day}`) == String(day);

    return canOpen(day)
      ? {
          width: "18rem",
          cursor: "pointer",
          backgroundColor: hasOpened ? "white" : "lightgreen",
        }
      : {
          width: "18rem",
          backgroundColor: "lightgrey",
        };
  };

  return (
    <Wrapper color={"red"}>
      <Title>kirihimete - Christmas</Title>
      <Row>
        {pages.map((page) => (
          <Card
            key={page.day}
            style={getDayStyle(page.day)}
            className="m-2"
            onClick={() => openDay(page.day)}
          >
            <Card.Body>
              <Card.Text style={{ color: "black", fontWeight: "bold" }}>
                {page.day}
                <sup>{nth(page.day)}</sup>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Wrapper>
  );
};

export default Calendar;
