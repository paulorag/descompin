import { Card } from "../../components/Card/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const HomePage = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={2}><Card /></Col>
                <Col xs={12} md={2}><Card /></Col>
                <Col xs={12} md={2}><Card /></Col>
                <Col xs={12} md={2}><Card /></Col>
            </Row>
        </Container>
    )
}