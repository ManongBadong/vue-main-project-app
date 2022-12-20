<template>
    <div class="coach-list-actions">
        <button-card type="button" mode="secondary" @click="fetchCoaches">Refresh</button-card>
        <button-card type="button" mode="primary" link-to="/register-coach">Register</button-card>
    </div>
    <div v-if="!isLoading">
        <coach-data v-for="coach in getCoaches" :key="coach.id" :coach="coach" :as-list="true"></coach-data>
    </div>
    <div v-else>
        <the-loader></the-loader>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

import TheLoader from '../ui/TheLoader.vue';
import ButtonCard from '../ui/ButtonCard.vue';
import CoachData from './CoachData.vue';

export default {
    components: {
        ButtonCard,
        CoachData,
        TheLoader
    },
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...mapGetters('coach', ['getCoaches'])
    },
    methods: {
        async fetchCoaches() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('coach/fetchCoaches');
            } catch (error) {
                console.log(error);
            }
            this.isLoading = false;

        }
    },
    mounted() {
        this.fetchCoaches();
    }

}
</script>

<style scoped>
.coach-list-actions {
    display: flex;
    justify-content: space-between;
}
</style>