import { Request, Response, NextFunction } from 'express';
import { getBalanceSheet } from '../api/reportApi';

export const getBalanceSheetData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const balanceSheetResult = await getBalanceSheet();
      res.status(200).json(balanceSheetResult);
    } catch (error) {
      next(error);
    }
  }