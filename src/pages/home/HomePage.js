import { Card } from "../../components/Card/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from "../../components/Modal/Modal";

export const HomePage = () => {
    return (
        <div>
            <Modal
                open={true}
                title="Salvar Pin"
                controls={[
                    {
                        label: 'Criar Pasta',
                        variant: 'primary',
                        onClick: () => {
                            console.log('Clicou');
                        }
                    },
                    {
                        label: 'Fechar',
                        variant: 'secondary',
                        onClick: () => {
                            console.log('Clicou em fechar!');
                        }
                    }
                ]}
            >
                <p>Olá</p>
            </Modal>
            <Container fluid>
                <Row>
                    <Col xs={12} md={2}><Card title="Matematica" imagem="https://picsum.photos/200/300?53" total={0} /></Col>
                    <Col xs={12} md={2}><Card title="Trigonometria" imagem="https://picsum.photos/200/300?13" total={0} /></Col>
                </Row>
            </Container>
        </div>
    )
}