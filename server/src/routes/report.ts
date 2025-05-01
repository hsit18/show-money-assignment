import { Router } from 'express';
import { getBalanceSheetData } from '../services/reportService';

const reportRrouter = Router();

reportRrouter.get('/balanceSheet', getBalanceSheetData);

export default reportRrouter;