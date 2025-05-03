import { beforeEach, describe, expect, test, vi, type MockedFunction } from 'vitest';
import { getBalanceSheet } from './reportService';
import { mockedBalanceSheetResponse } from '@/tests/data/balanceSheetData';
import axios from 'axios';

vi.mock('axios', () => {
  return {
    default: {
      post: vi.fn(),
      get: vi.fn(),
      delete: vi.fn(),
      put: vi.fn(),
      create: vi.fn().mockReturnThis()
    },
  };
});

describe('Reports balance sheet service', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	test('get balancesheet API success', async () => {
		(axios.get as MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockedBalanceSheetResponse });
		const res = await getBalanceSheet();

		expect(axios.get).toHaveBeenCalledWith('api/reports/balanceSheet');
		expect(res.Status).toEqual("OK");
		expect(res.Reports.length).toEqual(1);
		expect(res.Reports[0].ReportName).toEqual("Balance Sheet");
	});

	test('get balancesheet API fails', async () => {
		(axios.get as MockedFunction<typeof axios.get>).mockRejectedValueOnce(new Error("Failed to fetch API"));

		await expect(getBalanceSheet()).rejects.toThrow("Failed to fetch API");
		expect(axios.get).toHaveBeenCalledWith('api/reports/balanceSheet');
	});
});
