const setChartPercent = (setNumber) => {
    const ptChart = document.getElementById("ptChart");
    const ptChartStr = document.getElementById("ptChartStr");

    ptChart.style.maxWidth = setNumber + "%";
    ptChartStr.innerText = setNumber + "%";
}

setChartPercent(50);