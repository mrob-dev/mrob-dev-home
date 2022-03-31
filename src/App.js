import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import { Outlet } from "react-router-dom";

import './styles.css';

import MainImage from './mainImage/mainImage';
import NavBar from './navBar/navBar';

export default function App() {
  return (
    <div>
    <Container className="vertical-center">

        <Col xs={12} sm={12} md={12} xl={{ span: 8, offset: 1 }} id="div1">
        <NavBar />  
        </Col>

        <Row className="align-items-center">

        <Col xs={12} sm={12} md={5} xl={3} id="div2">
        <MainImage />
        </Col>

        <Col xs={12} sm={12} md={7} xl={7} id="div3">
        <Outlet />
        </Col>

        </Row>

      </Container>
    </div>
  );
}