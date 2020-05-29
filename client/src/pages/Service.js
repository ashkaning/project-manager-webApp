import React, { Component } from "react";
import API from "../utils/API";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Row, Container } from "../components/Grid";
import "./style.css";
import { Table, Button, Form, Col } from 'react-bootstrap';

class Services extends Component {
    state = {
        serviceName: '',
        serviceDescription: '',
        subId: '',
        allServices: []
    }
    componentDidMount() {
        this.getAllServices();
    }
    getAllServices = () => {
        API.getAllServices()
            .then(resAllServoces => {
                this.setState({ allServices: resAllServoces.data })
            }).catch(err => toast.error("There is an error. Please contact administrator"))
    }

    saveNewService = (event) => {
        event.preventDefault()
        API.saveNewUser({
            serviceName: this.state.serviceName,
            serviceDescription: this.state.serviceDescription,
            subId: this.state.subId
        }).then(resAllServoces => {
            toast.success("Menu added!");
        }).catch(err => toast.error("There is an error. Please contact administrator"))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    //////////////////////////////////////
    render() {
        return (
            <div className="topSpacing">
                <Container>
                    <Row>
                        <Col siz="md-12">
                            <h2 className="text-center">Add Services</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Service Name</Form.Label>
                                        <Form.Control onChange={this.handleInputChange} type="text" name="serviceName" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Sub Service of</Form.Label>

                                        {this.state.allServices.length ? (
                                            <Form.Control onChange={this.handleInputChange} as="select" name="subId">
                                                <option>Choose...</option>
                                                {this.state.allServices.map(singleService => (
                                                    <option value={singleService.id}>{singleService.id} - {singleService.serviceName} - {singleService.subId}</option>
                                                ))}
                                            </Form.Control>

                                        ) : (<h3>Loading Services...</h3>)}
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Service Description</Form.Label>
                                        <Form.Control onChange={this.handleInputChange} name="serviceDescription" as="textarea" rows="1" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Button onClick={this.saveNewService} variant="primary" type="submit">
                                            Save
                                        </Button>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Services;