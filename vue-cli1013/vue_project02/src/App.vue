<template>
  <div id="app">
    <my-addtion></my-addtion>
    <my-subtration></my-subtration>
  </div>
</template>

<script>
import Addtion from './components/Addition'
import Subtration from './components/Subtration'
export default {
  data () {
    return {}
  },
  components: {
    'my-addtion': Addtion,
    'my-subtration': Subtration
  }
}
</script>
