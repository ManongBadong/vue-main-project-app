<template>
    <section>
        <section-card>
            <div v-if="!isLoading">
                <h2>Coach Detail</h2>
                <coach-data :coach="coach"></coach-data>
            </div>
            <div v-else>
                <the-loader></the-loader>
            </div>
        </section-card>
        <router-view></router-view>
    </section>

</template>

<script>
import CoachData from '../components/coaches/CoachData.vue';

export default {
    components: {
        CoachData,
    },
    data() {
        return {
            isLoading: false,
            coach: {}
        }
    },
    props: ['id'],
    async beforeMount() {
        this.isLoading = true;
        const id = this.id;

        await this.$store.dispatch({
            type: 'coach/refreshSpecificCoach',
            id
        });

        this.coach = this.$store.getters['coach/getCoach']
        this.isLoading = false;
    }

}
</script>

<style>

</style>