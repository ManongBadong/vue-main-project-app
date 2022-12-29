<template>
    <section>
        <section-card>
            <coach-list-filters @change-filter="changeFilters"></coach-list-filters>
        </section-card>
        <section-card>
            <coaches-list :active-filters="activeFilters"></coaches-list>
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
    data() {
        return {
            activeFilters: {
                frontend: false,
                backend: false,
                career: false
            }
        };
    },
    methods: {
        async changeFilters(filters) {
            this.activeFilters = filters;
            let activeFilters = this.activeFilters
            console.log(this.activeFilters)
            await this.$store.dispatch({
                type: 'coach/fetchCoaches',
                activeFilters
            })
        }
    },
}
</script>

<style scoped>

</style>