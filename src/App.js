import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppJumboTron from './AppJumboTron';
import Box from './Box';

function App() {
  return (
    <>
      <AppJumboTron />
      <Container>
        <Row>
          <Col>
            <Box id={0} />
          </Col>
          <Col>
            <Box id={1} />
          </Col>
          <Col>
            <Box id={2} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Box id={3} />
          </Col>
          <Col>
            <Box id={4} />
          </Col>
          <Col>
            <Box id={5} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Box id={6} />
          </Col>
          <Col>
            <Box id={7} />
          </Col>
          <Col>
            <Box id={8} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
