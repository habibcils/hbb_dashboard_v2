<template>
<div>

    <Login v-if="!loginState" />
    <Index v-if="loginState" />
    <!-- <vue-progress-bar></vue-progress-bar> -->
</div>
</template>

<script>
import Login from './views/Login';
import Index from './views/Index';

export default {
    name: 'App',
    components: {
        Login,
        Index
    },
    data() {
        return {
            loginState: 1,
        }
    },
    // methods: {
    //     start() {
    //         this.$Progress.start()
    //     },
    //     set(num) {
    //         this.$Progress.set(num)
    //     },
    //     increase(num) {
    //         this.$Progress.increase(num)
    //     },
    //     decrease(num) {
    //         this.$Progress.decrease(num)
    //     },
    //     finish() {
    //         this.$Progress.finish()
    //     },
    //     fail() {
    //         this.$Progress.fail()
    //     },
    // },
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {
    //     this.start()
    // },
    // updated() {
    //     this.finish()
    // }
}
</script>
