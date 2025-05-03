import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { getBalanceSheet } from '@/services/reportService';
import { mockedBalanceSheetResponse } from '@/tests/data/balanceSheetData';
import { BalanceSheetReport } from './index';

vi.mock('@/services/reportService');

describe('Balance sheet Page', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	test('render title as Balance Sheet - Demo Org - As at 03 May 2025', async () => {
		const mockGetBalanceSheet = vi.mocked(getBalanceSheet);
		mockGetBalanceSheet.mockResolvedValue(mockedBalanceSheetResponse);        
        
        render(<BalanceSheetReport />)
        await waitFor(() => expect(screen.queryByTestId("loading")).toBeFalsy())
        expect(screen.getByText(mockedBalanceSheetResponse.Reports[0].ReportTitles.join(' - '))).toBeInTheDocument();       
	});

    test('total section title as 12', async () => {
		const mockGetBalanceSheet = vi.mocked(getBalanceSheet);
		mockGetBalanceSheet.mockResolvedValue(mockedBalanceSheetResponse);        
        
        render(<BalanceSheetReport />);
        await waitFor(() => expect(screen.queryByTestId("loading")).toBeFalsy());
        expect(screen.getAllByTestId('section-title')).toHaveLength(12);    
        expect(screen.getAllByTestId('section-title')[0], "first title as Assets").toContainHTML("Assets"); 
	});

    test('Section Bank', async () => {
		const mockGetBalanceSheet = vi.mocked(getBalanceSheet);
		mockGetBalanceSheet.mockResolvedValue(mockedBalanceSheetResponse);        
        
        render(<BalanceSheetReport />);
        await waitFor(() => expect(screen.queryByTestId("loading")).toBeFalsy());
        expect(screen.getAllByTestId('section-title')[1], "section title as Bank").toContainHTML("Bank");
        expect(screen.getAllByTestId('Bank-entries')).toHaveLength(4);
        expect(screen.getAllByTestId('Bank-entries')[3].firstElementChild).toContainHTML("Total Bank");
        expect(screen.getAllByTestId('Bank-entries')[3].childNodes[1]).toContainHTML("104076.70");
        expect(screen.getAllByTestId('Bank-entries')[3].childNodes[2]).toContainHTML("104049.60");
	});

    test('render Balance Sheet with error alert', async () => {
		const mockGetBalanceSheet = vi.mocked(getBalanceSheet);
		mockGetBalanceSheet.mockRejectedValueOnce(new Error("Failed to fetch API"));
        
        render(<BalanceSheetReport />)
        await waitFor(() => expect(screen.queryByTestId("loading")).toBeFalsy())
        expect(screen.getByText("Error")).toBeInTheDocument();
        expect(screen.getByText("Failed to fetch API")).toBeInTheDocument(); 
        expect(screen.queryByText(mockedBalanceSheetResponse.Reports[0].ReportTitles.join(' - '))).not.toBeInTheDocument();
	});
});
