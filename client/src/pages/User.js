import React, { Component } from "react";
import API from "../utils/API";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Row, Container } from "../components/Grid";
import "./style.css";
import { Table, Button, Form, Col } from 'react-bootstrap';

class Users extends Component {
    state = {
        fName: '',
        lName: '',
        address: '',
        addressUnit: '',
        addressCity: '',
        addressState: '',
        addressZip: '',
        email: '',
        phone: '',
        companyName: '',
        description: '',
        logo: '',
        password: '',
        role: '',
        allRoles: [],
        allUsers: []
    }
    /*     constructor(props) {
            super(props);
            this.state = {
                allRoles: []
            };
        } */

    saveNewUser = (event) => {
        event.preventDefault()
        API.saveNewUser({
            fName: this.state.fName,
            lName: this.state.lName,
            address: this.state.address,
            addressUnit: this.state.addressUnit,
            addressCity: this.state.addressCity,
            addressState: this.state.addressState,
            addressZip: this.state.addressZip,
            email: this.state.email,
            phone: this.state.phone,
            companyName: this.state.companyName,
            description: this.state.description,
            logo: '',
            password: this.state.password,
            roleId: this.state.role
        }).then(resSucceed => {
            toast.success("User created successfully")
        }).catch(err => toast.error("There is an error. Please contact adminstrator"))
    }
    componentDidMount() {
        this.getAllRoles();
        this.getAllUsers();
    }
    //////////////GET ALL USERS INFO///////////////
    getAllUsers = () => {
        API.getAllUsers()
            .then(resAllUsers => {
                this.setState({ allUsers: resAllUsers.data });
            }).catch(err => toast.error("There is an error. Please contact administrator"))
    }
    //////////////GET ALL ROLES AND DEPARMENTS////////////
    getAllRoles = () => {
        API.getAllRoles()
            .then(resAllRoles => {
                this.setState({ allRoles: resAllRoles.data });
            }).catch(err => toast.error("There is an error. Please contact administrator"))
    }
    //////////////////////////////////////////
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    ///////////////////////////////////////////
    render() {
        return (
            <div className="topSpacing">
                <Container>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="fName" type="text" placeholder="Example: John" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="lName" type="text" placeholder="Example: Wick" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="email" type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="password" type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="phone" type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="xxxxxxxxxx" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCompanyName">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="companyName" type="text" placeholder="Example: Google" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="address" placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="addressUnit" placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="addressCity" type="text" placeholder="Example: Los Angeles" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="addressState" type="text" placeholder="Example: CA" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name="addressZip" type="text" placeholder="Example: 90001" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment or Description</Form.Label>
                            <Form.Control onChange={this.handleInputChange} name="description" as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridRole">
                            <Form.Label>Role</Form.Label>

                            {this.state.allRoles.length ? (
                                <Form.Control onChange={this.handleInputChange} as="select" name="role">
                                    <option>Choose...</option>
                                    {this.state.allRoles.map(singleRole => (
                                        <option value={singleRole.id}>{singleRole.name}</option>
                                    ))}
                                </Form.Control>

                            ) : (<h3></h3>)}
                        </Form.Group>
                        <Button onClick={this.saveNewUser} variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                    {/* ///////////ُSHOW ALL THE USERS//////////// */}
                </Container>
                <hr />
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <h2 className="text-center">
                                User Lists
                        </h2>
                        </Col>
                    </Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Full Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Address</td>
                                <td>Company Name</td>
                                <td>Role</td>
                                <td>Created Date</td>
                                <td>Updated Date</td>
                                <td>Description</td>
                                <td>Edit</td>
                                <td>Delele</td>
                            </tr>
                        </thead>
                        {this.state.allUsers.length ? (
                            <tbody>
                                {this.state.allUsers.map(singleUser => (

                                    <tr key={singleUser.id}>

                                        <td name="roleId">{singleUser.id}</td>
                                        <td>{singleUser.fName} {singleUser.lName}</td>
                                        <td>{singleUser.email} </td>
                                        <td>{singleUser.phone} </td>
                                        <td>{singleUser.address}, {singleUser.addressUnit}, {singleUser.addressCity}, {singleUser.addressState} {singleUser.addressZip}</td>
                                        <td>{singleUser.companyName}</td>
                                        <td>{singleUser.Role.name}</td>
                                        <td>{singleUser.createdAt}</td>
                                        <td>{singleUser.updatedAt}</td>
                                        <td>{singleUser.description}</td>
                                        <td className="text-center"><Button onClick={() => this.getOneRole(singleUser.id)} variant="primary">Edit</Button></td>
                                        <td className="text-center"><Button onClick={() => this.deleteRole(singleUser.id)} variant="danger">Delete</Button>
                                        </td>

                                    </tr>

                                ))}
                            </tbody>
                        ) : (<h3>Loading...</h3>)}

                    </Table>
                </Container>
            </div>
        )
    }

}
export default Users;