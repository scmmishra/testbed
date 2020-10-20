<script>
    // Styles
    import "./main.css";

    // Components
    import Nav from "./components/Nav.svelte";

    // Helpers
    import { onMount } from "svelte";

    // Chart
    import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";

    import temperatureConfig from "./config/temperature.js";
    import arcticConfig from "./config/arctic.js";
    import financialConfig from "./config/financial.js";

    let temperatureChart;
    let articChart;
    let financialChart;

    onMount(() => {
        let aChart = new Chart(articChart, arcticConfig);
        let tChart = new Chart(temperatureChart, temperatureConfig);
        let fChart = new Chart(financialChart, financialConfig);
    });
</script>

<div class="container mx-auto">
    <Nav />
    <div class="grid grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-lg" bind:this={articChart} />
        <div class="bg-white rounded-lg shadow-lg" bind:this={temperatureChart} />
        <div class="bg-white rounded-lg shadow-lg" bind:this={financialChart} />
    </div>
</div>
