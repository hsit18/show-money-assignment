import { ReportHeader } from "@/components/Report/ReportHeader";
import { ReportSection } from "@/components/Report/ReportSections";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useBalanceSheet } from "@/hooks/useBalanceSheet";
import { ReportRowType, type ReportRow } from "@/types/report";
import { useMemo } from "react";

export const BalanceSheetReport = () => {
    
    const { data, loading, error } = useBalanceSheet();

    const reportHeader: ReportRow | undefined = useMemo<ReportRow | undefined>(() => {
        return (data[0]?.Rows || []).find((reportRow) => reportRow.RowType === ReportRowType.HEADER)
    }, [data]);

    const reportSections: ReportRow[] = useMemo<ReportRow[]>(() => {
        return data[0]?.Rows?.filter((reportRow) => reportRow.RowType === ReportRowType.SECTION)
    }, [data]);
    
    if(loading) {
        return (
            <Skeleton data-testid="loading" className="w-[100%] h-[20px] rounded-2xl" />
        )
    }

    if(error?.message) {
        return (
            <Alert>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {error?.message}
                </AlertDescription>
            </Alert>
        )
    }

    return (
        <section className="h-full flex flex-col overflow-auto">
            <h2 className="text-xl font-bold" aria-label={data[0]?.ReportTitles?.join(' - ')}>
                {data[0]?.ReportTitles?.join(' - ')}
            </h2>
            <table className='flex-1 m-5 overflow-auto h-96 max-w-4xl' data-testid='main-table'>
                <thead>
                    <ReportHeader header={reportHeader} />
                </thead>
                <tbody className="overflow-auto">
                    {(reportSections || [])?.map((row, rowIndex) => <ReportSection key={`${row.Title}_${rowIndex}`} row={row} /> )}
                </tbody>
            </table>
        </section>
    )
}