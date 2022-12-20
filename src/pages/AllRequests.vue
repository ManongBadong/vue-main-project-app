<template>
    <section>

        <section-card>
            <div v-if="!isLoading">
                <h2>Requests</h2>
                <request-card v-for="request in requests" :key="request.id" :request="request"></request-card>
            </div>
            <div v-else>
                <the-loader></the-loader>
            </div>
        </section-card>
    </section>
</template>

<script>
import RequestCard from '../components/requests/RequestCard.vue';

export default {
    components: {
        RequestCard
    },
    data() {
        return {
            isLoading: false,
        }
    },
    computed: {
        requests() {
            return this.$store.getters['request/getRequests']
        },
    },
    async beforeMount() {
        this.isLoading = true;
        await this.$store.dispatch({
            type: 'request/loadRequests'
        })
        this.isLoading = false;
    }
}
</script>

<style>

</style>