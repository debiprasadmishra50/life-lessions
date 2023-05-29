import React, { useEffect, useState } from "react";
import data from "./resources/quotes.json";
import Main from "./components/Main";
import Mine from "./components/Mine";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function App() {
  const [main, setMain] = useState<any>();
  const [mine, setMine] = useState<any>();

  useEffect(() => {
    setMain(data.main);
    setMine(data.mine);
  }, []);

  return (
    // <Container fluid className="cover">
    //   <h1 className="heading">Life Lessons</h1>
    //   <Row>
    //     <Col>
    //       <section id="main" style={{ maxHeight: "100vh", overflowY: "scroll" }}>
    //         <Main main={main} />
    //       </section>
    //     </Col>
    //     <Col className="d-md-block">
    //       <section id="mine" style={{ maxHeight: "100vh", overflowY: "scroll" }}>
    //         <Mine mine={mine} />
    //       </section>
    //     </Col>
    //   </Row>
    // </Container>
    <Container fluid className="cover">
      <h1 className="heading">Life Lessons</h1>
      <Row>
        <Col xs={12} md={6}>
          <section id="main" style={{ maxHeight: "100vh", overflowY: "scroll" }}>
            <Main main={main} />
          </section>
        </Col>
        <Col xs={12} md={6}>
          <section id="mine" style={{ maxHeight: "100vh", overflowY: "scroll" }}>
            <Mine mine={mine} />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
