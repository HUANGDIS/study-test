<template>
<div>
  <h3>当前数目为: {{count }} </h3>
  <button @click="handle1">+1</button>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    handle1: function () {
      this.$store.commit('add') 
    }
  }
}
</script>
