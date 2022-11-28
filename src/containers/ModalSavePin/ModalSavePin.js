import { Modal } from "../../components/Modal/Modal";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "../../components/Button/Button";
import { useAppContext } from "../../store/AppContext";
import { closeModalsAction } from "../../store/actions";

export const ModalSavePin = ({ open }) => {
    const { dispatch } = useAppContext();
    const handleClose = () => {
        dispatch(closeModalsAction())
    }
    return (
        <Modal
            title='Salvar pin'
            open={open}
            onHide={handleClose}
            controls={[
                {
                    label: 'Criar pasta',
                    variant: 'sencondary',
                    loading: false,
                    loadingLabel: 'Criando',
                    onClick: () => {
                        console.log('Clicou')
                    }
                }
            ]}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col xs={8}>teste</Col>
                        <Col xs={4} className='text-end'><Button label='Salvar' loadinLabel='Salvando' /></Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Modal>
    )
}