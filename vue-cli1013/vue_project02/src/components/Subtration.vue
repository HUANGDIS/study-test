<template>
  <div>
    <h3>当前数目为:{{$store.state.count}}</h3>
    <button @click="subAsync">-1</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import {mapActions} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapMutations(['subN'])
  },
  methods: {
    ...mapMutations(['sub']),
    ...mapActions(['subAsync']),
    handle3: function () {
      this.$store.commit('subN', 2)
    }
  }
}
</script>
