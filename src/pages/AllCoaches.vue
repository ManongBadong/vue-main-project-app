<template>
    <section>
        <section-card>
            <coach-list-filters @change-filter="changeFilters"></coach-list-filters>
        </section-card>
        <section-card>
            <coaches-list></coaches-list>
        </section-card>
    </section>
</template>

<script>
import CoachesList from '../components/coaches/CoachesList.vue';
import CoachListFilters from '../components/coaches/CoachListFilters.vue';

export default {
    components: {
        CoachesList,
        CoachListFilters
    },
    methods: {
        async changeFilters(filters) {
            console.log(filters)
            await this.$store.dispatch({
                type: 'coach/fetchCoaches',
                filters
            })
        }
    }
}
</script>

<style scoped>

</style>