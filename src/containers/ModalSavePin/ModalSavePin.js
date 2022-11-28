import { useEffect } from "react";
import { Modal } from "../../components/Modal/Modal";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "../../components/Button/Button";
import { useAppContext } from "../../store/AppContext";
import { closeModalsAction } from "../../store/actions";
import { fetchFoldersAction } from "../../store/actions";

export const ModalSavePin = ({ open }) => {
    const { state, dispatch } = useAppContext();
    const handleClose = () => {
        dispatch(closeModalsAction())
    }

    useEffect(() => {
        fetchFoldersAction(dispatch)
    }, [])

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
                {state.folders.map((folder, folderIndex) => (
                    < ListGroup.Item key={folderIndex}>
                        <Row>
                            <Col xs={8}>{folder.name}</Col>
                            <Col xs={4} className='text-end'><Button label='Salvar' loadinLabel='Salvando' /></Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Modal >
    )
}