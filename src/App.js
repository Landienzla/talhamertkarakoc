import "./App.css";
import { Container,Row,Col } from "react-bootstrap";

import Navbar from "./components/_navbar";
import Introduction from "./components/introduction";
import Stats from './components/stats'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row className="mt-5">
          <Col xs={7}><Introduction/></Col>
          <Col xs={5}><Stats/></Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
