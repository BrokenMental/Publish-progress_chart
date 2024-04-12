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
    //requestAnimationFrame(increaseCnt); //화면 그대로 진행 시 초기화가 안됨
    increaseCnt();

    ptChart.style.maxWidth = setNumber + "%";
    ptChartStr.innerText = setNumber + "%";

    if(setNumber > 95) {
        ptChartStr.style.left = "95%";
    }else {
        ptChartStr.style.left = "100%";
    }
};

/*
const increaseCnt = (timestamp) => {
    if(progressChart2_currentCnt < progressChart2_targetCnt) {
        const ptChart = document.getElementById("ptChart");
        const ptChartStr = document.getElementById("ptChartStr");
        progressChart2_currentCnt++;
        ptChartStr.innerText = progressChart2_currentCnt + '%';

        if(progressChart2_currentCnt < 30) {
            ptChart.style.backgroundColor = '#FF0000';
            ptChartStr.style.color = '#FF0000';
        }else if(progressChart2_currentCnt > 25 && progressChart2_currentCnt <= 50 ) {
            ptChart.style.backgroundColor = '#FFA500';
            ptChartStr.style.color = '#FFA500';
        }else if(progressChart2_currentCnt > 50 && progressChart2_currentCnt <= 75 ) {
            ptChart.style.backgroundColor = '#008000';
            ptChartStr.style.color = '#008000';
        }else {
            ptChart.style.backgroundColor = '#4B78A8';
            ptChartStr.style.color = '#4B78A8';
        }

        requestAnimationFrame(increaseCnt);
    }
}
*/

const increaseCnt = () => {
    const ptChart = document.getElementById("ptChart");
    const ptChartStr = document.getElementById("ptChartStr");

    const progressChart2Interval = setInterval(() => {
        if(progressChart2_currentCnt < progressChart2_targetCnt) {
            progressChart2_currentCnt++;
            ptChartStr.innerText = progressChart2_currentCnt + '%';

            if(progressChart2_currentCnt < 30) {
                ptChart.style.backgroundColor = '#FF0000';
                ptChartStr.style.color = '#FF0000';
            }else if(progressChart2_currentCnt > 25 && progressChart2_currentCnt <= 50 ) {
                ptChart.style.backgroundColor = '#FFA500';
                ptChartStr.style.color = '#FFA500';
            }else if(progressChart2_currentCnt > 50 && progressChart2_currentCnt <= 75 ) {
                ptChart.style.backgroundColor = '#008000';
                ptChartStr.style.color = '#008000';
            }else {
                ptChart.style.backgroundColor = '#4B78A8';
                ptChartStr.style.color = '#4B78A8';
            }
        }else {
            clearInterval(progressChart2Interval);
            progressChart2_currentCnt = 0;
            progressChart2_targetCnt = 0;
        }
    }, 20);
}

setChartPercent(100);