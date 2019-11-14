<template>
  <div>
    <div id="myChart" class="my-chart"></div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      msg: 'I am Glute!'
    }
  },
  methods: {
    getMyChart () {
      let myChart = echarts.init(document.getElementById('myChart'))
      let data = this.getVirtulData(2016)
      let option = {
        backgroundColor: '#404a59',
        title: {
          top: 20,
          text: '2016年某人每天的在线时长',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        calendar: [{
          top: 100,
          left: 'center',
          range: ['2016-01-01', '2016-12-30'],
          itemStyle: {
            normal: {
              color: '#323c48',
              borderWidth: 1,
              borderColor: '#111'
            }
          }
        }],
        series: [
          {
            name: '在线时长',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: function (val) {
              return val[1] / 90
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    },
    getVirtulData (year) {
      year = year || '2017'
      let date = +echarts.number.parseDate(year + '-01-01')
      let end = +echarts.number.parseDate((+year + 1) + '-01-01')
      let dayTime = 3600 * 24 * 1000
      let data = []
      for (let time = date; time < end; time += dayTime) {
        data.push([
          echarts.format.formatTime('yyyy-MM-dd', time),
          Math.floor(Math.random() * 1000)
        ])
      }
      // console.log(data)
      return data
    }
  },
  mounted () {
    this.getMyChart()
  }
}
</script>

<style scoped>
.my-chart{
  width: 100%;
  height: 300px;
}
</style>
