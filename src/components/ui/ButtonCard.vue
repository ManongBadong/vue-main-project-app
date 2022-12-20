<template>
    <button :type="type" :class="mode" v-if="!linkTo">
        <slot></slot>
    </button>
    <router-link :to="linkTo" :class="mode" v-else>
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: ['type', 'mode', 'linkTo'],
}
</script>

<style scoped>
button,
a {
    padding: 10px 15px;
    border-radius: 5px;
    margin-right: 10px;
    min-width: 75px;
    cursor: pointer;
    transition: all 30ms ease-in;
    font-size: 1em;
    text-decoration: none;
}

button.secondary,
a.secondary {
    border: 1px solid #ccc;
    background: transparent;
    color: #59747c;
}

button.secondary:hover,
a.secondary:hover {
    border: 1px solid #80CED7;
    background: #80CED7;
    color: white;
}

button.primary,
a.primary {
    border: 1px solid #007EA7;
    background: #007EA7;
    color: white;
}

button.primary:hover,
a.primary:hover {
    border: 1px solid #003249;
    background: #003249;
    color: white;
}
</style>