import { showMoneyApiClient } from "./index";

export const getBalanceSheet = async () => {
    try {
        const response = await showMoneyApiClient.get("api/reports/balanceSheet");
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch Balance Sheet from show Money API API');
    }
}