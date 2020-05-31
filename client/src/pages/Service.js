import React, { Component } from "react";
import API from "../utils/API";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Row, Container } from "../components/Grid";
import "./style.css";
import { Modal, Button, Form, Col } from 'react-bootstrap';

class Services extends Component {

    state = {
        serviceName: '',
        serviceDescription: '',
        subId: '',
        updateServiceName: '',
        UpdateSubId: '',
        updateserviceDescription: '',
        allServices: [],
        oneService: [],
        resOneServ: [],
        resParent: []
    }
    componentDidMount() {
        this.getAllServices();
    }
    //////////////////////////
    getAllServices = () => {
        API.getAllServices()
            .then(resAllServoces => {
                this.setState({ allServices: resAllServoces.data })
            }).catch(err => toast.error("There is an error. Please contact administrator. (Get ALL Service)"))
    }
    /////////SAVE NNEW SERVICE API FUNCTION////////////////////
    saveNewService = (event) => {
        event.preventDefault()
        API.saveNewService({
            serviceName: this.state.serviceName,
            serviceDescription: this.state.serviceDescription,
            subId: this.state.subId
        }).then(resAllServoces => {
            this.serviceMenu();
            toast.success("Menu added!");
            window.location.reload(false);

        }).catch(err => toast.error("There is an error. Please contact administrator (on Saving)"))
    }
    //////////////////DELETE Menu////////
    deleteService = (evt) => {
        API.deleteService({ data: { deleleServiceId: evt } })
            .then(resDel => {
                toast.success("The Item deleted successfully!")
            }).catch(err => toast.error("There is an error. Please contact administrator (on Deleteing)"))
    }
    ///////////////EDIT SERVICE///////////////////
    getOneServiceInfo = (serviceId) => {
        this.closeButton();
        API.getOneServiceInfo({ id: serviceId })
            .then(resGetOne => {
                this.setState({
                    resOneServ: resGetOne.data.resOneServ
                })
                if (!resGetOne.data.resParent) {

                    this.setState({ resParent: { serviceName: 'Parent', id: '0' } });
                }
                else {
                    this.setState({ resParent: resGetOne.data.resParent });
                }
            }).catch(err => toast.error("There is an error. Please contact administrator (on Get One Info for Editing)"))
    }
    ////////////GETTING INPUT VALUE/////////////////////
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    /////////////MENU SERVICE SIDEBAR//////////
    serviceMenu = () => {
        return (
            <ol>
                {this.state.allServices.map((singleMenu) => {
                    if (singleMenu.subId === 0) {
                        return (<li>{singleMenu.serviceName}
                            <a className="customEditButton" href="#" onClick={() => this.getOneServiceInfo(singleMenu.id)} >Edit</a>
                            <a className="customDeleteButton" href="#" onClick={() => this.deleteService(singleMenu.id)} >Delete</a>
                            {this.subMenuMain(singleMenu.id)}</li>)
                    }

                })}
            </ol>
        )
    }

    subMenuMain = (subIdSearch) => {
        let ParentsubMenu = (this.state.allServices.filter(obj => obj.subId === subIdSearch))

        return (
            ParentsubMenu.map(singleParentsubMenu => (
                <ul> <li>{singleParentsubMenu.serviceName}
                    <a className="customEditButton" href="#" onClick={() => this.getOneServiceInfo(singleParentsubMenu.id)} >Edit</a>
                    <a className="customDeleteButton" href="#" onClick={() => this.deleteService(singleParentsubMenu.id)}>Delete</a>
                    {this.subMenuMain(singleParentsubMenu.id)}</li></ul>
            ))

        )
    }
    /*  childSubMenu = (subIdSearch) => {
         let childSubMenuArray = (this.state.allServices.filter(obj => obj.subId === subIdSearch))
         return (
             childSubMenuArray.map(singlechildSubMenuArray => (
                 <ul>
                     <li>{singlechildSubMenuArray.serviceName}<a className="customDeleteButton" href="#" onClick={() => this.deleteService(singlechildSubMenuArray.id)} variant="danger">Delete</a>
                         {this.childSubMenu(singlechildSubMenuArray.id)} </li>
                 </ul>
             ))
         )
     } */
    //////////////////////Update selected service information
    updateOneService = (serviceId) => {
        API.updateOneService({
            id: serviceId,
            serviceName: this.state.updateServiceName,
            subId: this.state.UpdateSubId,
            serviceDescription: this.state.updateserviceDescription
        })
            .then(result => {
                toast.success("service updated");
                this.closeButton();
            }).catch(err => toast.error("There is an error. Please contact administrator (update service)"))
    }

    /////////////////////CLOSE EDIT FORM BOX
    closeButton = () => {
        var x = document.getElementById("popupUpdate");
        if (x.style.display === "none") {
            x.style.display = "block";

        } else {
            x.style.display = "none";
        }

    }
    //////////////////////////////////////
    render() {

        return (
            <div className="topSpacing">
                <Container>
                    {/* ///////////update selected service //////////////*/}
                    <Row>
                        <Modal.Dialog className="editFormCustomClass" id="popupUpdate">
                            <Modal.Header closeButton onClick={() => this.closeButton()}>
                                <Modal.Title>Update selected service</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Please update the information below and save.</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Row>
                                    <Col size="md-6">
                                        <Form.Label>Service Name</Form.Label>
                                        <input onChange={this.handleInputChange} name="updateServiceName" placeholder={this.state.resOneServ.serviceName} />
                                    </Col>
                                    <Col size="md-6">
                                        <Form.Label>Sub Service of</Form.Label>

                                        {this.state.allServices.length ? (
                                            <Form.Control onChange={this.handleInputChange} as="select" name="UpdateSubId">
                                                <option value={this.state.resParent.id}>{this.state.resParent.serviceName}</option>
                                                <option>Choose...</option>
                                                {this.state.allServices.map(singleService => (
                                                    <option key={singleService.id} value={singleService.id}>{singleService.id} - {singleService.serviceName} - {singleService.subId}</option>
                                                ))}
                                            </Form.Control>

                                        ) : (<h3>Loading Services...</h3>)}
                                        <Form.Label>Service Description</Form.Label>
                                        <Form.Control onChange={this.handleInputChange} name="updateserviceDescription" placeholder={this.state.resOneServ.serviceDescription} as="textarea" rows="1" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="md-12">
                                        <Button onClick={() => this.updateOneService(this.state.resOneServ.id)} variant="primary">Save changes</Button>
                                    </Col>
                                </Row>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Row>
                    {/* ////////////////////////ADD SERVICE/////////// */}
                    <Row>
                        <Col siz="md-12">
                            <h2 className="text-center">Add Services</h2>
                        </Col>
                    </Row>
                    {/* /////////////////add new service form */}
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
                                                    <option key={singleService.id} value={singleService.id}>{singleService.id} - {singleService.serviceName} - {singleService.subId}</option>
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
                    {/* ///////////////////show services */}
                    <Row>
                        <Col size="md-12">

                            {this.serviceMenu()}

                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default Services;