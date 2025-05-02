import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { getBalanceSheet } from '@/services/reportService';
import { useBalanceSheet } from './useBalanceSheet';
import { mockedBalanceSheetResponse } from '@/tests/data/balanceSheetData';


vi.mock('@/services/reportService');

describe('Reports balance sheet service', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	test('get balancesheet', async () => {
		const mockGetBalanceSheet = vi.mocked(getBalanceSheet);
		mockGetBalanceSheet.mockResolvedValue(mockedBalanceSheetResponse);        
        const { result } = renderHook(() => useBalanceSheet());
        await waitFor(() => expect(result.current.loading).toBeFalsy())
        expect(result.current.data.length).toEqual(1);       

	});
});
