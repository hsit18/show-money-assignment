import axios from "axios";
import config from "../config";

const xeroApiInstance = () => {
    return axios.create({
        baseURL: config.xeroHost
    })
}

export const xeroApiClient = xeroApiInstance();