const setChartPercent = (setNumber) => {
    const ptChartArea = document.getElementById("ptChartArea");
    let ptChart = document.getElementById("ptChart");
    ptChartArea.removeChild(ptChart);

    ptChart = document.createElement('div');
    ptChart.className = 'progress-chart';
    ptChart.id = 'ptChart';

    const ptChartStr = document.createElement('span'); //document.getElementById("ptChartStr");
    ptChartStr.className = 'progress-chart-str';
    ptChartStr.id = 'ptChartStr';
    ptChart.appendChild(ptChartStr);
    ptChartArea.appendChild(ptChart);

    ptChart.style.maxWidth = setNumber + "%";
    ptChartStr.innerText = setNumber + "%";
}

setChartPercent(50);