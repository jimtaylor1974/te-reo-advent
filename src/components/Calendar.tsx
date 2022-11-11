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
  const theDay = today.getDate();

  const openDay = (day: number) => {
    if (day <= theDay) {
      navigate(`/day/${day}`);
    }
  };

  const getDayStyle = (day: number): React.CSSProperties => {
    return day <= theDay
      ? {
          width: "18rem",
          cursor: "pointer",
        }
      : {
          width: "18rem",
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
