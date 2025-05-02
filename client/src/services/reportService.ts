import type { Report } from "@/types/report";
import { showMoneyApiClient } from "./index";

export const getBalanceSheet = async () => {
    try {
        const response = await showMoneyApiClient.get<{Status: string, Reports: Report[]}>("api/reports/balanceSheet");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}