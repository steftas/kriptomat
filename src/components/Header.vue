<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <div class="navbar-brand">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <router-link to="/home" class="nav-item" activeClass="active" tag="li">
            <a class="nav-link">Home</a>
          </router-link>

          <router-link to="/alerts" class="nav-item" activeClass="active" tag="li">
            <a class="nav-link">Alerts</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import {mapActions} from 'vuex';
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .navbar-brand {
    img {
      max-width: 50px;
    }
  }
</style>
