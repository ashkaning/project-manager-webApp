import axios from "axios";
import { ColLight } from "../components/Grid";
export default {
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
    saveNewUser: function (user) {
        return axios.post("/api/user", user)
    },
    getAllUsers: function () {
        return axios.get("/api/user")
    },
    getAllServices: function () {
        return axios.get("/api/service")
    },
    saveNewUser: function (service) {
        return axios.post("/api/service", service)
    }
}