import React from 'react'; 
import "./styles.css";
import { Container, Row, Col } from 'reactstrap';

const Page = ({handleLogout}) => (
    
        <div id="app-logout" className="pull-right">
            <Container>
                <Row className="show-grid" float="right">
                    <Col xs={{ size: 12 }} sm={{ size: 2, offset: 10 }}>
                        <p>Estado de session Verdadero</p>
                        <button onClick={handleLogout}>
                        Cerrar sesion
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
)

export default Page