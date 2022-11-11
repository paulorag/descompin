import { Card } from "../../components/Card/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/ModalCreateFolder/ModalCreateFolder";

export const HomePage = () => {
    return (
        <div>
            <ModalCreateFolder open={true} />
            <Container fluid>
                <Row>
                    <Col xs={12} md={2}><Card title="Matematica" imagem="https://picsum.photos/200/300?53" total={0} /></Col>
                    <Col xs={12} md={2}><Card title="Trigonometria" imagem="https://picsum.photos/200/300?13" total={0} /></Col>
                </Row>
            </Container>
        </div>
    )
}