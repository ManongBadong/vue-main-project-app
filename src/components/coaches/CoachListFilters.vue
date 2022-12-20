<template>
    <h2>Find your Coach</h2>
    <div>
        <ul>
            <li>
                <input type="checkbox" id="frontend" value="frontend" @change="setFilters"><label
                    for="frontend">Frontend</label>
            </li>
            <li>
                <input type="checkbox" id="backend" value="backend" @change="setFilters"><label
                    for="backend">Backend</label>
            </li>
            <li>
                <input type="checkbox" id="career" value="career" @change="setFilters"><label
                    for="career">Career</label>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend: false,
                backend: false,
                career: false
            }
        }
    },
    methods: {
        setFilters(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            }
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: left;
}

li {
    margin-right: 15px;
}
</style>