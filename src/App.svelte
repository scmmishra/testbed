<script>
    // Styles
    import "./main.css";
    import "frappe-charts/src/css/charts.scss";

    // Components
    import Nav from "./components/Nav.svelte";

    // Helpers
    import { onMount } from "svelte";

    // Chart
    // import { Chart } from "frappe-charts/src/js/chart.js";
    import { Chart } from "frappe-charts";

    import temperatureConfig from "./config/temperature.js";
    import arcticConfig from "./config/arctic.js";
    import financialConfig from "./config/financial.js";

    let temperatureChart;
    let articChart;
    let financialChart;

    onMount(() => {
        // window.document.body.classList.toggle("dark-mode");
        let aChart = new Chart(articChart, arcticConfig);
        let tChart = new Chart(temperatureChart, temperatureConfig);
        let fChart = new Chart(financialChart, financialConfig);
    });
</script>

<div class="container mx-auto">
    <Nav />
    <h2 class="text-lg font-bold mb-4">Financial Data</h2>
    <div class="grid grid-cols-2 gap-6 mb-16">
        <div class="bg-foreground rounded-lg shadow-lg col-span-2" bind:this={financialChart} />
    </div>

    <h2 class="text-lg font-bold mb-4">Scientific Data</h2>
    <div class="grid grid-cols-2 gap-6 mb-16">
        <div class="bg-foreground rounded-lg shadow-lg" bind:this={articChart} />
        <div class="bg-foreground rounded-lg shadow-lg" bind:this={temperatureChart} />
    </div>
</div>
