import { arcticData } from "../data/axis.js";

export default {
	data: arcticData,
	title: "Arctic Sea Ice Minimum",
	type: "bar", // or 'bar', 'line', 'pie', 'percentage'
	height: 300,
	tooltipOptions: {
		formatTooltipX: d => (d + "").toUpperCase(),
		formatTooltipY: d => d + " million sq km"
	},
	lineOptions: {
		regionFill: 1
	},
	axisOptions: {
		xIsSeries: true,
		xAxisMode: "tick"
	},
	colors: ["pink"]
};