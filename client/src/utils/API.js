import axios from "axios";
import { ColLight } from "../components/Grid";
export default {
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
    saveNewUser: function (user) {
        return axios.post("/api/user", user)
    },
    getAllUsers: function () {
        return axios.get("/api/user")
    },
    /* Services API */
    getAllServices: function () {
        return axios.get("/api/service")
    },
    saveNewService: function (service) {
        return axios.post("/api/service", service)
    },
    deleteService: function(service){
        return axios.delete("/api/service",service)
    },
    getOneServiceInfo: function(service){
        return axios.post("/api/getOneService", service)
    },
    updateOneService: function(service){
        return axios.put("/api/service", service)
    }
}