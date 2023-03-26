import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Home extends Component{
    render(){
        return(
            <Container>
            <Row className="row-cols-3">
            <Col className="mt-3">
            <Card  >
            <Card.Body>
                                    <Card.Title className='text-primary'>Metodo Render</Card.Title>
                                    <Card.Text>Todo componente de React, tiene un metodo Render que es el que se encarga de renderizar en el navegador el HTML
                                        correspondiente al componente. Este metodo se llama automaticamente cuando se crea un componente y cuando el estado del 
                                        componente se actualiza (veremos esto mas adelante).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col className="mt-3">
                            <Card  >
            <Card.Body>
                                    <Card.Title className='text-primary'>Metodo StrictMode</Card.Title>
                                    <Card.Text>StrictMode es una herramienta para destacar problemas potenciales en la aplicacion. Al igual que Fragment,
                                        StrictMode no renderiza nada en la interfaz de usuario. Este modo tambien Activa advertencias y comprobaciones adicionales
                                        para sus descendientes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col className="mt-3">
                            <Card  >
            <Card.Body>
                                    <Card.Title className='text-primary'>Metodo Return</Card.Title>
                                    <Card.Text>Este metodo es obligatorio en cualquier componente, pues como su nombre lo dice, se utiliza para obtener los elementos
                                        finales a visualizar o pintar en el navegador. Debe ser una funcion pura, es decir, no debe modificar las props, no debe modificar
                                        el state ni realizar operaciones del DOM.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col className="mt-3">
                            <Card  >
            <Card.Body>
                                    <Card.Title className='text-primary'>Link a proyecto Git</Card.Title>
                                    <Card.Text>
                                    <Button variant="primary" href='https://github.com/miguelmoranv/jueves_9_moran'>Proyecto</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                            </Row>
                            <Col></Col>
                            </Container>
        );
    }
}

export default Home;