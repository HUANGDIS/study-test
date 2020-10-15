<template>
  <div>
    <!-- <h3>当前数目为: {{count }} </h3> -->
    <h3>当前数目为: {{showNum }} </h3>
    <!-- <h3>{{$store.getters.showNum}} </h3> -->
    <button @click="handle1">+1</button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    handle1: function () {
      this.$store.commit('add') 
    },
    handle11: function () {
      this.$store.dispatch('addAsync')
    },
    handle12: function () {
      this.$store.dispatch('addAsync1', 4)
    },
    handle2: function () {
      this.$store.commit('addN', 3)
    },
    handle3: function(){
      this.$store.getters.getNum
    }
  }
}
</script>
