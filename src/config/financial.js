import { financialData } from "../data/axis.js";

export default {
	data: financialData,
	title: "Sales",
	type: "bar",
	height: 300,
	tooltipOptions: {
		formatTooltipX: d => (d + "").toUpperCase(),
		formatTooltipY: d => Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(d)
	},
	lineOptions: {
		regionFill: 1
	},
	axisOptions: {
		shortenYAxisNumbers: 1,
		xIsSeries: true,
		xAxisMode: "tick"
	},
	colors: ["blue", "teal"]
};