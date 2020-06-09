import React, { Component } from "react";
import API from "../utils/API";
import { toast } from "react-toastify"
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { Col, Row, Container, ColDark } from "../components/Grid";
import "./style.css"

class Home extends Component {
    state = {
        email: "",
        password: "",
        alertText: ""
    };
    componentDidMount() {
        this.loginSession();
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        API.usersLogin({
            email: this.state.email,
            password: this.state.password
        })
            .then((result) => {
                if (!(result.data.isUserLoggin)) {
                    toast.error("username or password is wrong");

                } else {
                    toast.info("redirecting to your profile");
                    this.props.history.push('/users', { some: 'state' })

                }

            })
            .catch(err => console.log(err));
    }
    loginSession = () => {
        API.loginSession()
            .then((res) => {
                console.log(res.data)
                if (res.data.isSuccess === "Yes" && res.data.isUserLoggin === true) {
                    toast.info("You are logged in... !");
                    this.props.history.push('/users', { some: 'state' })
                }
                else if (res.data.isSuccess === "No" && res.data.isUserLoggin === false) {
                    toast.info("Please Try To Login... !");
                }
                else { }
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Col size="md-12">
                            <h1 className="text-center">Login</h1>
                            <h3 style={{ color: 'red' }}></h3>
                        </Col>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-4"></Col>
                    <ColDark size="md-4">
                        <form>
                            <label>Email:</label>
                            <Input
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="johnwick@site.com (required)"
                            />
                            <label>Password:</label>
                            <Input
                                onChange={this.handleInputChange}
                                name="password"
                                type="password"
                                placeholder="***** (required)"
                            />
                            <hr />
                            <FormBtn
                                onClick={this.handleFormSubmit}
                            >
                                Login
                            </FormBtn>
                        </form>
                    </ColDark>
                    <Col size="md-4"></Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="spacer"></div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;