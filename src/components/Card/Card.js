import CardBS from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Card = () => {
    return (
        <CardBS>
            <CardBS.Img src="https://picsum.photos/200/300?53" alt="CardBS image" />
            <CardBS.ImgOverlay>
                <Button variant="primary">
                    Profile <Badge bg="secondary">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </CardBS.ImgOverlay>
            <CardBS.Body>
            <CardBS.Title>Trigonometria</CardBS.Title>
            </CardBS.Body>
        </CardBS>
    );
}