import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { getBalanceSheet } from '@/services/reportService';
import { useBalanceSheet } from './useBalanceSheet';
import { mockedBalanceSheetResponse } from '@/tests/data/balanceSheetData';

vi.mock('@/services/reportService');

describe('useBalanceSheet hooks', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	test('get balancesheet data from API success', async () => {
		const mockGetBalanceSheet = vi.mocked(getBalanceSheet);
		mockGetBalanceSheet.mockResolvedValue(mockedBalanceSheetResponse);        
        const { result } = renderHook(() => useBalanceSheet());
        await waitFor(() => expect(result.current.loading).toBeFalsy())
        expect(result.current.data.length).toEqual(1);       
	});
    test('get balancesheet data from API failed', async () => {
		const mockGetBalanceSheet = vi.mocked(getBalanceSheet);
		mockGetBalanceSheet.mockRejectedValueOnce(new Error("Failed to fetch API"));
        const { result } = renderHook(() => useBalanceSheet());
        await waitFor(() => expect(result.current.loading).toBeFalsy())
        expect(result.current.data.length).toEqual(0);
        expect(result.current.error?.message).toEqual("Failed to fetch API");
	});
});
