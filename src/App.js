import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import { Outlet } from "react-router-dom";

import './styles.css';

import MainImage from './mainImage/mainImage';
import NavBar from './navBar/navBar';

export default function App() {
  return (
    <div >
    <Container >

        <Col xs={12} sm={12} md={12} lg={{ span: 8, offset: 2 }} id="div1">
        <NavBar />  
        </Col>

        <Row>

        <Col xs={12} sm={12} md={5} lg={{ span: 3, offset: 1}} id="div2">
        <MainImage />
        </Col>

        <Col xs={12} sm={12} md={7} lg={{ span: 7}} id="div3">
        <Outlet />
        </Col>

        </Row>

      </Container>
    </div>
  );
}