import { BalanceSheetReport } from "./pages/BalanceSheetReport";

export const App = () => {
	return (
		<>
			<header className="m-2 px-2 py-2 bg-white rounded-sm shadow-sm">
				<h1 className="text-2xl font-bold">Report</h1>
			</header>
			<main className="mx-2 px-2 py-2 bg-gray-100 rounded-sm overflow-auto h-full">
				<BalanceSheetReport />
			</main>
		</>
	);
};
