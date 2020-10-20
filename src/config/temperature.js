import { temperatureData } from "../data/axis.js";

export default {
	data: temperatureData,
	title: "Arctic Sea Ice Minimum",
	type: "line", // or 'bar', 'line', 'pie', 'percentage'
	height: 300,
	tooltipOptions: {
		formatTooltipX: d => (d + "").toUpperCase(),
		formatTooltipY: d => d + " ℃"
	},
	lineOptions: {
		regionFill: 1
	},
	axisOptions: {
		xIsSeries: true
	},
	colors: ["blue", "teal"]
};