import axios from "axios";
import {SHOW_MONEY_API_HOST} from "../constants";

const showMoneyApiInstance = () => {
    return axios.create({
        baseURL: SHOW_MONEY_API_HOST,
        timeout: 5000
    })
}

export const showMoneyApiClient = showMoneyApiInstance();