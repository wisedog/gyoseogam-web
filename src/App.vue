<template>
  <div id="app">
    <top-header/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/styles.scss';
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopHeader from '@/views/components/Header.vue';

@Component({
  components: {
    'top-header': TopHeader,
  },
})
export default class App extends Vue {}
</script>