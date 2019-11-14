<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'I am Glute!'
    }
  },
  methods: {
    getUserInfo () {
      console.log(1)
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
