<template>
  <div>
    <div class="big-box">
      <div id="helloWord" style="width: 100%; height: 500px;"></div>
    </div>
    <div class="lm-tc">蜀ICP备<a href="http://www.miitbeian.gov.cn/" target="_black" class="color-black">18036591</a>号</div>
  </div>
</template>

<script>
import echarts from 'echarts'
import '../../static/echarts-gl.js'

export default {
  data () {
    return {
      msg: 'I am Glute!'
    }
  },
  methods: {
    getBall () {
      let myChart = echarts.init(document.getElementById('helloWord'))
      myChart.setOption({
        backgroundColor: '#000',
        globe: {
          baseTexture: '../assets/logo.png',
          // baseTexture: 'data-gl/asset/earth.jpg',
          heightTexture: 'data-gl/asset/bathymetry_bw_composite_4k.jpg',

          displacementScale: 0.1,

          shading: 'lambert',

          environment: 'data-gl/asset/starfield.jpg',

          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },

          layers: [{
            type: 'blend',
            blendTo: 'emission',
            texture: 'data-gl/asset/night.jpg'
          }, {
            type: 'overlay',
            texture: 'data-gl/asset/clouds.png',
            shading: 'lambert',
            distance: 5
          }]
        },
        series: []
      })
    }
  },
  mounted () {
    this.getBall()
  }
}
</script>

<style scoped>
.box {
  height: .9rem;
  width: 100%;
}
</style>
