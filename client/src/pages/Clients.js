import React, { Component } from "react";
import API from "../utils/API";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Row, Container } from "../components/Grid";
import "./style.css";
import { Modal, Button, Form, Col } from 'react-bootstrap';

class Clients extends Component {
    state = {
        allCustomers: []
    }
    componentDidMount() {
        this.getAllServiceCustomers()
    }
    getAllServiceCustomers = () => {
        API.getAllServiceCustomers()
            .then(resCustomer => {
                this.setState({ allCustomers: resCustomer.data })
            }).catch(err => toast.error("There is an error. Please contact administrator (Getting All Customers)"))
    }
    render() {

        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2 className="text-center"> Set up services to a client</h2>
                        <Form.Row>
                            {this.state.allCustomers.length ? (
                                <Form.Control onChange={this.handleInputChange} as="select" name="customerId">
                                    <option>Choose...</option>
                                    {this.state.allCustomers.map(singleCustomer => (
                                        <option key={singleCustomer.id} value={singleCustomer.id}>{singleCustomer.fName} - {singleCustomer.lName}</option>
                                    ))}

                                </Form.Control>
                            ) : (<h3>Loading</h3>)}
                            <br /><br />
                            <Button onClick={this.assignAllServiceToClient} variant="primary" type="submit">
                                Assign All the services to the selected client
                            </Button>
                        </Form.Row>

                    </Col>

                </Row>
            </Container>
        )
    }

}

export default Clients;