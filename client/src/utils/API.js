import axios from "axios";
export default {
    /* MENU */
    logOut: function () {
        return axios.get("/api/logOut")
    },
    /* Roles/Deparments API */
    NewRol: function (role) {
        return axios.post("/api/role", role);
    },
    getAllRoles: function () {
        return axios.get("/api/role");
    },
    deleteRole: function (role) {
        return axios.delete("/api/role/", role);
    },
    getOneRole: function (role) {
        return axios.post("/api/getOneRole", role);
    },
    updateOneRole: function (role) {
        return axios.put("/api/role", role);
    },
    /* Users API */
    checkSecurity: function () {
        return axios.get("/api/login")
    },
    /* checkSecurity: function () {
        return axios.get("/api/session")
    }, */
    usersLogin: function (authtData) {
        return axios.post("/api/login", authtData)
    },
    saveNewUser: function (user) {
        return axios.post("/api/user", user);
    },
    getAllUsers: function () {
        return axios.get("/api/user");
    },
    getOneUser: function (user) {
        return axios.post("/api/getOneUser", user)
    },
    /* Services API */
    getAllServices: function () {
        return axios.get("/api/service");
    },
    saveNewService: function (service) {
        return axios.post("/api/service", service);
    },
    deleteService: function (service) {
        return axios.delete("/api/service", service);
    },
    getOneServiceInfo: function (service) {
        return axios.post("/api/getOneService", service);
    },
    updateOneService: function (service) {
        return axios.put("/api/service", service);
    },
    getAllCustomers: function () {
        return axios.get("/api/assignServicesAndAllCustomers");
    },
    assignAllServiceToClient: function (service) {
        return axios.post("/api/assignServicesAndAllCustomers", service);
    },
    getAllDeparments: function () {
        return axios.get("/api/getAllDeparments")
    },
    /* Services Customers */
    getAllServiceCustomers: function () {
        return axios.get("/api/serviceCustomer")
    },
    serviceClient: function (customerId) {
        return axios.post("api/serviceCustomer", customerId)
    },
    updateStatus: function (data) {
        return axios.put("/api/serviceCustomer", data);
    },
    updateEmployee: function (data) {
        return axios.put("/api/serviceCustomerAssignedEmployeeUpdate", data)
    },
    /* PROFILE */
    profileInfo: function (data) {
        return axios.post("/api/profile", data)
    },
    /* COMMENTS */
    lastComment: function (data) {
        return axios.post("/api/comments", data)
    },
    showAllComments: function (data){
        return axios.post("/api/allComments",data)
    }

}