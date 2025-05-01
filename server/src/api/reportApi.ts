import { xeroApiClient } from "./index";

export const getBalanceSheet = async () => {
    try {
        const response = await xeroApiClient.get("api.xro/2.0/Reports/BalanceSheet");
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch Balance Sheet from Xero API');
    }
}