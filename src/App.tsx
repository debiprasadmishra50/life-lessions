import React, { useEffect, useState } from "react";
import data from "./resources/quotes.json";
import Main from "./components/Main";
import Mine from "./components/Mine";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import background from "./resources/background.jpg";

function App() {
  const [main, setMain] = useState<any>();
  const [mine, setMine] = useState<any>();

  useEffect(() => {
    setMain(data.main);
    setMine(data.mine);
  }, []);

  return (
    <Container fluid className="cover">
      <h1 style={{ textAlign: "center", textDecoration: "underline", color: "#000" }}>Life Lessons</h1>
      <Row>
        <Col>
          <section id="main" style={{ maxHeight: "100vh", overflowY: "scroll" }}>
            <Main main={main} />
          </section>
        </Col>
        <Col>
          <section id="mine" style={{ maxHeight: "100vh", overflowY: "scroll" }}>
            <Mine mine={mine} />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
