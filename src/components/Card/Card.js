import CardBS from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Card = ({ imagem, title, total }) => {
    return (
        <CardBS>
            <CardBS.Img src={imagem} alt="CardBS image" />
            <CardBS.ImgOverlay>
                <Button variant="primary">
                    Salvar <Badge bg="secondary">{total}</Badge>
                </Button>
            </CardBS.ImgOverlay>
            <CardBS.Body>
                <CardBS.Title>{title}</CardBS.Title>
            </CardBS.Body>
        </CardBS>
    );
}