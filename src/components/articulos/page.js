import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';

const Page = () => (
    <div id="page-wrap">
        <Container>
            <Row className="show-grid" float="center">
                <Col xs={{ size: 12 }} sm={{ size: 12, offset: 0 }}>
                    <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>

)

export default Page