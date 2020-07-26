import React from "react";
import { toast } from "react-toastify";
import API from "../../utils/API";
import 'react-toastify/dist/ReactToastify.css';

function Comments(serviceId, clientId) {
    API.lastComment({
        serviceId: serviceId,
        clientId: clientId
    })
        .then(resLastComment => {
           return <span>hi</span>
            /* if (resLastComment.data === null) {
                return <span>No Data to Show</span>
            } */
           /*  else {
                return <span>{resLastComment.data.comment}</span>
            } */
        }).catch(err => console.log(err))
}

export default Comments
