import { cn } from "@/lib/utils"
import { ReportRowType, type ReportRow } from "@/types/report"

export const ReportSection = ({row} : {row: ReportRow}) => {
    return (
        <>
            <tr key={row.Title}>
                <td colSpan={3}>
                    <p data-testid="section-title" className={`font-bold ${(row.Rows || []).length === 0 ? "my-2 text-2xl" : "px-2 my-1 text-xl"}`}>{row.Title}</p>
                </td>
            </tr>
            {(row.Rows || []).map((subRow, subRowIndex) => (
                <tr data-testid={`${row.Title}-entries`} key={`${row.Title}.${subRowIndex}`} className={subRow.RowType === ReportRowType.SUMMARY_ROW ? "font-bold": ""}>
                    {(subRow.Cells || []).map((cell, cellIndex) => (
                        <td 
                            key={`${row.Title}.${cellIndex}`}
                            className={cn(
                                cellIndex > 0 ? "text-right w-1/4" : "px-6",
                                cellIndex === 0 && subRow.RowType === ReportRowType.SUMMARY_ROW && row.Title === "" ? "px-2 text-xl" : ""
                            )}
                        >
                            {cell.Value}
                        </td>
                    ))}
                </tr>
            ))}
        </>
    )
    
    
}