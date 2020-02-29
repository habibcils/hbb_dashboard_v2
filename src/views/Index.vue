<template>
<div>
	<Layout>
        <!-- jack -->
        <router-view />
        <vue-progress-bar></vue-progress-bar>
    </Layout>

</div>
</template>

<script>
import Layout from '@/components/layout/Layout';
export default {
    names: 'Index',
    components: {
        // Login
        Layout
    },
    data() {
        return {
            loginStat: 0,
        }
    },
    methods: {
        start() {
            this.$Progress.start()
        },
        set(num) {
            this.$Progress.set(num)
        },
        increase(num) {
            this.$Progress.increase(num)
        },
        decrease(num) {
            this.$Progress.decrease(num)
        },
        finish() {
            this.$Progress.finish()
        },
        fail() {
            this.$Progress.fail()
        },
    },
    beforeUpdate() {
        this.start()
    },
    updated() {
        this.finish()
    }    
}
</script>

<style scoped>

</style>
