import React, { Component } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import API from "../../utils/API";
import { AdminMenu, EmployeeMenu, CustomerMenu } from "../../components/Menu";

class SecuritySession extends Component {

    state = {
        roleId: null,
        userId: null
    }
    componentDidMount() {
        this.checkSecurity()
    }
    checkSecurity = () => {
        API.checkSecurity()
            .then((res) => {
                if (res.data.isUserLoggin === true && res.data.userId !== null) {
                    this.setState({
                        userId: res.data.userId,
                        roleId: res.data.roleId
                    })
                    toast.info("You are logged in... !");
                }
                else if (res.data.isUserLoggin === false && res.data.userId === null) {
                    toast.info("Please Try To Login... !");
                    window.location.href = "/";
                }
                else {
                    toast.info("mmm... Something is wrong. Please Try To again... !");
                }
            })
            .catch(err => console.log(err))
    }

    checkMe = () => {
        if (this.state.redirectToHome === true) {
        }
    }
    render() {
        if (this.state.roleId === 14) {
            return <AdminMenu userId={this.state.userId} />
        }
        else if (this.state.roleId === 13) {
            return <CustomerMenu userId={this.state.userId} />
        }
        else if (this.state.roleId >= 1 && this.state.roleId <= 5) {
            return <EmployeeMenu userId={this.state.userId} />
        }
        /* setInterval(this.checkMe, 3000);
        return (
            <div>

            </div>
        ) */
    }
}
export default SecuritySession;