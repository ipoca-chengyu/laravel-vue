<template>
  <div id='greetingBox'>{{ greeting }}、みなさん!</div>
</template>
<script>
export default {
  data() {
    return {
      greeting: ''
    }
  },
  mounted() {
    const dt = new Date()
    const hours = dt.getHours()
    if (hours <= 4 || hours >=18) {
      this.greeting = 'こんばんは'
    } else if (hours >=12) {
      this.greeting = 'こんにちは'
    } else {
      this.greeting = 'おはようございます'
    }
  },
};
</script>
<style>
</style>