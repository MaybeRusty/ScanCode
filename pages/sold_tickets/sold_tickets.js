import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      //shape: 'circle',
      indicator: [{
        name: '平安保险',
        max: 500
      },
      {
        name: '中国移动',
        max: 500
      },
      {
        name: '中国联通',
        max: 500
      },
      {
        name: '航天动力',
        max: 500
      },
      {
        name: '中国电信',
        max: 500
      },
      {
        name: '其他',
        max: 1500
      }
      ]
    },
    series: [{
      name: '已售',
      type: 'radar',
      data: [{
        value: [200, 340, 370, 150, 400, 600],
        name: '已售'
      }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
