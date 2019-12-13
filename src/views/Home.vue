<template>
    <div class="row">
        <div class="col-12 text-center">
          <button class="btn btn-success mt-2 mb-5" @click="loadData()">FETCH DATA</button>
        </div>

        <app-box v-for="item in data" :item="item" :update="last_updated_timestamp"></app-box>
    </div>
</template>

<script lang="ts">
  import {mapActions} from 'vuex';
  import Box from '../components/Box';

  export default {
    components: {
      appBox: Box
    },
    data() {
      return {}
    },
    computed: {
      data() {
        return this.$store.getters.coins.coins;
      },
      last_updated_timestamp() {
        return this.$store.getters.coins.last_updated_timestamp;
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      ...mapActions({
          loadData: 'loadData'
      })
    }
  }
</script>