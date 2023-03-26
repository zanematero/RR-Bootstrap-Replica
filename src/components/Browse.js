import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Browse() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Browse stores near you:</h1>
            <Container style={{textAlign: 'center', marginTop: '5vh'}}>
                <Row>
                    <Col>
                    <h3>Aldi</h3>
                    <p>Delivery - Pickup</p>
                    </Col>
                    <Col>
                    <h3>Sprouts Farmers Market</h3>
                    <p>Delivery - Pickup</p>
                    </Col>
                    <Col>
                    <h3>Kroger</h3>
                    <p>Delivery</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>H-E-B</h3>
                    <p>Delivery</p>
                    </Col>
                    <Col>
                    <h3>Sam's Club</h3>
                    <p>Delivery</p>
                    </Col>
                    <Col>
                    <h3>Costco</h3>
                    <p>Delivery</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}