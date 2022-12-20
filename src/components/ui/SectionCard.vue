<template>
    <div class="main-card">
        <slot></slot>
    </div>
</template>

<style scoped>
div.main-card {
    border: 1px solid rgb(231, 231, 231);
    padding: 25px 30px;
    border-radius: 15px;
    margin: 0 10%;
    box-shadow: 3px 6px 10px -2px rgb(0 0 0 / 10%);
    margin-bottom: 15px;
    margin-top: 10px;
}
</style>