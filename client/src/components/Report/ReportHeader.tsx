import type { ReportRow } from "@/types/report";

export const ReportHeader = ({header}: {header: ReportRow | undefined}) => {
    return (
        <tr>
            {(header?.Cells || []).map((cell, index) => (
                <th key={index + cell.Value} className={`text-right ${index === 0 ? 'w-1/2' : 'w-1/4'}`}>
                    {cell.Value}
                </th>
            ))}
        </tr>
    )
}