<template>
  <div>
    <section-01></section-01>

    <section-02></section-02>

    <section-03></section-03>

    <section-04></section-04>
  </div>
</template>

<script>
  import Section01 from './section-01/index'
  import Section02 from './section-02/index'
  import Section03 from './section-03/index'
  import Section04 from './section-04/index'

  export default {
    data () {
      return {

      }
    },
    components: {
      'section-01': Section01,
      'section-02': Section02,
      'section-03': Section03,
      'section-04': Section04
    }
  }
</script>
