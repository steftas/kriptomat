<template>
  <div>
    <app-header></app-header>
    <div class="p-24">
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>

    <div class="alert alert-danger" role="alert" v-if="error">
      {{error}}
    </div>
  </div>
</template>

<script lang="ts">
  import Header from './components/Header.vue';
  
  export default {
    components: {
      appHeader: Header
    },
    computed: {
      error() {
        return this.$store.getters.error ? this.$store.getters.error.bodyText : null
      }
    }
  }
</script>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
  }

  .alert {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }

  @for $i from 1 through 60 {
    .p-#{$i} {
      padding: ($i) * 1px;
    }

    .m-#{$i} {
      margin: ($i) * 1px;
    }

    .mb-#{$i} {
      margin-bottom: ($i) * 1px;
    }
  }
</style>
