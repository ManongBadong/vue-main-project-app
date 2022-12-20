<template>
    <span :class="coachType.toLowerCase()">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: ['coachType']
}
</script>

<style scoped>
span {
    position: relative;
    display: inline-block;
    color: white;
    padding: 7px 12px;
    border-radius: 100px;
    margin-right: 15px;
}

span.frontend {
    background-color: #003249;
}

span.backend {
    background-color: #007EA7;
}

span.career {
    background-color: #80CED7;
}
</style>