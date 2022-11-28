import { Card } from "../../components/Card/Card"
import { CardContainer } from "../../containers/Card/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/ModalCreateFolder/ModalCreateFolder";
import { Notification } from "../../components/Notification/Notification";
import { useAppContext } from "../../store/AppContext";

export const HomePage = () => {
    const { state, dispatch } = useAppContext();
    return (
        <div>
            <ModalSavePin open={state.mode === 'savePin'} />
            <ModalCreateFolder open={false} />
            <Notification
                message='Criado com sucesso'
                onClose={() => {
                    console.log('Clicou')
                }}
            />
            <Container fluid>
                <Row>
                    <Col xs={12} md={2}><CardContainer title="Matematica" imagem="https://picsum.photos/200/300?53" total={0} /></Col>
                    <Col xs={12} md={2}><CardContainer title="Trigonometria" imagem="https://picsum.photos/200/300?13" total={0} /></Col>
                </Row>
            </Container>
        </div>
    )
}