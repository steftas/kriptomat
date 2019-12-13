<template>
    <div class="modal custom-modal">
        <div class="custom-modal-content">
            <span class="custom-close" @click="$emit('close')">&times;</span>
            <p>{{modalData.msg}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['modalData']
    }
</script>

<style scoped lang="scss">
    .custom-modal {
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);

        .custom-modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            position: relative;

            .custom-close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                position: absolute;
                right: 10px;
                top: 0;

                &:hover,
                &:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                }
            }

            p {
                text-align: center;
                margin: 15px 0;
            }
        }
    }
</style>