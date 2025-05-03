interface Attribute { 
    Value: string; 
    Id: string 
}

interface Cell {
	Value: string;
	Attributes?: Attribute[];
}

export const ReportRowType = {
	"SECTION" : "Section",
	"HEADER" : "Header",
	"ROW" : "Row",
	"SUMMARY_ROW": "SummaryRow"
} as const

interface SubRow {
	RowType: string;
	Cells: Cell[]
}

export interface ReportRow {
	RowType: string;
	Title?: string;
	Cells?: Cell[];
	Rows?: SubRow[];
}

export interface Report {
	ReportID: string;
	ReportName: string;
	ReportType: string;
	ReportTitles: string[];
	ReportDate: string;
	UpdatedDateUTC: string;
	Fields: string[];
	Rows: ReportRow[];
}
