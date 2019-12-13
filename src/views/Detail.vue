<template>
  <div class="detail">
    <router-link :to="{ name: 'home'}" class="btn btn-primary mb-2" tag="button">Back</router-link>

    <div class="card">
        <h5 class="card-header text-white bg-dark">
            {{item.name}}

            <small>{{item.symbol}}</small>

            <small class="float-right">Rank #{{item.rank}}</small>
        </h5>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <p class="card-text">
                <b>Price:</b> 
                <span>{{item.price | currency}}</span>
              </p>
            </div>

            <div class="col-sm-12 col-md-6">
                <p class="card-text">
                    <b>Market CAP:</b> 
                    <span>{{item.market_cap | currency}}</span>
                </p>
            </div>

            <div class="col-sm-12 col-md-6">
                <p class="card-text">
                    <b>Low 24h:</b> 
                    <span>{{item.low_24h | currency}}</span>
                </p>
            </div>

            <div class="col-sm-12 col-md-6">
                <p class="card-text">
                    <b>High 24h:</b> 
                    <span>{{item.high_24h | currency}}</span>
                </p>
            </div>

            <div class="col-sm-12 col-md-6">
                <p class="card-text">
                    <b>Delta 1h:</b> 
                    <span>{{item.delta_1h}}</span>
                </p>
            </div>

            <div class="col-sm-12 col-md-6">
                <p class="card-text">
                    <b>Delta 24h:</b> 
                    <span>{{item.delta_24h}}</span>
                </p>
            </div>

            <div class="col-sm-12 col-md-6">
                <p class="card-text">
                    <b>Delta 7d:</b> 
                    <span>{{item.delta_7d}}</span>
                </p>
            </div>

            <div class="col-sm-12 col-md-6">
                <p class="card-text">
                    <b>Delta 30d:</b> 
                    <span>{{item.delta_30d}}</span>
                </p>
            </div>
          </div>
          
          <hr>

          <div class="row">
            <div class="col-sm-12">
              <div class="form-inline" style="justify-content: flex-end;">
                <div class="form-group mx-sm-3 mb-2">
                  <label class="mr-2"><i class="mr-2">Setted price:</i> <b>{{priceAlert ? priceAlert.alert : 'Alert not setted' }}</b></label>
                  <input type="number" class="form-control" id="priceAlert" placeholder="Set Price Alert" v-model="newAlertPrice">
                </div>
                <button type="button" class="btn btn-primary mb-2" @click="setAlert()">Set Alert</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer text-muted">
            <span class="float-right">{{item.last_updated_timestamp | moment("MMMM Do YYYY / HH:mm")}}</span>
        </div>
    </div>

    <div class="text-center">
      <button class="btn btn-success mt-2 mb-2" @click="fetchNewData()">FETCH DATA</button>
    </div>

    <app-modal v-if="showModal" :modalData="modalData" @close="showModal = false"></app-modal>
  </div>
</template>

<script lang="ts">
  import Modal from '../components/Modal.vue';
  
  export default {
    components: {
      appModal: Modal
    },
    data() {
      return {
        item: {},
        newAlertPrice: null,
        showModal: false,
        modalData: {}
      }
    },
    computed: {
      priceAlert() {
        const array = this.$store.getters.alerts;
        let obj = {
          name: '',
          symbol: '',
          price: 0,
          alert: 0,
          edit: false
        };

        if (array.length > 0) {
          const filtered = array.filter(x => x.symbol == this.$route.params.id);
          obj = filtered[0];

          if (obj && this.item.price > obj.alert) {
            this.modalData = {
              msg: 'Current item price is bigger than your setted alert price!.',
              currPrice: this.item.price,
              alertPrice: obj.alert
            }
            this.showModal = true;
          }
        }

        return obj
      }
    },
    created() {
      this.fetchNewData();
    },
    methods: {
      setAlert() {
        const alert = {
          name: this.item.name,
          symbol: this.item.symbol,
          price: this.item.price,
          alert: this.newAlertPrice,
          edit: false
        };
        
        this.$store.dispatch('addAlert', alert);
      },
      fetchNewData() {
        this.$http.get(`https://coinlib.io/api/v1/coin?key=ae3b54509aa7901b&pref=USD&symbol=${this.$route.params.id}`).then(response => {
          this.item = response.data;
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    .card-body {
      .card-text {
        b {
            margin-right: 10px;
        }
      }
    }
  }
</style>
