<template>
  <div class="alerts">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Symbol</th>
          <th scope="col">Current price</th>
          <th scope="col">Setted alert price</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(alert, index) of alerts">
          <th scope="row">{{index + 1}}</th>
          <td>{{alert.name}}</td>
          <td>{{alert.symbol}}</td>
          <td>{{alert.price | currency}}</td>
          <td class="price-alert-td">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input 
                  data-toggle="tooltip" data-placement="bottom" title="Double click to edit"
                  :readonly="alert.edit ? false : true" 
                  :class="alert.edit ? 'form-control' : 'form-control-plaintext'" 
                  type="text" 
                  placeholder="Alert price" 
                  v-model="alert.alert" 
                  @dblclick="alert.edit=true" 
                  @keyup.enter="alert.edit=false;" />
              
              <i class="fa fa-edit" :class="alert.edit ? '' : 'showIcon'" @dblclick="alert.edit=true"></i>
            </div>
            
          </td>
          <td><button type="button" class="btn btn-danger" @click="removeAlert(index)">Remove</button></td>
        </tr>

        <tr v-if="alerts.length === 0">
          <td colspan="6" class="text-center"><h3>No Alerts set</h3></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {}
    },
    computed: {
      alerts() {
        return this.$store.getters.alerts
      }
    },
    methods: {
      removeAlert(index: number) {
        this.$store.dispatch('removeAlert', index);
      }
    }
  }
</script>

<style scoped lang="scss">
  .price-alert-td {
    position: relative;

    .input-group-text {
      background: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
    }
    
    input {
      outline: none;
    }
    
    i {
      position: absolute;
      top: 22px;
      right: 5px;
      display: none;
    }

    &:hover {
      i.showIcon {
        display: block;
      }
    }
  }
</style>
