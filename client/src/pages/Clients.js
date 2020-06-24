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
        customerId: null,
        status: [
            { value: "0", label: "Not Activated" },
            { value: "1", label: "Waiting on Client" },
            { value: "2", label: "Completed" },
            { value: "3", label: "Canceled" }
        ],
        updateStatus: '',
        updateEmployee: '',
        getOneEmployee: [],
        getAllEmployees: []

    }

    componentDidMount() {
        this.getAllServiceCustomers();
        this.getAllDeparments();
    }
    ///////////////GET ALL EMPLOYEES///////////
    getAllDeparments = () => {
        API.getAllDeparments({})
            .then(resGetAllDeparments => {
                this.setState({ getAllEmployees: resGetAllDeparments.data })
            }).catch(err => toast.error("There is an error. Please contact administrator (getting all departments)"))
    }
    //////////////////GET ONE EMPLOYEE//////////
    getEmployee = (selectedId, serviceId) => {
        let selctedEmployee = (this.state.getAllEmployees.filter(obj => obj.id === selectedId))
        return (

            selctedEmployee.map(singleSelctedEmployee => (
                <Form.Control onChange={(evt) => this.updateAsseignedEmoloyee(evt, serviceId)} as="select" name="updateEmployee">
                    <option value={singleSelctedEmployee.id}>{singleSelctedEmployee.fName} {singleSelctedEmployee.lName} - {singleSelctedEmployee.Role.name}</option>
                    {this.getAllEmployeesoptions(selectedId)}
                </Form.Control>
            )
            ))
    }
    getAllEmployeesoptions = (selectedId) => {
        let selctedEmployee = (this.state.getAllEmployees.filter(obj => obj.id !== selectedId))
        return (
            selctedEmployee.map(singleEmployee => (
                <option value={singleEmployee.id}>{singleEmployee.fName} {singleEmployee.lName} - {singleEmployee.Role.name}</option>
            ))
        )
    }
    updateAsseignedEmoloyee = (event, serviceId) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => this.updateAsseignedEmoloyeeAPI(serviceId))
    }
    updateAsseignedEmoloyeeAPI = (serviceId) => {
        API.updateEmployee({
            id: serviceId,
            employeeId: this.state.updateEmployee
        })
            .then(updatedResult => {
                toast.success("Assinged Employeed updated successfully!")
            }).catch(err => toast.error("There is an error. Please contact administrator (updating assigned employee)"))
    }
    //////////////Get All Customers////////////////
    getAllServiceCustomers = () => {
        API.getAllServiceCustomers()
            .then(resCustomer => {
                this.setState({ allCustomers: resCustomer.data })
            }).catch(err => {
                toast.error("There is an error. Please contact administrator (Getting All Customers)")
            })
    }
    /////////////Get services for a selected client//////
    serviceClient = () => {
        this.setState({ allServicesClient: '' })
        API.serviceClient({ clientId: this.state.customerId })
            .then(resServiceClient => {
                this.setState({ allServicesClient: resServiceClient.data });
            }).catch(err => toast.error("There is an error. Please contact administrator (Getting Services for the selected service)"));
    }
    ////////////////UPDATE STATUS///////////////
    updateStatus = (event, updateIdStatus) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => this.updateRealStatus(updateIdStatus));

    }
    updateRealStatus = (evet) => {
        if (this.state.updateStatus === 0 || this.state.updateStatus === null) {
            toast.error("Please select an update")
        }
        else {
            API.updateStatus({
                id: evet,
                content: this.state.updateStatus
            }).then(result => {
                toast.success("The Status updated successfully")
            }).catch(err => toast.error("There is an error. Please contact administrator (Updating status)"));
        }
    }
    //////////////////////////
    selectFunction = (selectedId) => {

        if (selectedId === 0) {
            return (<option className="notActive" value="0">Not Activate</option>)
        }
        else if (selectedId === 1) {
            return (<option className="waiting" value="1">Waiting on Client</option>)

        }
        else if (selectedId === 2) {
            return (<option className="completed" value="2">Completed</option>)

        }
        else if (selectedId === 3) {
            return (<option className="canceled" value="3">Canceled</option>)

        }
        else {
            return (<option>Select...</option>)
        }
    }
    /////////////MENU SERVICE SIDEBAR//////////
    serviceMenu = () => {
        return (
            <ol>
                {this.state.allServicesClient.map((singleMenu) => {
                    if (singleMenu.Service.subId === 0) {
                        return (
                            <li key={singleMenu.id}>{singleMenu.Service.serviceName}
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="serviceTitle">Status</Form.Label>
                                            <Form.Control onChange={(evt) => this.updateStatus(evt, singleMenu.id)} /* placeholder={this.selectFunction(singleMenu.status)} */ as="select" name="updateStatus">
                                                {this.selectFunction(singleMenu.status)}
                                                <option className="notActive" value="0">Not Activate</option>
                                                <option className="waiting" value="1">Waiting on Client</option>
                                                <option className="completed" value="2">Completed</option>
                                                <option className="canceled" value="3">Canceled</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label className="serviceTitle">Assigned Employee</Form.Label>

                                            {this.getEmployee(singleMenu.employeeId, singleMenu.id)}

                                        </Form.Group>
                                    </Form.Row>
                                </Form>
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
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control onChange={(evt) => this.updateStatus(evt, singleParentsubMenu.id)} as="select" name="updateStatus">
                                        {this.selectFunction(singleParentsubMenu.status)}
                                        <option className="notActive" value="0">Not Activate</option>
                                        <option className="waiting" value="1">Waiting on Client</option>
                                        <option className="completed" value="2">Completed</option>
                                        <option className="canceled" value="3">Canceled</option>
                                    </Form.Control>

                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label className="serviceTitle">Assigned Employee</Form.Label>
                                    {this.getEmployee(singleParentsubMenu.employeeId, singleParentsubMenu.id)}
                                </Form.Group>
                            </Form.Row>
                        </Form>
                        {this.subMenuMain(singleParentsubMenu.ServiceId)}
                    </li>
                </ul >
            ))
        )
    }
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
            this.state.userId === null ? <p></p> :
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
                            {this.state.allServicesClient.length > null ? this.serviceMenu() : (<p>Please choose a client to see the services</p>)}


                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default Clients;