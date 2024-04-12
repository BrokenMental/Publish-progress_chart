let progressChart2_currentCnt = 0;
let progressChart2_targetCnt = 0;

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

    progressChart2_targetCnt = setNumber;
    requestAnimationFrame(increaseCnt);
    //increaseCnt();

    ptChart.style.maxWidth = setNumber + "%";
    ptChartStr.innerText = setNumber + "%";

    if(setNumber > 95) {
        ptChartStr.style.left = "95%";
    }else {
        ptChartStr.style.left = "100%";
    }
};

const increaseCnt = (timestamp) => {
    if(progressChart2_currentCnt < progressChart2_targetCnt) {
        const ptChartStr = document.getElementById("ptChartStr");
        progressChart2_currentCnt++;
        ptChartStr.innerText = progressChart2_currentCnt + '%';

        if(progressChart2_currentCnt < 30) {
            ptChartStr.style.color = '#FF0000';
        }else if(progressChart2_currentCnt > 25 && progressChart2_currentCnt <= 50 ) {
            ptChartStr.style.color = '#FFA500';
        }else if(progressChart2_currentCnt > 50 && progressChart2_currentCnt <= 75 ) {
            ptChartStr.style.color = '#008000';
        }else {
            ptChartStr.style.color = '#4B78A8';
        }

        requestAnimationFrame(increaseCnt);
    }
}

/*
const increaseCnt = () => {
    const ptChartStr = document.getElementById("ptChartStr");

    const progressChart2Interval = setInterval(() => {
        if(progressChart2_currentCnt < progressChart2_targetCnt) {
            progressChart2_currentCnt++;
            ptChartStr.innerText = progressChart2_currentCnt + '%';
        }else {
            clearInterval(progressChart2Interval)
        }
    }, 20);
}
*/

setChartPercent(100);