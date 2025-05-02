interface Attribute { 
    Value: string; 
    Id: string 
}

interface Cell {
	Value: string;
	Attributes?: Attribute[];
}

type ReportRowType = "Section" | "Header" | "Row" | "SummaryRow";

interface Row {
	RowType: ReportRowType;
	Title?: string;
	Cells?: Cell[];
	Rows?: Row[];
}

export interface Report {
	ReportID: string;
	ReportName: string;
	ReportType: string;
	ReportTitles: string[];
	ReportDate: string;
	UpdatedDateUTC: string;
	Fields: string[];
	Rows: Row[];
}
