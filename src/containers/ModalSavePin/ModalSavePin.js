import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "../../components/Button/Button";
import { useAppContext } from "../../store/AppContext";
import { closeModalsAction } from "../../store/actions";
import {
    fetchFoldersAction,
    openModalCreateFolder,
    savePinInFolderAction
} from "../../store/actions";

export const ModalSavePin = ({ open }) => {
    const { state, dispatch } = useAppContext();
    const [itensLoading, setItensLoading] = useState({});
    const handleClose = () => {
        dispatch(closeModalsAction())
    }

    const handleClickCreateFolder = () => {
        console.log('Clicou')
        dispatch(openModalCreateFolder())
    }

    const handleClick = async (folderId) => {
        setItensLoading((prevState) => {
            return {
                ...prevState,
                [folderId]: true
            }
        })

        await savePinInFolderAction(dispatch, state.activePinId, folderId);

        setItensLoading((prevState) => {
            return {
                ...prevState,
                [folderId]: false
            }
        })
    }

    const foldersNormalized = state.folders.map(folder => {
        return ({
            ...folder,
            saved: folder.pins.includes(state.activePinId)
        })
    })

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
                    onClick: handleClickCreateFolder,
                }
            ]}>
            <ListGroup variant="flush">
                {state.folders.map((folder, folderIndex) => (
                    < ListGroup.Item key={folderIndex}>
                        <Row>
                            <Col xs={8}>{folder.name}</Col>
                            <Col xs={4} className='text-end'>
                                <Button
                                    label={folder.saved ? 'Salvo' : 'Salvar'}
                                    loadinLabel='Salvando'
                                    onClick={() => handleClick(folder.id)}
                                    variant={folder.saved ? 'secondary' : 'primary'}
                                    disabled={folder.saved}
                                    loading={itensLoading[folder.id]}
                                />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Modal >
    )
}