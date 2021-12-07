import Axios from "axios";
import { getTokenApi } from "./auth";

Axios.defaults.headers.common['x-access-token'] = getTokenApi();
const API_HOST = "http://localhost:4000";




export async function getAllConcepts() {
    try {
        const response = await Axios({
            url: `${API_HOST}/getAllConcepts`,


        })
        return response;
    } catch (e) {
        console.log(e)
    }
}
export async function balance() {
    try {
        const response = await Axios({
            url: `${API_HOST}/balance`,


        })
        return response;
    } catch (e) {
        console.log(e)
    }
}
export async function orderBy(key,value) {
    try {
        const response = await Axios({
            url: `${API_HOST}/orderBy?key=${key}&value=${value}`,


        })
        return response;
    } catch (e) {
        console.log(e)
    }
}
export async function getRecords() {
    try {
        const response = await Axios({
            url: `${API_HOST}/getRecords`,


        })
        return response;
    } catch (e) {
        console.log(e)
    }
}
export async function getRecord(id_record) {
    try {
        const response = await Axios({
            url: `${API_HOST}/getRecord?id_record=${id_record}`,


        })
        return response;
    } catch (e) {
        console.log(e)
    }
}

export async function insertRecord(data) {

const a ={
    "concept":"prueba",
    "amount":10,
    "date": "2017-12-09 05:01:20",
    "type":"ingreso"

} 



    try {
        const response = await Axios({
            url: `${API_HOST}/insertRecord`,

            method: "POST",
            data: data
        })
        return response;
    } catch (e) {
        console.log(e)
    }
}
export async function updateRecord(data) {
    try {
        const response = await Axios({
            url: `${API_HOST}/updateRecord`,
 
            method: "PUT",
            data: data
        })
        return response;
    } catch (e) {
        console.log(e)
    }
}

export async function deleteRecord(id_record) {
    try {
        const response = await Axios({
            url: `${API_HOST}/deleteRecord`,

            method: "DELETE",
            data: {id_record}
        })
        return response;
    } catch (e) {
        console.log(e)
    }
}

