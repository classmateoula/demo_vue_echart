<template>
  <canvas id="cas" style="width: 100; height: 100;"></canvas>
</template>

<script>
// import '../assets/global/common.js'
export default {
  data () {
    return {
      msg: 'I am Glute!'
    }
  },
  methods: {
    systemctlStart () {
      console.log(1)
    },
  },
  mounted () {
    this.systemctlStart()
  }
}
</script>

<style scoped>

</style>
