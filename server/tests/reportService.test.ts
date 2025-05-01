import { Request, Response } from 'express';
import { getBalanceSheetData } from '../src/services/reportService';

import request from 'supertest';
import app from '../src/app';
import * as xeroClient from '../src/api/reportApi';

jest.mock('../src/api/reportApi');

describe('Reports balance sheet API', () => {
  test('balance sheet API returns data when the API call is successful', async () => {
    const mockBalanceSheetData = {
      Reports: [
        {
          ReportName: 'BalanceSheet',
          Rows: [
            { Title: 'Assets', Amount: 50000 },
            { Title: 'Liabilities', Amount: 20000 },
          ],
        },
      ],
    };
    (xeroClient.getBalanceSheet as jest.Mock).mockResolvedValue(
      mockBalanceSheetData,
    );

    const response = await request(app).get('/api/reports/balanceSheet');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBalanceSheetData);
  });

  test('when balance sheet API fails it should return error', async () => {
    (xeroClient.getBalanceSheet as jest.Mock).mockRejectedValue(
      new Error('API failure'),
    );

    const response = await request(app).get('/api/reports/balanceSheet');
    expect(response.status).toBe(500);
    expect(response.text).toContain('API failure');
  });

  test('for unknown route it should return 404', async () => {
    const response = await request(app).get('/unknown-route');
    
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Route not found');
  });
});
