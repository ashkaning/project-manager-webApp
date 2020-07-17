import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import API from "../../utils/API";
import { AdminMenu, EmployeeMenu, CustomerMenu } from "../../components/Menu";

let userId;
let roleId;
let isUserLoggin
function CheckSecurity(res) {
    console.log(res)
    isUserLoggin = res.isUserLoggin
    userId = res.userId
    roleId = res.roleId
    if (isUserLoggin === true && userId !== null) {
        toast.info("You are logged in... !");
        return Menu(userId)
    }
    else if (isUserLoggin === false && userId === null) {
        toast.info("Please Try To Login... !");
        return window.location.href = "/";
    }
    else {
        toast.info("mmm... Something is wrong. Please Try To again... !");

    }
}
function Menu(userId) {
    if (roleId === 14) {
        return <AdminMenu userId={userId} />
    }
    else if (roleId === 13) {
        return <CustomerMenu userId={userId} />
    }
    else if (roleId >= 1 && roleId <= 5) {
        return <EmployeeMenu userId={userId} />
    }
}
export default CheckSecurity;