import React, { Component } from "react";
import API from "../utils/API";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Row, Container } from "../components/Grid";
import "./style.css";
import { Modal, Button, Form, Col } from 'react-bootstrap';

class Clients extends Component {
    state = {
        allCustomers: [],
        allServicesClient: [],
        subSingleMenu: [],
        customerId: null

    }

    componentDidMount() {
        this.getAllServiceCustomers()
    }
    //////////////Get All Customers////////////////
    getAllServiceCustomers = () => {
        API.getAllServiceCustomers()
            .then(resCustomer => {
                this.setState({ allCustomers: resCustomer.data })

            }).catch(err => toast.error("There is an error. Please contact administrator (Getting All Customers)"))
    }
    /////////////Get services for a selected client//////
    serviceClient = () => {
        API.serviceClient({ clientId: this.state.customerId })
            .then(resServiceClient => {
                this.setState({ allServicesClient: resServiceClient.data });
                console.log(this.state.allServicesClient)

            }).catch(err => toast.error("There is an error. Please contact administrator (Getting Services for the selected service)"));
    }
    /////////////MENU SERVICE SIDEBAR//////////
    serviceMenu = () => {
        return (
            <ol>
                {this.state.allServicesClient.map((singleMenu) => {
                    if (singleMenu.Service.subId === 0) {
                        return (
                            <li key={singleMenu.id}>{singleMenu.Service.serviceName}
                                {this.subMenuMain(singleMenu.ServiceId)}
                            </li>
                        )
                    }

                })}
            </ol>
        )
    }

    subMenuMain = (subIdSearch) => {
        let ParentsubMenu = (this.state.allServicesClient.filter(obj => obj.Service.subId === subIdSearch))

        return (
            ParentsubMenu.map(singleParentsubMenu => (
                <ul>
                    <li key={singleParentsubMenu.id}>{singleParentsubMenu.Service.serviceName}
                        {this.subMenuMain(singleParentsubMenu.ServiceId)}
                    </li>
                </ul>
            ))

        )
    }

    /* serviceMenu = () => {

        return (
            <ol>
                {this.state.allServicesClient.map((singleMenu) => {

                    return (<li key={singleMenu.Service.id}>{singleMenu.Service.serviceName}
                        {this.state.allServicesClient.filter(obj => obj.subId === singleMenu.Service.id).map(singleParentsubMenu => (

                            <ul>
                                <li key={singleParentsubMenu.id}>
                                    {singleParentsubMenu.serviceName}
                                    {this.subMenuMain(singleParentsubMenu.id)}
                                </li>
                            </ul>
                        ))}</li>
                    )

                })}
            </ol>
        )
    } */
    ////////////////////////////
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    ///////////////////////////
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2 className="text-center"> Set up services to a client</h2>
                        <Form.Row>
                            <Form.Control onChange={this.handleInputChange} as="select" name="customerId">
                                <option>Choose...</option>
                                {this.state.allCustomers.map(singleCustomer => (
                                    <option key={singleCustomer.clientId} value={singleCustomer.clientId}>{singleCustomer.User.fName} - {singleCustomer.User.lName} - {singleCustomer.User.companyName}</option>
                                ))}
                            </Form.Control>
                            <br /><br />
                            <Button onClick={this.serviceClient} variant="primary" type="submit">
                                Search
                            </Button>
                        </Form.Row>
                    </Col>
                </Row>
                {/* ///////////////////show services */}
                <hr />
                <Row>
                    <Col size="md-12">
                        <h2 className="text-center">Here are the services</h2>
                        {this.state.allServicesClient.length > null ? this.serviceMenu() : (<p>loading</p>)}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Clients;