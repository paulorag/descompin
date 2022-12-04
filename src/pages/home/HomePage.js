import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card"
import { CardContainer } from "../../containers/Card/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/ModalCreateFolder/ModalCreateFolder";
import { Notification } from "../../components/Notification/Notification";
import { useAppContext } from "../../store/AppContext";
import { saveFolderSuccessType } from "../../store/types";

export const HomePage = () => {
    const { state, dispatch } = useAppContext();
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        if (state.type === saveFolderSuccessType) {
            setShowFeedback(true);
        }
    }, [state.type])

    return (
        <div>
            <ModalSavePin open={state.mode === 'savePin'} />
            <ModalCreateFolder open={state.mode === 'createFolder'} />
            {showFeedback && (
                <Notification
                    message='Criado com sucesso'
                    onClose={() => setShowFeedback(false)}
                />
            )}
            <Container fluid>
                <Row>
                    <Col xs={12} md={2}><CardContainer id="123" title="Matematica" imagem="https://picsum.photos/200/300?53" total={0} /></Col>
                    <Col xs={12} md={2}><CardContainer id="124"  title="Trigonometria" imagem="https://picsum.photos/200/300?13" total={0} /></Col>
                </Row>
            </Container>
        </div>
    )
}