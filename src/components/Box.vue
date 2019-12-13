<template>
    <router-link :to="{ name: 'detail', params: { id: item.symbol }}" class="col-sm-12 col-md-6 col-lg-4 mb-16 cursor-pointer" tag="div">
        <div class="card">
            <h5 class="card-header text-white bg-dark">
                {{item.name}}

                <small>{{item.symbol}}</small>

                <small class="float-right">Rank #{{item.rank}}</small>
            </h5>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-12">
                        <p class="card-text">
                            <b>Price:</b> 
                            <span>{{item.price | currency}}</span>
                        </p>
                    </div>

                    <div class="col-sm-12">
                        <p class="card-text">
                            <b>Market CAP:</b> 
                            <span>{{item.market_cap | currency}}</span>
                        </p>
                    </div>

                    <div class="col-sm-12">
                        <p class="card-text">
                            <b>Volume 24h:</b> 
                            <span>{{item.volume_24h | currency}}</span>
                        </p>
                    </div>

                    <div class="col-sm-12">
                        <p class="card-text">
                            <b>Delta 24h:</b> 
                            <span>{{item.delta_24h}}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="card-footer text-muted">
                <span class="float-right">{{update | moment("MMMM Do YYYY / HH:mm")}}</span>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: ['item', 'update']
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