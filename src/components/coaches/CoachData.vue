<template>
    <div :class="{ main: asList }">
        <span class="name">{{ coach.name }}</span>
        <span class="rate">${{ coach.rate }}/hour</span>
        <div class="pill-container">
            <coach-type-pill v-for="type in coach.types" :key="type" :coach-type="type">{{ type.charAt(0).toUpperCase()
                    + type.slice(1)
            }}</coach-type-pill>
        </div>
        <div class="description" v-if="coach.description">
            {{ coach.description }}
        </div>
        <div class="action-container" v-if="asList">
            <button-card type="button" mode="secondary" :link-to="coachLinkContact">Contact</button-card>
            <button-card type="button" mode="primary" :link-to="coachLink">Details</button-card>
        </div>
    </div>
</template>

<script>
import CoachTypePill from './CoachTypePill.vue';
import ButtonCard from '../ui/ButtonCard.vue';

export default {
    props: ['coach', 'asList'],
    components: {
        CoachTypePill,
        ButtonCard
    },
    computed: {
        coachLink() {
            return this.$route.path + '/' + this.coach.id
        },
        coachLinkContact() {
            return this.$route.path + '/' + this.coach.id + '/contact'
        },
    }
}
</script>

<style scoped>
span.name,
span.rate {
    position: relative;
    display: block;
    margin-bottom: 5px;
}

span.rate {
    font-size: .85em;
    font-weight: 600;
}

div.main {
    border: 1px solid #e5e5e5;
    background: transparent;
    padding: 15px 20px;
    border-radius: 10px;
    margin-bottom: 15px;
    margin-top: 10px;
}

div.description {
    margin-top: 25px;
    background: #e1eced;
    border-radius: 10px;
    padding: 15px 20px;
    color: #417891;
    font-size: .95em;
}

.pill-container {
    margin: 10px 0;
}

.action-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: right;
}
</style>