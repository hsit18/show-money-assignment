import axios from "axios";
import config from "../config";

export const getBalanceSheet = async () => {
    try {
        const response = await axios.get(config.xeroHost+"api.xro/2.0/Reports/BalanceSheet");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}