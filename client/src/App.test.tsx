import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { getBalanceSheet } from '@/services/reportService';
import { mockedBalanceSheetResponse } from '@/tests/data/balanceSheetData';
import { App } from './App';

vi.mock('@/services/reportService');

describe('App', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	test('render title as Balance Sheet - Demo Org - As at 03 May 2025', async () => {
		const mockGetBalanceSheet = vi.mocked(getBalanceSheet);
		mockGetBalanceSheet.mockResolvedValue(mockedBalanceSheetResponse);        
        
        render(<App />)
        await waitFor(() => expect(screen.queryByTestId("loading")).toBeFalsy())
        expect(screen.getByText(mockedBalanceSheetResponse.Reports[0].ReportTitles.join(' - '))).toBeInTheDocument();       
	});
});
