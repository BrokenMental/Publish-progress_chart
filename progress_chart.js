const setChartPercent = (setNumber) => {
    const ptChartArea = document.getElementById("ptChartArea");
    let ptChart = document.getElementById("ptChart");
    ptChartArea.removeChild(ptChart);

    ptChart = document.createElement("div");
    ptChart.className = "progress-chart";
    ptChart.id = "ptChart";

    const ptChartStr = document.createElement("span"); //document.getElementById("ptChartStr");
    ptChartStr.className = "progress-chart-str";
    ptChartStr.id = "ptChartStr";
    ptChart.appendChild(ptChartStr);
    ptChartArea.appendChild(ptChart);

    ptChart.style.maxWidth = setNumber + "%";
    ptChartStr.innerText = setNumber + "%";

    if (setNumber < 12 && setNumber >= 8) {
        ptChartStr.style.fontSize = "small";
    } else if (setNumber < 8) {
        ptChartStr.style.fontSize = "large";
        ptChartStr.style.left = "100%";
        ptChartStr.style.transform = "translate(10%, -50%)";
        ptChartStr.style.color = "#4B78A8";
    }
};

setChartPercent(50);
